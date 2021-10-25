const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "index.js",
    path: isDev
      ? path.resolve(__dirname, "./dist")
      : path.resolve(__dirname, "./server/public/dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: { loader: "file-loader" },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./client/public/index.html",
    }),
  ],
};
