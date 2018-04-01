//webpack dev环境配置

const path = require('path');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //入口
    entry:{
        app: [ 
            path.join(__dirname,'src/lib/index.js')
        ]
    }, 
    output: {
        path: path.join(__dirname, './dist'),
        // 输出到dist文件夹
        filename: 'react-image-viewer-mobile.js',
        // publicPath : '/'
        library: 'react-image-viewer-mobile',
        libraryTarget: 'umd',
        libraryExport: 'default'
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
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-dom': {
                root: 'ReactDom',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['dist/*.*'],{
            root: path.join(__dirname,"./"),
            verbose: true,
            dry: false
        }),        
        // new UglifyJSPlugin()       
       
    ]
}
