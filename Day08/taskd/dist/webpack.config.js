"use strict";
var isBundle = require("typescript").isBundle;
var path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};
//# sourceMappingURL=webpack.config.js.map