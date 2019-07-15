const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// "heroku-prebuild": "npm install --dev",
//     "heroku-postbuild": "npm run build:prod"

// this config can be in webpack.config.js or other file with constants
var API_URL = {
    production: JSON.stringify('http://172.31.0.254:3000'),
    development: JSON.stringify('http://localhost:3000')
}

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'API_URL': API_URL[environment]
        })
    ],
    output: {
        path: path.resolve('./public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};