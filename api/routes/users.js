const router = require('express').Router();

const {
  getAll,
  getByUsername
} = require('../controllers/users');

// api/users
router.get('/', getAll);
router.get('/username', getByUsername);

module.exports = router;
