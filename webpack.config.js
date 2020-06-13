const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css抽取
const HtmlWebpackPlugin = require("html-webpack-plugin"); //提取跟注入
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //壓縮css
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清除檔案資料
module.exports = {
  resolve: {
    alias: {
      "@css": path.resolve(__dirname, "./src/css/"),
      "@js": path.resolve(__dirname, "./src/js/"),
      "@vue": path.resolve(__dirname, "./src/vue/"),
      "@src": path.resolve(__dirname, "./src/"),
      vue: "vue/dist/vue.esm.js",
    },
    //擴展路徑別名
  },
  //context: path.resolve(__dirname, "./src"),
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    //filename: "index.bundle.js",
    //publicPath: "/dist/",
    filename: "js/[name].[hash].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 9000,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      //vue元件載入器
      /*{
        test: /\.scss$/,
        loader: "style!css!sass?sourceMap",
      },*/
      //scss模板載入器
      {
        test: /\.pug$/,
        loader: "pug-plain-loader",
      },
      /*{
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"],
          },
          {
            use: ["raw-loader", "pug-plain-loader"],
          },
        ],
      },*/
      //pug模板載入器
      /*{
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },*/
      //vue樣式載入器 css載入器
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      //css提取
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //js轉舊
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      //圖檔載入器
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./fonts/",
              publicPath: "../fonts/",
            },
          },
        ],
      },
      //字型載入器
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    //切割檔案
  },
  plugins: [
    new CleanWebpackPlugin({
      //cleanOnceBeforeBuildPatterns: ["./js/*", "./css/*", "./fonts/*", "./index,html"],
      cleanOnceBeforeBuildPatterns: ["./*"],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
};
