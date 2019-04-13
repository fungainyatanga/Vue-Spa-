//includes config of the webpack base config

//extends webpackbase config
const base = require('./webpack.base.config');

const config = Object.assign({}, base, {
  plugins: base.plugins || []
});

//export the extended config
module.exports = config;