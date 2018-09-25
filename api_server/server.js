var express = require('express')
var app = express()

var portNo = 8080
var location = "localhost"

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(portNo, location, console.log(portNo + " " + location))
