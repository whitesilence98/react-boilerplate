// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract css to files

const paths = require("./paths");

module.exports = {
   // Where webpack looks to start building the bundle
   entry: [paths.src + "/index.tsx"],

   // Where webpack outputs the assets and bundles
   output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
   },

   // Customize the webpack build process
   plugins: [
      // Removes/cleans build folders and unused assets when rebuilding (remove in webpack 5 using clean: true instead)
      // new CleanWebpackPlugin(),
      // Copies files from target to destination folder
      new BundleAnalyzerPlugin(),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: paths.src + "/assets",
               to: "assets",
               globOptions: {
                  ignore: ["*.DS_Store"],
               },
            },
         ],
      }),

      // Generates an HTML file from a template
      // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
      new HtmlWebpackPlugin({
         favicon: paths.src + "/assets/icons/favicon.png",
         template: paths.public + "/index.html", // template file
         filename: "index.html", // output file
         manifest: paths.public + "/manifest.json",
      }),
   ],

   resolve: {
      alias: paths.alias,
      extensions: ["*", ".js", ".ts", ".tsx"],
   },

   // Determine how modules within the project are treated
   module: {
      rules: [
         //Use Babel to transpile JS/TS files
         {
            test: /\.tsx?$/,
            use: ["ts-loader"],
            exclude: /node_modules/,
         },
         // Styles: Inject CSS into the head with source maps
         {
            test: /\.(scss|css)$/,
            use: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {sourceMap: true, importLoaders: 1},
               },
               {loader: "sass-loader", options: {sourceMap: true}},
            ],
         },

         {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
         },

         // Images: Copy image files to build folder
         {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource"},

         // Fonts and SVGs: Inline files
         {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: "asset/inline"},
      ],
   },
};
