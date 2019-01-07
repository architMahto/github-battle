var path = require('path');
var webpack = require('webpack');
var dotenv = require('dotenv');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce(function (prev, next) {
	var processEnvNext = 'process.env.' + next;

	prev[processEnvNext] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.DefinePlugin(envKeys)
	],
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
