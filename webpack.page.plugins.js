/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2020-04-04T14:55:49-04:00
 * @Filename: webpack.page.plugins.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2020-04-06T11:20:31-04:00
 */



const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  index: new HtmlWebPackPlugin({
    hash: true,
    template: "./src/assets/templates/page.html",
    title: "Hi, I'm Joe",
    filename: "index.html",
    chunks: ['index'],
  }),
  about: new HtmlWebPackPlugin({
    hash: true,
    template: "./src/assets/templates/page.html",
    title: "About Joe",
    filename: "about.html",
    chunks: ['about'],
  }),
  contact: new HtmlWebPackPlugin({
    hash: true,
    template: "./src/assets/templates/page.html",
    title: "Contact Joe",
    filename: "contact.html",
    chunks: ['contact'],
  }),
}
