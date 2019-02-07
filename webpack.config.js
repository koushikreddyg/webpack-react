const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const reactPath = path.join(__dirname, "src", "index.js");
const rootPath = path.join(__dirname, "public");

module.exports = () => {
  const { NODE_ENV } = process.env;
  const isProd = NODE_ENV === "production";
  return {
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
      })
    ],
    devServer: {
      contentBase: rootPath,
      port: 5000
    },
    devtool: isProd ? "cheap-source-map" : "cheap-eval-source-map"
  };
};
