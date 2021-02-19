const { isBundle } = require("typescript");
const path = require('path');


module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname+'/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules:[
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts'],
    }

}