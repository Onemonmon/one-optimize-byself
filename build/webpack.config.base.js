const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "[name][contenthash:10].js",
    path: resolve(__dirname, "../dist"),
    clean: true, // 新增配置
    // assetModuleFilename: "[hash][ext][query]", // 统一配置 asset/source 的输出文件命名
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
    extensions: [".vue", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      /** 处理vue */
      {
        test: /\.vue$/i,
        use: ["vue-loader"],
      },
      /** 处理ts */
      {
        test: /\.(t|j)s$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      /**
       * 处理样式
       * vue需要使用vue-style-loader
       */
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      /** 处理图片 */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset", // 通用资源类型，根据一定的条件在 inline 和 resource 之间切换
        // type: "asset/resource", // 发送一个单独的文件并导出 URL
        // type: "asset/inline", // 导出一个资源的 data URI (base64)
        // type: "asset/source", // 导出资源的源代码
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
      /** 处理字体 */
      {
        test: /\.(ttf|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../public/index.html"),
    }),
    new VueLoaderPlugin(),
  ],
};
