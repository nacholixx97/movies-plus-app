const router = require('express').Router();

const {
  getGenders,
  create,
  remove
} = require('../controllers/utils');

// api/movies
router.get('/genders', getGenders);
router.post('/genders', create);
router.delete('/genders/:id', remove);

module.exports = router;
