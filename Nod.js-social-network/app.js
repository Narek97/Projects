let exp = require("express")
let app = exp()
let bodyParser = require('body-parser');
let expressValidator = require("express-validator")
let session = require("express-session")
let rout = require("./router")
let database = require('./model')
let layout = require('express-layout')
app.use(layout())

var server = require('http').Server(app);
var io = require('socket.io')(server);
let chat = require("./controller/ChatController")
// miqani socket kapelu hamar
var message = io.of("/chat")
let k = new chat(message) //pakagti mej ete grenq io bolor socketery kashxaten



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(exp.static("public"))
app.use(expressValidator())
app.use(session({ 'secret': 'parol'}));
app.use("/",rout)

app.set('view engine', 'ejs');

server.listen(3000)