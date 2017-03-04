var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


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
}).listen(5050, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:5050`);
});
