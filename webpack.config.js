const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // Entry point of your application
    entry: './client/src/index.js',

    // Output configuration
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
      proxy: {
        '/api': 'http://localhost:5000'
      }
    },

    // Module rules for processing different file types
    module: {
      rules: [
        // JavaScript and JSX
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
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

    // Plugins
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

    // Resolve extensions and modules
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'client/src'), 'node_modules']
    },

    // Source maps for debugging
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    // Optimization
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};