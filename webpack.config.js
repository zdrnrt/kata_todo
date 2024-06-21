const { watchFile } = require('fs');
const path = require('path');

const FilemanagerWebpackPlugin = require('filemanager-webpack-plugin');
const HmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'app/'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'

        }),
        new FilemanagerWebpackPlugin({
            events: {
                onStart: {
                    delete: ['app']
                }
            }
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'app')
    }
};