'use strict';
const express = require('express');
const router = express.Router();

var users = [];

router.get('/', (req, res) => {
  getUsers(req, res);
});

function getUsers(req, res) {
  res.json(users);
}

router.get('/users', getUsers);

function createUser(req, res) {
  if (!req.body || !req.body.email) {
    req.status = 403;
    return res.send('FAIL');
  }

  let user = {email: req.body.email, name: req.body.name};
  users.push(user);
  res.send(user);
}

router.post('/users', createUser);

function getUsersById(req, res) {
  let id = req.params.id;
  let user = users.find((user)=>user.id === id);
  if (user) {
    res.status = 404;
    return res.send('Not found');
  }

  res.json(user);
}

router.get('/users/:id', getUsersById);

module.exports = router;
