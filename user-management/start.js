'use strict';

const express = require('express');
const app = express();
var users = [];

app.get('/', function (req, res) {
    getUsers(req, res);
});

function getUsers(req, res) {
    res.json(users);
}

app.get('/users', getUsers);

function createUser(req, res) {
    if (!req.body || !req.body.email) {
        req.status = 403;
        return res.send('FAIL');
    }

    let user = {email: req.body.email, name: req.body.name};
    users.push(user);
    res.send(user);
}

app.post('/users', createUser);

function getUsersById(req, res) {
    let id = req.params.id;
    let user = users.find((user)=>user.id === id);
    if (user) {
        res.status = 404;
        return res.send('Not found');
    }

    res.json(user);
}

app.get('/users/:id', getUsersById);

app.listen(5000, function () {
    console.log('User management listening on port 5000!');
});
