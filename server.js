var path = require("path");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = {
	entry: {
	    app: ["./public/js/main.js"]
	  },
	 output: {
	    path: path.resolve(__dirname),
	    // publicPath:'public',
	    filename: "index.js"
	  },
	devServer:{
		inline: true,
		port: 5050
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
					presets: ['es2015', 'react'],
					plugins: ['react-html-attrs', 'transform-class-properties'],
				}
			}
		]
	}
}


new WebpackDevServer(webpack(config), {
  // publicPath: config.output.publicPath,
  // hot: true,
  historyApiFallback: true,

  proxy: {
    '/api': {
      target: 'http://localhost:5050',
      pathRewrite: {'^/api' : ''}
    }
  }
}).listen(5050, localhost, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:5050`);
});



