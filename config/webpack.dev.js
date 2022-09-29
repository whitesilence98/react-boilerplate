const Dotenv = require("dotenv-webpack");
const {merge} = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
   mode: "development",
   // Control how source maps are generated
   devtool: "inline-source-map",
   // Spin up a server for quick development
   devServer: {
      historyApiFallback: true,
      open: false,
      compress: true,
      hot: true,
      port: 4000,
   },

   plugins: [
      new Dotenv({
         path: "./.env.development",
      }),
      new ReactRefreshWebpackPlugin(),
   ].filter(Boolean),
});
