const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const { authenticate } = require('../auth/authenticate');

const Users = require('../users/users-model.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Users.add(user)
    .then(saved => {
      console.log(saved)
      res.status(201).json({saved})
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function login(req, res) {
  let { username, password } = req.body;
  Users.findBy({ username })
       .first()
       .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({
              message: `Welcome ${user.username}!`
            });
          } else {
            res.status(401).json({ message: 'You can not enter' });
          }
        })
        .catch(error => {
          res.status(500).json(error);
        });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
