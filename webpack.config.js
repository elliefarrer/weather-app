const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpack = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body',
});

const HotModuleReplacement = new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('public'),
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loader: ['style-loader', 'scss-loader'] },
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    plugins: [HotModuleReplacement, HtmlWebpack],
};
