const nodemailer = require("nodemailer");
const fs = require("fs");

exports.mailSender = (mailAddress, fileName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "mhpss.bootcamp@gmail.com",
      pass: process.env.MAIL_PASS, // your 16 digit code
    },
  });
  const mailOptions = {
    from: "mhpss.bootcamp@gmail.com",
    to: mailAddress,
    subject: "Your certificate",
    attachments: [
      {
        path: `./src/processed_images/${fileName}.png`,
        filename: `${fileName}.jpg`,
      },
    ],
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
