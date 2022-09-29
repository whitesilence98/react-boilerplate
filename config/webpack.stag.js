const paths = require("./paths");
const Dotenv = require("dotenv-webpack");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
   mode: "production",
   devtool: false,
   plugins: [
      new Dotenv({
         path: "./.env.production",
      }),
      // Extracts CSS into separate files
      // Note: style-loader is for development, MiniCssExtractPlugin is for production
      new MiniCssExtractPlugin({
         filename: "styles/[name].[contenthash].css",
         chunkFilename: "[id].[contenthash].css",
      }),
   ],
   module: {
      rules: [],
   },
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin({
            parallel: 4,
         }),
         new CssMinimizerPlugin(),
      ],
      // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
      // instead of having their own. This also helps with long-term caching, since the chunks will only
      // change when actual code changes, not the webpack runtime.
      runtimeChunk: {
         name: "runtime",
      },
   },
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
});
