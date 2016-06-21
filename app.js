var express = require('express');
var app = express();
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
}

//Create a static file server
app.use(express.static(__dirname));
app.use(allowCrossDomain);
app.use(express.bodyParser());

require('./server/stage1')(app)

var port = process.env.PORT || 8000
app.listen(port);
console.log('Express server started on port %s', port);
