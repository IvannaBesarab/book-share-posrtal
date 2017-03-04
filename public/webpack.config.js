var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    `webpack-dev-server/client?http://localhost:5050`,
    'webpack/hot/only-dev-server',
    './js/main.js'
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    // hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
        {test: /\.js$/,
        exclude: /node_modules/,
        
        loader: ['react-hot-loader', 'babel-loader'],
        // query:{
        //   presets: ['es2015', 'react'],
        //   plugins: ['react-html-attrs', 'transform-class-properties'],
        // }
                 
      }
      // { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
