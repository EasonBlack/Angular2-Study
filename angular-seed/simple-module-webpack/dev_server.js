var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        colors: true,
        // chunks: false,
        chunkModules: false
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}).listen(8080, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:8080/');
});