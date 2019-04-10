const path = require("path");

//setting needed for webpack
const config = {
  //entry point of app
  entry:{
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  //added because using none .vue files
  resolve:{
    alias:{
    vue: 'vue/dist/vue.js'
    }
  },
  //output path of the generate polyfil files by webpack
  output:{
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

//all the files are required for dev

module.exports = config;

