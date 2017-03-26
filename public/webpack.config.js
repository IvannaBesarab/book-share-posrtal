var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
  devtool: "cheap-module-eval-source-map",
//  context: __dirname + '/app',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/scripts/main.jsx'
  ],
  output: {
    path: __dirname + '/app/assets/',
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
          filename: 'styles.css',
          allChunks: true
        })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/                      
      },
      {
        test: /\.scss$/,
		use: ExtractTextPlugin.extract({fallback: 'style-loader', use:['css-loader', 'sass-loader']})
        
      },
      {
        test: /\.css$/,
		use: [ 'css-loader']
      }
      
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
