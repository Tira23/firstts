const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'ts-loader'] }],
    },
};
