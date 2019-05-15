const merge = require("webpack-merge");
const common = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    historyApiFallback: true
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
