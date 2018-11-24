const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin'); //基本作用就是生成html文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //将多个css合并成一个css
const OpenBrowserPlugin = require('open-browser-webpack-plugin')   //自动打开浏览器

module.exports = {　　

　

　　　entry:{     //多入口文件配置
　　　　indexjs:__dirname + "/js/index.js",
		
		
　　},
　　output: {
　　　　path: __dirname + "/public/js",
　　　　filename: "[name].js"
　　},
	optimization: {
	    splitChunks: {
	      cacheGroups: {
	        styles: {
	          name: 'styles',
	          test: /\.css$/,
	          chunks: 'all',
	          enforce: true
	        }
	      }
	    }
	  },
　　module: {
　　　　rules: [{
	　　　　　　　　test: /\.js$/,
	　　　　　　　　exclude: /(node_modules|bower_components)/,
	　　　　　　　　use: {
	　　　　　　　　　　loader: 'babel-loader',
	　　　　　　　　　　options: {
	　　　　　　　　　　　　presets: ['babel-preset-es2015']
	　　　　　　　　　　}
	　　　　　　　　}
	　　　　		},{
	　　　　　　　　test: /\.css$/,　
	　　　　　　　　use: [
	            		MiniCssExtractPlugin.loader,
				        {
				        	loader:"css-loader",
				        	options:{
				        		minimize:true,
				        		publicPath: './css'
				        	}
				        }
					]
　　　　			}]
　　},
　　devServer: {
　　　　inline:true,
　　　　port: 804
　　},
　　plugins:[

　　　　new OpenBrowserPlugin({url:'http://localhost:804'}),
　　　　new HtmlWebpackPlugin({
			template:'./index.html',
			filename:'index.html',
			inject: {
    			body: ['indexjs']
  			},
			minify:{
				caseSensitive:false,
				removeComments:true,
				removeEmptyAttributes:true,
				collapseWhitespace:true
			},
			chunks:['indexjs']
		}),
		new MiniCssExtractPlugin({
      		filename: __dirname +"/css/1.css",
    	})
　　　	
　　]
}