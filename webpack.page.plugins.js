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
