const router = require('express').Router();

const {
  getAll,
  getByUsername,
  create
} = require('../controllers/users');

// api/users
router.get('/', getAll);
router.get('/username', getByUsername);
router.post('/create', create);

module.exports = router;
