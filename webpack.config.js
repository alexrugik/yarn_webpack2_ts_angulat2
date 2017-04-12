const path = require('path');

const WEBPACK_DEV_SERVER_CONFIG = require('./webpack-config/webpack-dev-server.config');
const WEBPACK_MODULE_CONFIG = require('./webpack-config/webpack-module.config');
const WEBPACK_PLUGINS_CONFIG = require('./webpack-config/webpack-plugins.config');

const config = {
    entry: {
        app: './app/index.ts',
        vendor: './app-vendor/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:  '/dist'
    },
    module: WEBPACK_MODULE_CONFIG,
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
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
    stats: "errors-only",
    devServer: WEBPACK_DEV_SERVER_CONFIG,
    plugins: WEBPACK_PLUGINS_CONFIG,
    profile: true, // boolean
    // capture timing information
    bail: true, //boolean
    // fail out on the first error instead of tolerating it.
    cache: false,
    // disable/enable caching
    watchOptions: {
        aggregateTimeout: 1000, // in ms
        // aggregates multiple changes to a single rebuild
        poll: 500, // intervall in ms
        // enables polling mode for watching
        // must be used on filesystems that doesn't notify on change
        // i. e. nfs shares
    },
};

module.exports = config;