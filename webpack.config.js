const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin'); //基本作用就是生成html文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //将多个css合并成一个css
const OpenBrowserPlugin = require('open-browser-webpack-plugin') //自动打开浏览器

module.exports = {　　　　
	entry: { //多入口文件配置
		　　　　
		indexjs: __dirname + "/js/index.js",
		reversejs: __dirname + "/js/reverse.js",
		　　
	},
	　　output: {　　　　
		path: path.resolve(__dirname, './dist/static/'),
		publicPath: './static/',
		filename: 'js/[name].js'　　
	},

	　　module: {　　　　
		rules: [{　　　　　　　　
				test: /\.js$/,
				　　　　　　　　exclude: /(node_modules|bower_components)/,
				　　　　　　　　use: {　　　　　　　　　　
					loader: 'babel-loader',
					　　　　　　　　　　options: {　　　　　　　　　　　　
						presets: ['babel-preset-es2015'],

						　　　　　　　　　　
					}　　　　　　　　
				}　　　　
			}, {
				test: /\.css$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../",
						}
					},
					"css-loader"
				]
			}, {

				test: /\.(jpg|png|gif)$/,

				use: [{
					loader: "url-loader",
					options: {
						limit: 2050,
						publicPath:"",
						outputPath: "img"
					}
				}]

			},
			{　　　　　
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						
					}
				}]　　　
			}
		]　　
	},
	　　devServer: {　　　　
			inline: true,
		　　port: 804　　
		},
		optimization: {
		    splitChunks: {
		      chunks: 'all', 
		      minSize: 30000,
		      maxSize: 0,
		      minChunks: 1,
		      maxAsyncRequests: 5,
		      maxInitialRequests: 3,
		      automaticNameDelimiter: '~',
		       name:'pulicone',
		      cacheGroups: {
		        vendors: {
		          test: /[\\/]node_modules[\\/]/,
		          priority: -10,
		         
		        },
		        default: {
		          minChunks: 2,
		          priority: -20,
		          reuseExistingChunk: true
		        }
		      }
		    }
		},

	　　plugins: [
		new OpenBrowserPlugin({
			url: 'http://localhost:804'
		}),　　　　
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: "../index.html",
			inject: {
				body: ['indexjs']
			},
			minify: {
				caseSensitive: false,
				removeComments: true,
				removeEmptyAttributes: true,
				collapseWhitespace: true
			},
			chunks: ['indexjs','pulicone']
		}),
		new HtmlWebpackPlugin({
			template: './reverse.html',
			filename: "../reverse.html",
			inject: {
				body: ['reversejs']
			},
			minify: {
				caseSensitive: false,
				removeComments: true,
				removeEmptyAttributes: true,
				collapseWhitespace: true
			},
			chunks: ['reversejs','pulicone']
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",

		}),
		 new BundleAnalyzerPlugin()　　　　
	]
}