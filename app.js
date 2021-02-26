const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
const session = require('express-session');
const {Student, Group, Message} = require('./models');

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
})