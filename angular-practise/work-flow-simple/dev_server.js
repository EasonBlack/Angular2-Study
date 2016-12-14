var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        // chunks: false,
        chunkModules: false
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}).listen(9001,function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:9001/');
});