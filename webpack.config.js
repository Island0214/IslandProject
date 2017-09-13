const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var providePlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
});

module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true//热加载
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            },
            // ,
            // {
            //     test: /\.module\.less$/,
            //     loader: ExtractTextPlugin.extract(
            //         'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
            //         'postcss!' +
            //         `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify('#d3e8e8')}}`
            //     )
            // },
        //     {
        //         test: /\.(less|css)$/,
        //         use: ExtractTextPlugin.extract({
        //             use:[
        //                 {
        //                     loader: 'css-loader',
        //                     options:{
        //                         modules:true,
        //                         importLoaders:1,
        //                         localIdentName:'[local]',
        //                     }
        //                 },
        //                 {
        //                     loader:'less-loader',
        //                 },
        //             ],
        //             fallback: 'style-loader',
        //         }),
        //     }
        //     {
        //         loader: 'less-loader',
        //         options: {
        //             sourceMap: true // Sourcemaps
        //         }
        //     },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2) (\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            // {
            //     test: require.resolve('jquery'),
            //     loader: 'expose?$!expose?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
            //     use: [{
            //         loader: 'expose-loader',
            //         options: 'jQuery'
            //     },{
            //         loader: 'expose-loader',
            //         options: '$'
            //     }
            //     ]
            // },
            // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
            //

        ],

        // loaders: [
        //     {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        //
        // ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        // new HtmlWebpackPlugin({
        //     template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        // }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
};
