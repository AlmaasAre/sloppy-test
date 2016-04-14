var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Here\'s an embed for ya!');
});

app.listen(5000, function () {
    console.log('Photo listening on port 5000!');
});
