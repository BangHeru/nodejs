var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("The date and time are currently : " + dt.myDateTime());
    res.end();
    // res.end('Hello World');
}).listen(8080);