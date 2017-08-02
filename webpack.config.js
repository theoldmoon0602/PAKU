
module.exports = {
    context: __dirname + '/src',
    entry: {
	index: './index.js',
    },
    output: {
        path: __dirname + '/www',
	filename: '[name].bundle.js',
	publicPath: 'www',
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
		    'babel-loader',
		]
	    },
	    {
		test: /\.css/,
		exclude: /node_modules/,
		use: [
		    { loader: 'style-loader' },
		    { loader: 'css-loader' }
		]
	    }
	]
    },
    resolve: {
	modules: [
	    __dirname + '/node_modules',
	]
    },
    devServer: {
	contentBase: 'www',
	port: '8080',
    }
}

