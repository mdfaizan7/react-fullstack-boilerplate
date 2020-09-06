const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	devServer: {
		contentBase: './dist',
	},
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			filename: './index.html',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				mangle: true,
				compress: {
					pure_getters: true,
					unsafe: true,
					unsafe_comps: true,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
				},
				output: {
					comments: false,
				},
				exclude: [/\.min\.js$/gi],
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpeg|jpg|woff|woff2|eot|ttf|svg|ico|json)$/,
				loader: 'url-loader?limit=10000000',
			},
		],
	},
}
