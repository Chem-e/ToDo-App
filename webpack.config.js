const ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './js/script.js',
    output: {
        filename: './dist/bundle.js'
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                "test": /\.html$/,
                use: {
                    "loader": "raw-loader"
                }
            },
            {
                "test": /\.(eot|svg)$/,
                "loader": "file-loader?name=[name].[hash:20].[ext]"
            },
            {
                "test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                "loader": "url-loader"
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("./css/styles.css"),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}