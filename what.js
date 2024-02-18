var axios = require('axios');

function sendWhatsAppMessage(phoneNumber, message) {
  // Replace these placeholders with your actual Twilio credentials and Twilio WhatsApp number
  const TWILIO_ACCOUNT_SID = 'your_twilio_account_sid';
  const TWILIO_AUTH_TOKEN = 'your_twilio_auth_token';
  const TWILIO_WHATSAPP_NUMBER = 'your_twilio_whatsapp_number';

  var config = {
    method: 'post',
    url: 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(TWILIO_ACCOUNT_SID + ':' + TWILIO_AUTH_TOKEN).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: `To=whatsapp:${phoneNumber}&From=whatsapp:${TWILIO_WHATSAPP_NUMBER}&Body=${encodeURIComponent(message)}`
  };

  return axios(config);
}

// Usage
const phoneNumber = 'whatsapp:+97252273228'; // Phone number should be in E.164 format with 'whatsapp:' prefix
const message = 'Hello, this is a WhatsApp message!';

sendWhatsAppMessage(phoneNumber, message)
  .then(response => {
    console.log("WhatsApp message sent successfully:");
  })
  .catch(error => {
    console.error("Error sending WhatsApp message:", error);
  });
