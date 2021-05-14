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
    .where({username: req.query.user, status: 1})
  sendOK(res, users);
});

usersController.create = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .insert(req.body)
    .returning('id')
  sendOK(res, users);
});

usersController.confirm = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .update({status: 1})
    .where({username: req.params.user})
  if (users) {
    sendOK(res, {status: '1'});
  }else{
    sendOK(res, {status: '0'});
  }
});

module.exports = usersController;
