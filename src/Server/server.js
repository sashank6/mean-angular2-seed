/// <reference path="../../typings/tsd.d.ts"/>
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.use("/node_modules", express.static(path.resolve(__dirname, '../../node_modules')));
app.get('/', function (req, res) {
    res.send("Express and Node is Setup");
});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
