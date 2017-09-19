import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '',
    // publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // remember about reversed positioning for loaders!!!
          { loader: "style-loader" }, // Adds CSS to the DOM by injecting a <style> tag
          { loader: "css-loader" },
          { loader: "postcss-loader" }, // responsible for autoprefixer plugin
          { loader: "sass-loader" }
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: "url-loader"
      //     },
      //     {
      //       loader: "img-loader"
      //     }
      //   ]
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
};
