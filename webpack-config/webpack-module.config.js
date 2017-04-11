module.exports = {
    rules: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
};