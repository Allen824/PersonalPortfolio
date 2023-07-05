const AWS = require('aws-sdk');

function sendEmail(senderEmail, message) {
  // Create an AWS SES client
  const ses = new AWS.SES({ region: 'us-east-1' }); // Replace with your desired region

  // Construct the email parameters
  const params = {
    Source: 'kagleallen@gmail.com', // Replace with your verified sender email address
    Destination: {
      ToAddresses: ['kagleallen@gmail.com'], // Replace with your desired recipient email address
    },
    Message: {
      Subject: {
        Data: 'New Contact Form Submission',
      },
      Body: {
        Text: {
          Data: `Sender Email: ${senderEmail}\n\nMessage: ${message}`,
        },
      },
    },
  };

  // Send the email
  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent successfully:', data);
    }
  });
}
