const Html_webpack_plugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:[
                    {loader:'vue-loader'}
                ]
            },
            {
                test:/\.(ttf|png)$/,
                use:[
                    {loader:'file-loader'}
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {loader:'vue-style-loader'},
                    {loader:'css-loader'}
                ]
            }
        ]
    },
    resolve: {
      alias: {
        '': ''
      },
      extensions: ['.js', '.vue', '.json']
    },
    plugins:[
        new Html_webpack_plugin({
            template:'./template.html',
            filename:'index.html'
        })
    ]
}



// //根据参照文件生成index.html
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry:'./src/main.js',//入口
//     module:{
//         rules:[
//             {
//                 test: /\.vue$/,
//                 use: [
//                     { loader: "vue-loader" }
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     { loader: "vue-style-loader" },
//                     { loader: "css-loader" }
//                 ]
//             }
//         ]
//     },
//     plugins:[
//         new HtmlWebpackPlugin({
//             template:'./template.html',//参照文件
//             filename:'index.html' //生成的index.html
//         })
//     ]
// }