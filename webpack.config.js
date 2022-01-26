
const path = require('path')
//注意output不能使用相对路径
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/, //匹配所有的less文件
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          }, //loader使用不需要require
        ],
      },
    ],
  },
}

// module.exports= {
//     entry: './src/js/index.js',
//     output: {
//         path: resolve(__dirname, 'dist'),
//         filename: 'index.js'
//     },
//     mode: 'development'
//     所有的loader都要在module下的rules属性中
//     rules 中的每一个对象就是一个loader
//     module: {
//         rules: [
//             {
//                 test：/\.less$/  //匹配所欲的less文件
//                 use: [
//                			 {loader:'less-loader' }   //loader的使用不需要require
//                 	]
//             }，
//     		 {
//         		test: /\.js$/,
//        			 exclude: /node_modules/,
//         		loader: "eslint-loader",
//         		options: {
         
//         		}
//      		 }
//         ]
//     }
// }