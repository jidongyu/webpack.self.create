const path = require('path');
const srcRoot = './src';
const devPath = './dev';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 输入配置
    entry: [
        path.resolve(srcRoot,'./page/index/index.js')
    ],
    // 输出配置
    output:{
        path: path.resolve(__dirname,'./dev'),
        filename: "bundle.min.js"
    },
    devServer: {
        "contentBase": devPath,
        "compress": true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: path.resolve(srcRoot)
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','scss-loader'],
                include: path.resolve(srcRoot)
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'],
                include: path.resolve(srcRoot)
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'],
                include: path.resolve(srcRoot)
            },
            {   test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]',
                include: path.resolve(srcRoot)
            },
            {   test: /\.(js|jsx)$/,
                use: [{loader:'babel-loader'}],
                include: path.resolve(srcRoot)
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(devPath),
            template: path.resolve(srcRoot,'./page/index/index.js')
        })
    ]
}