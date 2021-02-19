"use strict";
var isBundle = require("typescript").isBundle;
var path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    }
};
//# sourceMappingURL=webpack.config.js.map