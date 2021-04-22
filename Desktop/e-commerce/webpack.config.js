var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var miniCssExtractPlugin = require("mini-css-extract-plugin");
var optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '',
    filename: "main.js",
  },

  mode: "development",

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 15710,
    writeToDisk: true,
    open: true,
  },
 
  module: {
    rules: [
   
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      /*  {
        test: /\.css$/,
        use: ["style-loader", miniCssExtractPlugin.loader, "css-loader"],
      }, */

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath:'../'
            }
          },
          "css-loader",
          'sass-loader',
        ],
       
      },
  
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          }
        ]
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              // optimize : true
            },
          },
        ],
      },
    ],
  },

  plugins: [
   
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new htmlWebpackPlugin({
      filename: "product.html",
      template: "src/product.html",
    }),
    new htmlWebpackPlugin({
      filename: "checkout.html",
      template: "src/checkout.html",
    }),
    new htmlWebpackPlugin({
      filename: "payment.html",
      template: "src/payment.html",
    }),
    new htmlWebpackPlugin({
      filename: "search.html",
      template: "src/search.html",
    }),
    new htmlWebpackPlugin({
      filename: "contact.html",
      template: "src/contact.html",
    }),
    
    new miniCssExtractPlugin({
      filename: "css/style.css",
    }),

    new optimizeCssAssetsPlugin({}),
  ],
};