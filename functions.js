const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendFeedbackEmail = (from, body) => {
  const mailOptions = {
    from: process.env.ALIASEMAIL,
    to: process.env.TO_EMAIL,
    subject: "New WhatsApp Feedback Received",
    text: `New feedback received:\n\nFrom: ${from}\nFeedback: ${body}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendFeedbackEmail };
