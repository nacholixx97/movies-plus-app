const db = require('../database/config');
const { catchAsync } = require('../helpers/catchAsync');
const { sendOK } = require('../helpers/sendOK');

const usersController = {};

usersController.getAll = catchAsync(async (req, res, next) => {
  const users = await db('users').orderBy('id', 'asc')
  sendOK(res, users);
});

usersController.getById = catchAsync(async (req, res, next) => {
  const users = await db('users').where({id:req.params.id})
  sendOK(res, users);
});

usersController.getByUsername = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .where({username: req.params.username, status: 1})
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

usersController.activate = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .update({status: 1})
    .where({id: req.params.id})
  sendOK(res, {status: '1'});
});

usersController.deactivate = catchAsync(async (req, res, next) => {
  const users = await db('users')
    .update({status: 0})
    .where({id: req.params.id})
  sendOK(res, {status: '1'});
});

module.exports = usersController;
