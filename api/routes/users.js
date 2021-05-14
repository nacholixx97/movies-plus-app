const router = require('express').Router();

const {
  getAll,
  getById,
  getByUsername,
  create,
  confirm,
  activate,
  deactivate,
} = require('../controllers/users');

// api/users
router.get('/', getAll);
router.get('/id/:id', getById);
router.get('/username/:username', getByUsername);
router.post('/create', create);
router.get('/confirm/:user', confirm);
router.get('/activate/:id', activate);
router.get('/deactivate/:id', deactivate);

module.exports = router;
