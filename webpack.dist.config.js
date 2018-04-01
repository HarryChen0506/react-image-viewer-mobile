//webpack dev环境配置

const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    //入口
    entry:{
        app: [ 
            path.join(__dirname,'src/index.js')
        ],
        vendor: [
            'react', 
            'react-router-dom', 
            'redux', 
            'react-dom', 
            'react-redux',
            'redux-thunk'
        ]
    }, 
    output: {
        path: path.join(__dirname, './dist'),
        // 输出到dist文件夹
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        // publicPath : '/'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],  //cacheDirectory缓存编译结果加速
                include: path.join(__dirname, './src')
            },{
                test: /\.css$/,
                // loader: 'style-loader!css-loader!postcss-loader',
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },{
                test: /\.scss$/,
                // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader","sass-loader"]
                })
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),        
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.tpl.html')
        }),
         new CleanWebpackPlugin(['dist/*.*'],{
            root: path.join(__dirname,"./"),
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({   //引用资源单独打包
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new UglifyJSPlugin()
        
       
    ]
}
