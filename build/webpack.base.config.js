const path = require('path')

//setting needed for webpack
const config ={
  //entry point of app
  entry:{
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules:[
      {
        //check source files before modified by other loaders
        enforce:'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },


  //vue loader module required  for webpack to read .vue files
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  }
]
  },
  //resolve becuase not using .vue format
  //resolve:{
    //alias:{
      //vue: 'vue/dist/vue.js'
    //}
  //},
  //output path of the generate polyfil files by webpack
  output:{
    path:path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}

//all the files are required for dev

module.exports = config

