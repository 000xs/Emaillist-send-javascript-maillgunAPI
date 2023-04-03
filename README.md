
# Emaillist-send-javascript-maillgunAPI

Sending emaills using javascript code.
## Installation

Install Emaillist-send-javascript-maillgunAPI
 with npm

```bash
  npm install 
```

note : project cd you project files and install

```bash
  node index.js
```
    
## to use

 - [mailgun.com](https://www.mailgun.com/)
 - [mailgun documentation](https://documentation.mailgun.com/en/latest/quickstart.html)
 - [mailgun.js](https://www.npmjs.com/package/mailgun-js)


## Usage/Examples

```javascript
const mailgun = require("mailgun-js");
const fs = require('fs');
const DOMAIN = 'domain name';
const api_key = 'api key' ;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const emailData = {
	from: 'exsample',
	to: 'to',
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
```

``` const DOMAIN = 'domain name'; ```
to add your domain name ina mailgun registerd

```const api_key = 'api key' ;``` to add API key In maillgun.

you can use :
```const emailData = {
	from: 'exsample',
	to: 'to',
	subject: 'Promotion',
	template: "0-1",
	'h:X-Mailgun-Variables': {test: "test"}
};
```
data to send mail subject mailgun temple like emaill infomations
## runing demo video

[![demot](https://i.ytimg.com/vi/vPFcX4ugv6Y/maxresdefault.jpg)](https://www.youtube.com/watch?v=vPFcX4ugv6Y "Runing demo")


## Authors

- [@SithumSathsaras](https://github.com/SithumSathsaras)

