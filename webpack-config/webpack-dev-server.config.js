const path = require('path');

module.exports = {
    port: 7777,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    https: false,
    noInfo: true,
    stats: 'errors-only',
};