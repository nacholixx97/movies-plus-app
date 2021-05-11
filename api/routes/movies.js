const router = require('express').Router();

const {
  getAll,
  get,
  create,
  update,
  remove
} = require('../controllers/movies');

// api/movies
router.get('/', getAll);
router.get('/:id', get);
router.post('/', create);
router.put('/', update);
router.delete('/:id', remove);

module.exports = router;
