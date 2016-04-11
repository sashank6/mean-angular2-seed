/// <reference path="../../typings/tsd.d.ts"/>
import express=require('express');
import path=require('path');



let port: number = process.env.PORT || 3000;
let app = express();



app.set('views','./src/Client/Views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);


app.use("/node_modules",express.static(path.resolve(__dirname,'../../node_modules')));
app.use("/app",express.static(path.resolve(__dirname,'../Client/app')));

app.use("/*.html",function(req,res){
    res.render(req.params[0]+".html");
});

app.get('/',function(req:express.Request,res:express.Response){


		res.render('index.html');
});




let server = app.listen(port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

