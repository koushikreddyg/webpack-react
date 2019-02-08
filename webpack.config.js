const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotEnv = require("dotenv");

const reactPath = path.join(__dirname, "src", "index.js");
const rootPath = path.join(__dirname, "public");

module.exports = () => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === "development") {
    dotEnv.config({ path: ".env.dev" });
  } else if (NODE_ENV === "production") {
    dotEnv.config({ path: ".env.prod" });
  } 
  const isProd = NODE_ENV === "production";

  return {
    mode: isProd ? "production" : "development",
    entry: reactPath,
    output: {
      filename: path.join("js", "index.js"),
      path: rootPath
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },

        {
          test: /\.(s*)css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                limit: 50,
                outputPath: "images"
              }
            },
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/index.css",
        chunkFilename: "[id].css"
      }),
      new webpack.DefinePlugin({
        "process.env.NAME": JSON.stringify(process.env.NAME)
      })
    ],
    devServer: {
      contentBase: rootPath,
      port: 5000,
      open: "Chrome"
    },
    devtool: isProd ? "cheap-source-map" : "cheap-eval-source-map"
  };
};
