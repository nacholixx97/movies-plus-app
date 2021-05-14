const db = require('../database/config');
const { catchAsync } = require('../helpers/catchAsync');
const { sendOK } = require('../helpers/sendOK');

const usersController = {};

usersController.getAll = catchAsync(async (req, res, next) => {
  const users = await db('users').select()
  sendOK(res, users);
});

usersController.getByUsername = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .where({username: req.query.user})
  sendOK(res, users);
});

usersController.create = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .insert(req.body)
    .returning('id')
  sendOK(res, users);
});

// usersController.create = catchAsync(async (req, res, next) => {
//   const response = await db('gender')
//     .insert(req.body)
//   sendOK(res, response);
// });

// usersController.remove = catchAsync(async (req, res, next) => {
//   const result = await db('gender').where({id: req.params.id}).del();
//   console.log(result);
//   sendOK(res, {result});
// });

module.exports = usersController;
