const router = require('express').Router();

const {
  send
} = require('../controllers/mail');

// api/mail
router.post('/send', send);

module.exports = router;
