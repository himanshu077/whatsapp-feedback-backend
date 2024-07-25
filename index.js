const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();
const { sendFeedbackEmail } = require('./functions');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);



app.post('/whatsapp', (req, res) => {
    const { Body, From } = req.body;
    let responseMessage = '';
  console.log({Body,From});
    if (Body === '9' || Body === '10') {
        responseMessage = 'Thank you for your positive feedback!';
    } else if (Body === '7' || Body === '8') {
        responseMessage = 'Thank you for your feedback!';
    } else if (Body === '1' || Body === '2' || Body === '3' || Body === '4' || Body === '5' || Body === '6') {
        responseMessage = 'We appreciate your feedback and will work to improve!';
    } else {
        responseMessage = 'Please reply with a number between 1 and 10 to provide your feedback.';
    }

    client.messages.create({
        body: responseMessage,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, 
        to: From 
    }).then(message => console.log(message.sid))
      .catch(error => console.error(error.message));

      sendFeedbackEmail(From, Body)
      .then(info => console.log('Email sent:', info.response))
      .catch(error => console.error('Error sending email:', error));


    res.send('<Response></Response>');
});

app.get('/send-survey', (req, res) => {
    const surveyMessage = `Thanks for shopping with us! On a scale of 1 to 10, how likely are you to recommend us to others?\n\n9 or 10 - Very Likely 😊\n7 or 8 - Likely 😐\n1 to 6 - Unlikely 😞\n\nReply with your rating.`;
  let {to} = req.query
  console.log({to});
  if(!to){
    return res.status(400).send({
      status:"failed",
      message:"to cannot be empty"
    })
  }
    client.messages.create({
        body: surveyMessage,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: `whatsapp:${+to}`
    }).then(message => console.log(message.sid))
      .catch(error => console.error(error.message));

    res.send('Survey sent!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
