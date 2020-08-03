var http = require('http');

var fs = require('fs');

var url = require('url');

http.createServer(function (req, res) {
    var parse = url.parse(req.url,true);

    var path = parse.path;

    if (path == "/"){
        fs.readFile("./files/home.html","utf-8",function(err,data){
            res.writeHead(200,{"Content-Type":"text/html"});

            res.end(data);
        })
    }
    else{
        fs.readFile("./files/contact.html","utf8",function(err,data){
            res.writeHead(200,{"Content-Type":"text/html"});

            res.end(data);
        })
    }
}).listen(8000);