const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data.js")

server.set("view engine", "html")

nunjucks.configure("views", {
  express:server
})

server.use(express.static('public'))



server.get('/', function(req, res) {
  return res.render("index")
})

server.get('/about', function(req, res) {
  return res.render("about")
})

server.get('/recipes', function(req, res) {
  return res.render("recipes")
})


server.listen(3000, function(){
  console.log('server is running')
})
