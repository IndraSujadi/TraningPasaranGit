const { isBundle } = require("typescript");
const path = require("path");

module.exports = {
  entry: "./src/Index.tsx",
  output: {
    path: path.resolve(__dirname + "/dist/"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
