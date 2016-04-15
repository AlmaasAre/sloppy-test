'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('alllright!');
});

app.listen(5000, function () {
    console.log('Photo listening on port 5000!');
});
