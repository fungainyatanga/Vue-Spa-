
npm install -g vue-cli
./vue init webpack NameofProject

//using boostrap
install npm i vue bootstrap-vue bootstrap

=vue-cli-service = it automatically resolves and loads all CLI Plugins listed in your project's package.json

https://editorconfig.org/ helps with maintaining consistent coding stykle

//package management creates the package.jason file
npm init -y default settings in package.json

install vue
npm install vue@2.6.10 --save   //creates node_modules

//everytime  u download the vue app run npm install which will download all the dependencies into the node_modules folder

//to run app need server
npm install express@4.16.4 --save
const variables are pemanent

//run server
node server

//add scripts in the package.json to run app with short cuts as show below
{
  "name": "vue-spa",
  "version": "1.0.0",
  "description": "",
   "scripts": {
     "start": "node server", //shortcut to run  "npm start"
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",

  "dependencies": {

    "vue": "^2.6.10"
  },
  "devDependencies": {

  }
}

//webpack - is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, even images if the corresponding plugins are included
//create folder build and js file webpack.base.config.js
npm install webpack@4.29.0 --save-dev
//webpack will go into the package.json devDependencies becuse it is onbly needed in development
settings for webpack are included in the webpack.base.config.js file

//after adding webpack run webpack
npm install --save-dev webpack webpack-cli
installs the dist file that is our code package
 **node ./node_modules/webpack/bin/webpack --config ./build/webpack.base.config.js    //run to bundle js file


//Dev-middleware  -install the two modules in order to create dist file in memory
//everytime there is a change it will rebuild the module that was updated
//webpack hot middle  reloads updated data in browser see dev-server.js setup
delete the files dist to make sure we loading files from memory
npm install webpack-dev-middleware@3.6.2 webpack-hot-middleware@2.24.3 --save-dev

//linting
//---prevent common jsscript mistakes
//--enforce same style
//use  ESLint modules
npm install eslint@5.16.0 eslint-loader@2.1.2 eslint-plugin-html@5.0.3 eslint-config-standard@12.0.0 eslint-plugin-promise@4.1.1 eslint-plugin-import@2.16.0 eslint-plugin-node@8.0.1 --save-dev

//vue components
 <template>
 <div>{{hello}}</div>     <---------------Component's HTML
 </template/>

 <script>

	export default{
		data (){
			return {
			hello: 'hi there'  <---------------Component's Javascript


			}
		}
	}
</script>

<style scoped/>
	div{
		font-weight: bold;           <----------Component's CSS
			}
</style>

///install vue loader package
////vue loader module required  for webpack to read .vue files
npm install vue-loader@15.7.0 vue-template-compiler@2.6.10 --save-dev

//include babel to handle ES6 transpiling
//install the babel loader with all the  dependencies
npm install babel-core@6.26.3 babel-eslint@10.0.1 babel-loader@8.0.5 babel-preset-es2015-node5@1.2.0 babel-preset-env@1.7.0 babel-preset-stage-2@6.24.1 --save-dev

