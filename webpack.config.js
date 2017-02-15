const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject:'body'
});

module.exports = {

    devtool: 'source-map',

    entry: __dirname +  '/app/app.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },

    plugins:[
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],

    devServer: {
        inline:true,
        port: 9002
    }

};