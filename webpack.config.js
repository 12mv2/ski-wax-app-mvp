// webpack configured 
// Import necessary Node.js modules and Webpack plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Export a function that returns the Webpack configuration
// This function takes environment variables and CLI arguments
module.exports = (env, argv) => {
  // Determine if we're in production mode
  const isProduction = argv.mode === 'production';

  // Return the Webpack configuration object
  return {
    // Specify the entry point of your application
    // This is where Webpack starts bundling
    entry: './client/src/index.js',

    // Configure how and where Webpack should output bundled files
    output: {
      // Set the output directory to 'dist' in the current directory
      path: path.resolve(__dirname, 'dist'),
      // In production, use content hash for cache busting
      // In development, use a simple name
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      // Set the base path for all assets in the app
      publicPath: '/'
    },

    // Configure the development server
    devServer: {
      port: 3000, // Run the dev server on port 3000
      historyApiFallback: true, // Redirect 404s to index.html (useful for SPAs)
      hot: true, // Enable Hot Module Replacement
      proxy: {
        // Proxy API requests to your backend server
        '/api': 'http://localhost:5000'
      }
    },

    // Set up rules for how different file types should be processed
    module: {
      rules: [
        // Process JavaScript and JSX files
        {
          test: /\.(js|jsx)$/, // Apply this rule to .js and .jsx files
          exclude: /node_modules/, // Don't process files in node_modules
          use: ['babel-loader'] // Use Babel for transpilation
        },
        // Process CSS files
        {
          test: /\.css$/, // Apply this rule to .css files
          use: [
            // In production, extract CSS to files
            // In development, inject CSS into the DOM
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader' // Process CSS imports
          ]
        },
        // Handle image files
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource', // Automatically choose between inlining and copying files
        }
      ]
    },

    // Configure plugins
    plugins: [
      new CleanWebpackPlugin(), // Clean the output directory before each build
      new HtmlWebpackPlugin({
        template: './client/public/index.html' // Use this HTML file as a template
      }),
      new MiniCssExtractPlugin({
        // In production, use content hash for cache busting
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
      new Dotenv() // Load environment variables from a .env file
    ],

    // Configure how modules are resolved
    resolve: {
      extensions: ['.js', '.jsx'], // Allow importing these files without specifying extensions
      modules: [path.resolve(__dirname, 'client/src'), 'node_modules'] // Where to look for modules
    },

    // Configure source map generation for debugging
    // In production, generate separate source map files
    // In development, inline source maps for faster builds
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    // Optimization settings
    optimization: {
      splitChunks: {
        chunks: 'all', // Split code into smaller chunks for better loading performance
      },
    },
  };
};