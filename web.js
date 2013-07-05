var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(100);

var fs = require("fs");
fdr = fs.openSync("index.html", 'r')
fs.readSync(fdr, buffer);
fs.closeSync(fdr);

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
