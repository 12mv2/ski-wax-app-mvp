const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // Entry point: Where Webpack starts bundling
    entry: './client/src/index.js',

    // Output: How and where to place bundled files
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      publicPath: '/'
    },

    // Development server configuration
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
      static: {
        directory: path.join(__dirname, 'client/public') // ensures access to static files in the public directory
      },
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:5001',
          logLevel: 'info'
        }
      ]
    },

    // Module rules for processing different file types
    module: {
      rules: [
        // JavaScript and JSX
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        // CSS
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        // Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    },

    // Plugins for additional build steps
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './client/public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
      new Dotenv()
    ],

    // Module resolution configuration
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'client/src'), 'node_modules']
    },

    // Source map configuration for debugging
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    // Code splitting optimization
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};