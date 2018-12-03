var express = require('express');

var app = express();

const json_file = require('./sample.json');

app.get("/", function(req, res) {
    // res.send("You just sent  GE request, friend");
    res.json(json_file);
});

app.post("/", function(req, res){
    res.send("a POST request? nice");
});

app.put("/", function(req, res){
    res.send("I don't see a lot of PUT requests anymore");
});

app.delete("/", function(req, res){
    res.send("oh my, a DELETE??");
});

app.listen(8080, function(){
    console.log("App is listening on port 8080");
});;