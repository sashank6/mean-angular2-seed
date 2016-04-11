/// <reference path="../../typings/tsd.d.ts"/>
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.set('views', './src/Client/Views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use("/node_modules", express.static(path.resolve(__dirname, '../../node_modules')));
app.use("/app", express.static(path.resolve(__dirname, '../Client/app')));
app.use("/*.html", function (req, res) {
    res.render(req.params[0] + ".html");
});
app.get('/', function (req, res) {
    res.render('index.html');
});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
