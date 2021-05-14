const router = require('express').Router();

const {
  getAll,
  getByUsername,
  create,
  confirm
} = require('../controllers/users');

// api/users
router.get('/', getAll);
router.get('/username', getByUsername);
router.post('/create', create);
router.get('/confirm/:user', confirm);

module.exports = router;
