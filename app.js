const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const portNumber = process.env.portNumber || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const users = [];

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
  });
});

app.get('/users', (req, res) => {
  res.render('users', {
    title: 'Users',
    users: users,
  });
});

app.post('/add-user', (req, res) => {
  const user = req.body && req.body.user;
  users.push(user);
  res.redirect('/users');
});

app.listen(portNumber, () => {
  console.log('app running at localhost', portNumber);
});
