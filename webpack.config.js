const path = require('path');

module.exports = {
	entry: {
	    app: './src/app.js'
    },
    devtool: 'inline-source-map',
	devServer: {
	    contentBase: './dist'
    },
	output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader'
		}]
	}
};