const express = require('express');
const router = express.Router();
const groupRouter = require('./groupRouter');
const studentRouter = require('./studentRouter');

router.get('/', (req, res) => {
  res.render('home');
})

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.send(err);
    }
    else {
      res.redirect('/');
    }
  })
})

router.use('/student', studentRouter);

router.use('/group', groupRouter);

module.exports = router;