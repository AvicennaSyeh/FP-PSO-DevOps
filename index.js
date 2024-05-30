var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Bismillah PSO A!");
});

app.listen(3000);