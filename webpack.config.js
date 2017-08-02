
module.exports = {
    context: __dirname + '/src',
    entry: ['./index.js'],
    output: {
        path: __dirname + '/www',
	filename: "bundle.js",
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
	    }
	]
    },
    resolve: {
	modules: [
	    __dirname + 'node_modules',
	]
    },
    devServer: {
	contentBase: 'www',
	port: '8080',
    }
}

