const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env) => {
  return {
    entry: "./src/index.js",
    mode: env.prod ? "production" : "development",
    devtool: "eval-cheap-module-source-map",
    // 提取公用的包
    optimization: {
      // webpack runtime bundle
      // runtimeChunk: "single",
      // 保持本位变化，其他hash不变化
      moduleIds: "deterministic",
      // 抽取公用包
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      pathinfo: false,
      clean: true,
      library: {
        name: "demo2",
        type: "umd",
      },
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
  };
};
