const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

sendEmail = (itemName,itemPrice,marketUrl) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.senderemail,
      pass: process.env.senderpassword
    }
  });
  
  var mailOptions = {
    from: process.env.senderemail,
    to: process.env.recipientemail,
    subject: 'Item price alert',
    text: 'The item : ' + itemName + ' is now available below your desired price at : ' + itemPrice + '\nBuy it here : ' + marketUrl
  };

  transporter.sendMail(mailOptions, (error,info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {sendEmail}