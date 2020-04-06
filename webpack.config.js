/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2020-04-01T10:32:26-04:00
 * @Filename: webpack.config.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2020-04-06T11:20:23-04:00
 */



const path = require('path');
const webpackPagePlugins = require('./webpack.page.plugins.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    contact: './src/contact.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    compress: true,
    headers : { 'Cache-Control': 'max-age=31536000' },
  },
  optimization: {
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
    },
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ],
  },
  plugins: [
    webpackPagePlugins.index,
    webpackPagePlugins.about,
    webpackPagePlugins.contact,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {loader: 'url-loader'},
        ]
      },
      {
        test: /\.(mp3)$/i,
        use: [
          {loader: 'file-loader'},
        ]
      },
    ]
  }
}
