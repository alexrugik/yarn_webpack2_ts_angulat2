const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './app/index.html'}),
    new webpack.HotModuleReplacementPlugin({
        multiStep: true
    })
];
