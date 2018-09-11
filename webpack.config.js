const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const plugins = [new MiniCssExtractPlugin({filename : 'css/[name].css'})]

module.exports = {
    mode : 'development',
    entry : {
        cotizacion : path.resolve(__dirname, 'interface/src/cotizacion/index.js'),
        usuario : path.resolve(__dirname, 'interface/src/usuarios/index.js')
    },
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'js/[name].js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test : /\.js$/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env', '@babel/preset-react'],
                        plugins : ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins
}