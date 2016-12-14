var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var path = require('path');

module.exports = {
    entry: {
        'vendor': './vendor.ts',
        'app': './main.ts'
    },
    output: {
        path: __dirname,
        publicPath: 'http://localhost:9001/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.ts/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [path.join(__dirname, 'index.html')]
            },
            {
                test: /\.js$/,
                include: /(angular2-modal)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        stats: 'minimal',
        historyApiFallback: true
    }
};