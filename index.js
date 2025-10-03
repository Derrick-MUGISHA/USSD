const express = require('express');
const bodyParser = require('body-parser');
const africastalking = require('africastalking')({
  apiKey: 'atsk_4aed9f7f6fbb3281eca6bd744fc1913d4a7befd27b5cc6d4c71ac73774943f3a48b05d7d',
  username: 'MUGISHA Derrick'
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = '';

  if (text === '') {
    response = `CON Welcome to My Service
1. Check Balance
2. Buy Data`;
  } else if (text === '1') {
    response = `END Your balance is $10`;
  } else if (text === '2') {
    response = `END You bought 100MB data`;
  }

  res.set('Content-Type', 'text/plain');
  res.send(response);
});

app.listen(3000, () => console.log('USSD app running on port 3000'));
