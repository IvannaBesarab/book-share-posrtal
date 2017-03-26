var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,

  proxy: {
    '/api': {
      target: 'http://localhost:1337',
      pathRewrite: {'^/api' : ''}
    }
  }
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port + '/app');
});
