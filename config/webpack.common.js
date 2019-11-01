'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/Index.tsx',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['!image*'],
        }),
        new HtmlWebpackPlugin({
            template: 'index.template.ejs'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                  path.resolve(__dirname, "src")
                ],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    output: {
        path: path.resolve('public'),
    }
};
