const mailgun = require("mailgun-js");
const fs = require('fs');
const DOMAIN = 'your domain';
const api_key = 'API key' ;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const emailData = {
	from: 'www.your.com <contact@your.tk>',
	to: 'exsample@gmail.com',
	subject: 'Promotion',
	template: "0-1",
	'h:X-Mailgun-Variables': {test: "test"}
};

const recipientList = fs.readFileSync('list.txt').toString().split('\n');

recipientList.forEach((recipient) => {
  emailData.to = recipient;

  mg.messages().send(emailData, (error, body) => {
    if (error) {
      console.log('Error sending email to ' + recipient + ': ' + error);
    } else {
      console.log('Email sent to ' + recipient);
    }
  });
});