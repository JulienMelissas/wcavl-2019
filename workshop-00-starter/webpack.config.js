const path = require("path");

module.exports = {
  entry: "./blocks/index.js",
  output: {
    filename: "./assets/js/blocks.editor.js",
    path: path.resolve(__dirname)
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
