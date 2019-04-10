//server setup

const express = require("express");
const app = express();
const fileSystem = require("fs");
const path = require("path");

//file system node module to serve page inclue path module to make path more strict
//adding the path help __dirname helps with serving the app from anywhere within the command line
const indexHTML = (() =>{
  return fileSystem.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8")})();
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