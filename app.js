var mongoose = require('mongoose');
var express = require("express");
var app = express();
mongoose.connect('mongodb://localhost/mammals');

app.use(express.bodyParser());
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));


var api = require("./api.js");
app.get("/mammals/:type?", api.listAllMammals);

app.post("/mammals", api.saveMammal);

app.listen(8000);