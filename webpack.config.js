const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.jsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[hash].js',
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
			react: path.join(__dirname, 'node_modules', 'react')
		},
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				use: "url-loader?limit=100000"
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico'
		}),
	],
	optimization: {
		runtimeChunk: true
	},
	devServer: {
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},
};
