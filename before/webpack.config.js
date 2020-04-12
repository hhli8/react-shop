var webpack = require('webpack');
module.exports = {
	entry: __dirname+'/src/js/a.js',             
	output: {
	    path: __dirname+'/dist/js',  
	    filename: '[name].js'  
	},
	module:{
		loaders: [
            {
                test: /\.js$/, 
                loader: "babel-loader",
                query: {presets: ['es2015','react']}
            }
        ]
	},
	watch:true
}