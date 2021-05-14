const db = require('../database/config');
const { catchAsync } = require('../helpers/catchAsync');
const { sendOK } = require('../helpers/sendOK');

const utilsController = {};

utilsController.getGenders = catchAsync(async (req, res, next) => {
  const genders = await db('gender')
    .select('id', 'code', 'name')
    .orderBy('name', 'asc');
  sendOK(res, genders);
});

utilsController.create = catchAsync(async (req, res, next) => {
  const response = await db('gender')
    .insert(req.body)
  sendOK(res, response);
});

utilsController.remove = catchAsync(async (req, res, next) => {
  const result = await db('gender').where({id: req.params.id}).del();
  sendOK(res, {result});
});

module.exports = utilsController;
