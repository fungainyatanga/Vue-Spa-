const express = require("express")
const app = express()
const fileSystem  = require('fs')
const path = require('path')

const indexHTML = (() => {
  return fileSystem.readFileSync(path.resolve(__dirname, "./public/index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));
//event handler using *

require("./build/dev-server")(app)

app.get('*', (request, response) => {
  response.write(indexHTML)
  response.end()
});

//port defination

const port  = process.env.PORT || 3000
app.listen(port,() => {
  console.log(`server started at http://localhost:${port}`)})