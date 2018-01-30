let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let OptimizeJsPlugin = require('optimize-js-plugin');
const path = require('path');

let env = process.env.NODE_ENV || 'development';
console.log(`NODE_ENV: ${env}`);

plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
    })
]

if(env === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    )
}

module.exports = {
    entry: [
        './src/index.js',
        'react-hot-loader/patch'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins
}