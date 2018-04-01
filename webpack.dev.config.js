//webpack dev环境配置

const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry:{
        app: [ 'react-hot-loader/patch',
            path.join(__dirname,'src/index.js')
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    }, 
    output: {
        path: path.join(__dirname, './demo'),
        // 输出到dist文件夹
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    devServer:{   //webpack-dev-server配置
        contentBase: path.join(__dirname, './dist'), //服务器URL的根目录
        port: '8099',
        host: '0.0.0.0',  //支持ip来访问页面，否则只能通过localhost:8088来访问
        historyApiFallback: true,  //所有404页面能跳转到index.html       
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],  //cacheDirectory缓存编译结果加速
                include: path.join(__dirname, './src')
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },{
                test: /\.(jpg|gif|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.tpl.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({   //引用资源单独打包
            name: 'vendor'
        })
    ]
}
