const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/background.js",
    content: "./src/content.js",
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/manifest.json" },
        { from: "./src/images", to: "images" },
      ],
    }),
    new ZipPlugin({ filename: "crypto-fiat.zip" }),
  ],
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") },
};
