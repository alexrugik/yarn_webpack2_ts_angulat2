const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './app/index.js',
        vendor: './app-vendor/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/src'),
        publicPath: '/dist/'
    },
    module: {
        rules: []
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.css'],
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    devtool: 'source-map',
    context: __dirname,
    stats: "errors-only",
    devServer: {
        port: 7777,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        inline: true,
        stats: 'errors-only',
    },
    plugins: [],
    profile: true, // boolean
    // capture timing information
    bail: true, //boolean
    // fail out on the first error instead of tolerating it.
    cache: false,
    // disable/enable caching
    watchOptions: {
        aggregateTimeout: 1000, // in ms
        // aggregates multiple changes to a single rebuild

        poll: true,
        poll: 500, // intervall in ms
        // enables polling mode for watching
        // must be used on filesystems that doesn't notify on change
        // i. e. nfs shares
    },
};