const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './app/index.js',
        vendor: './app-vendor/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/src')
    }
};