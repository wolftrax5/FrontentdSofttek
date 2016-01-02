var fs = require("fs");
var host = "192.168.100.13";
var port = 8084;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("Hello!!");
});

app.listen(port, host);