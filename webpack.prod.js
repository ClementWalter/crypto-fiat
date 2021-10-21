/* eslint-disable import/no-extraneous-dependencies */
// noinspection JSCheckFunctionSignatures

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
});
