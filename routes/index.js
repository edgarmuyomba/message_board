var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: (new Date()).toDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: (new Date()).toDateString()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  var user = req.body.user;
  var text = req.body.text;
  messages.push({ text: text, user: user, added: (new Date()).toDateString() });
  res.redirect('/');
});

module.exports = router;
