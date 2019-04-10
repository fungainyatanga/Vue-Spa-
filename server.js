//server setup

const express = require("express");
const app = express();
const fileSystem = require("fs");
const path = require("path");

//file system node module to serve page inclue path module to make path more strict
//adding the path help __dirname helps with serving the app from anywhere within the command line
const indexHTML = (() =>{
  return fileSystem.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8")})();

  //express static module to return all the static modules from the dist folder
  app.use("/dist", express.static(path.resolve(__dirname, "./dist")));
  //extends two new dev methods  added in the  dev-server
  require("./build/dev-server")(app);
//get handler
app.get('*', (require, response) =>{
  response.write(indexHTML);
  response.end();
})

//port setup
const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`server started at http://localhost:${port}`);
});