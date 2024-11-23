const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getTree(startPath) {
  let tree = '';
  function buildTree(dir, level) {
    const files = fs.readdirSync(dir);
    files.forEach((file, index) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      const isLast = index === files.length - 1;
      const prefix = level.map(last => last ? '    ' : '│   ').join('');
      const pointer = isLast ? '└── ' : '├── ';

      if (!['node_modules', '.git'].includes(file)) {
        tree += prefix + pointer + file + '\n';
        if (stats.isDirectory()) {
          buildTree(filePath, [...level, isLast]);
        }
      }
    });
  }
  buildTree(startPath, []);
  return tree;
}

function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

async function processFiles(files, batchSize = 5) {
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    for (const file of batch) {
      console.log(`\nFile: ${file}`);
      console.log('Content:');
      console.log(readFileContent(file));
      console.log(`\nPath: ${file}`);
      console.log('--- End of File ---');
    }
    if (i + batchSize < files.length) {
      await new Promise(resolve => rl.question('Press Enter to continue to the next batch of files...', resolve));
    }
  }
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  const ignoredDirs = ['node_modules', '.git'];
  const ignoredFiles = ['.gitignore', 'package-lock.json'];
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!ignoredDirs.includes(file)) {
        getAllFiles(filePath, fileList);
      }
    } else {
      if (!ignoredFiles.includes(file) && !file.endsWith('.log')) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

function detectProjectStack(files, packageJson) {
  let stack = [];
  const fileNames = files.map(f => path.basename(f));
  const dependencies = {...(packageJson.dependencies || {}), ...(packageJson.devDependencies || {})};

  if (dependencies.react) stack.push('React');
  if (dependencies.vue) stack.push('Vue.js');
  if (dependencies.angular) stack.push('Angular');
  if (dependencies.express) stack.push('Express');
  if (dependencies.koa) stack.push('Koa');
  if (dependencies['@nestjs/core']) stack.push('NestJS');
  if (dependencies.mongoose) stack.push('MongoDB');
  if (dependencies.sequelize) stack.push('SQL (via Sequelize)');
  if (dependencies.pg) stack.push('PostgreSQL');
  if (dependencies.mysql || dependencies.mysql2) stack.push('MySQL');
  if (dependencies.sqlite3) stack.push('SQLite');
  if (fileNames.includes('Gemfile')) stack.push('Ruby');
  if (fileNames.includes('requirements.txt') || fileNames.some(f => f.endsWith('.py'))) stack.push('Python');
  if (fileNames.includes('Cargo.toml')) stack.push('Rust');
  if (fileNames.includes('go.mod')) stack.push('Go');

  return stack;
}

function generateExtensiveReadme(projectPath, tree, files) {
  const projectName = path.basename(projectPath);
  let readme = `# ${projectName}\n\n`;

  // Project Overview
  readme += `## Project Overview\n\n`;
  const packageJsonPath = path.join(projectPath, 'package.json');
  let packageJson = {};
  if (fs.existsSync(packageJsonPath)) {
    packageJson = JSON.parse(readFileContent(packageJsonPath));
  }
  const detectedStack = detectProjectStack(files, packageJson);
  
  if (detectedStack.length > 0) {
    readme += `This project uses the following technologies: ${detectedStack.join(', ')}.\n\n`;
  } else {
    readme += `This project's technology stack could not be automatically detected. Please update this section with the relevant information.\n\n`;
  }

  // Project Structure
  readme += `## Project Structure\n\n`;
  readme += `The project is organized as follows:\n\n\`\`\`\n${tree}\`\`\`\n\n`;

  // Key Components
  readme += `## Key Components\n\n`;
  if (detectedStack.includes('React') || detectedStack.includes('Vue.js') || detectedStack.includes('Angular')) {
    readme += `### Frontend\n\n`;
    readme += `The frontend of this application is built with ${detectedStack.find(tech => ['React', 'Vue.js', 'Angular'].includes(tech))}.\n\n`;
  }
  if (detectedStack.includes('Express') || detectedStack.includes('Koa') || detectedStack.includes('NestJS')) {
    readme += `### Backend\n\n`;
    readme += `The backend of this application is built with ${detectedStack.find(tech => ['Express', 'Koa', 'NestJS'].includes(tech))}.\n\n`;
  }
  if (detectedStack.some(tech => ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'].includes(tech))) {
    readme += `### Database\n\n`;
    readme += `This project uses ${detectedStack.find(tech => ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'].includes(tech))} as its database.\n\n`;
  }

  // Key Files and Directories
  readme += `## Key Files and Directories\n\n`;

  const keyFiles = ['package.json', 'server.js', 'app.js', 'index.js', 'db.js', 'requirements.txt', 'Gemfile', 'Cargo.toml', 'go.mod'];
  keyFiles.forEach(file => {
    const filePath = files.find(f => path.basename(f) === file);
    if (filePath) {
      readme += `### ${file}\n\n`;
      readme += `Location: \`${path.relative(projectPath, filePath)}\`\n\n`;
      const content = readFileContent(filePath);
      let description = '';
      if (file === 'package.json') {
        description = `This file contains the project configuration and lists all the dependencies.\n\n`;
        description += `Main dependencies:\n`;
        Object.keys(packageJson.dependencies || {}).forEach(dep => {
          description += `- ${dep}\n`;
        });
        description += `\nDev dependencies:\n`;
        Object.keys(packageJson.devDependencies || {}).forEach(dep => {
          description += `- ${dep}\n`;
        });
        description += `\nScripts:\n`;
        Object.keys(packageJson.scripts || {}).forEach(script => {
          description += `- ${script}: \`${packageJson.scripts[script]}\`\n`;
        });
      } else {
        description = `This is a key file in the project. Review it for detailed functionality.\n`;
      }
      readme += `${description}\n`;
    }
  });

  // Setup and Installation
  readme += `## Setup and Installation\n\n`;
  readme += `1. Clone the repository:\n   \`\`\`\n   git clone [repository URL]\n   cd ${projectName}\n   \`\`\`\n`;
  if (fs.existsSync(packageJsonPath)) {
    readme += `2. Install dependencies:\n   \`\`\`\n   npm install\n   \`\`\`\n`;
  } else if (fs.existsSync(path.join(projectPath, 'requirements.txt'))) {
    readme += `2. Install dependencies:\n   \`\`\`\n   pip install -r requirements.txt\n   \`\`\`\n`;
  } else if (fs.existsSync(path.join(projectPath, 'Gemfile'))) {
    readme += `2. Install dependencies:\n   \`\`\`\n   bundle install\n   \`\`\`\n`;
  } else {
    readme += `2. Install dependencies (please specify the command for your project)\n`;
  }
  readme += `3. Set up your database and update the connection details in the appropriate configuration file.\n`;
  readme += `4. Set up environment variables if necessary.\n`;
  readme += `5. Start the development server (please specify the command for your project)\n\n`;

  // Usage
  readme += `## Usage\n\n`;
  readme += `[Add detailed instructions on how to use the application, including any available commands, API endpoints, or user interface guidelines.]\n\n`;

  // API Documentation
  readme += `## API Documentation\n\n`;
  readme += `[If applicable, provide documentation for your API endpoints here. Include details about request methods, URL parameters, request bodies, and response formats.]\n\n`;

  // Database Schema
  readme += `## Database Schema\n\n`;
  readme += `[Provide an overview of your database schema here. You can include table names, column descriptions, and relationships between tables.]\n\n`;

  // Testing
  readme += `## Testing\n\n`;
  readme += `[Explain how to run the test suite for this project. Include any necessary setup steps and commands.]\n\n`;

  // Deployment
  readme += `## Deployment\n\n`;
  readme += `[Provide instructions or guidelines for deploying this application to a production environment.]\n\n`;

  // Contributing
  readme += `## Contributing\n\n`;
  readme += `[Add contribution guidelines here. Explain how other developers can contribute to the project, including coding standards, pull request process, etc.]\n\n`;

  // License
  readme += `## License\n\n`;
  readme += `[Specify the license under which this project is released.]\n\n`;

  // Contact
  readme += `## Contact\n\n`;
  readme += `[Provide contact information or links for the project maintainers.]\n\n`;

  fs.writeFileSync(path.join(projectPath, 'README.md'), readme);
  console.log('Extensive README.md has been generated.');
}

async function main(projectPath) {
  console.log('Project Structure:');
  const tree = getTree(projectPath);
  console.log(tree);
  console.log('\n--- End of Project Structure ---\n');

  const allFiles = getAllFiles(projectPath);
  await processFiles(allFiles);

  generateExtensiveReadme(projectPath, tree, allFiles);

  rl.close();
}

const projectPath = process.argv[2] || '.';
main(projectPath);