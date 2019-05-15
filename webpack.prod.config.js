const merge = require("webpack-merge");
const common = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const cssFilename = "[name].[contenthash:8].css";

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin({ parallel: true })]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: cssFilename,
      // 이게 켜있어야 CSS 코드가 한 파일에 잘 들어감
      // CSS 도 만약 스플리팅 하고 싶다면 mini-css-extract-plugin 참고
      allChunks: true
    })
  ]
});
