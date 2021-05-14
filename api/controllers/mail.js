const { catchAsync } = require('../helpers/catchAsync');
const { sendOK } = require('../helpers/sendOK');
const nodemailer = require('nodemailer');

const mailController = {};

mailController.send = catchAsync(async (req, res, next) => {
  const request = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seba.ponce97@gmail.com',
      pass: 'Nacholixx97'
    }
  });
  const mailOptions = {
    from: `${request.from}`,
    to: `${request.sendTo}`, // Cambia esta parte por el destinatario
    subject: `${request.subject}`,
    html: `${request.message}`
  };
  transporter.sendMail(mailOptions, function (err, info) {
    let result;
    if (err){
      result = err;
    }else{
      result = info;
    }
    sendOK(res, result); 
  });
});

module.exports = mailController;
