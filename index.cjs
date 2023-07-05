const express = require('express');
const sendEmail = require('./utils/email.cjs')
const app = express();
const port = 3000;

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post('/contact', (req, res) => {
  const senderEmail = req.body.email;
  const message = req.body.message;

  // Send email using AWS SES
  sendEmail(senderEmail, message);

  // Send response
  res.send('Email sent successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
