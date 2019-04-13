const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');



//function to receive the express app and extend the express server with the  hot-middleware and  dev- middle
module.exports = function setupDevServer(app){
  //server connnection to receive notification when the bundler rebuilds
  //
  clientConfig.entry.app=[
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ];
  //middleware plugins
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  const clientCompiler = webpack(clientConfig);
  app.use(require('webpack-dev-middleware')(clientCompiler, {
      stats:{
        colors:true
      }
    })
    );
  app.use(require('webpack-hot-middleware')(clientCompiler));
  };
