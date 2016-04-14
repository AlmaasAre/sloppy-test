var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>HELLOOOO EARTH!</h1>');
});

app.listen(5000, function () {
    console.log('WEB listening on port 5000!');
});
