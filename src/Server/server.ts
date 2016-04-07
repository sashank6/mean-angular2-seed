/// <reference path="../../typings/tsd.d.ts"/>
import express=require('express');
import path=require('path');



let port: number = process.env.PORT || 3000;
let app = express();


app.use("/node_modules",express.static(path.resolve(__dirname,'../../node_modules')));


app.get('/',function(req:express.Request,res:express.Response){


		res.send("Express and Node is Setup");
});




let server = app.listen(port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

