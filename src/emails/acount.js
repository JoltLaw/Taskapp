const sgMail = require("@sendgrid/mail");
const { text } = require("express");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "joshua.rian04@gmail.com",
    subject: "Welcome to the App",
    text: `welcome to the app, ${name}. let me know how it works out for you.`,
  });
};

const goodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "joshua.rian04@gmail.com",
    subject: `Goodbye ${name}`,
    text: `Goodbye ${name}, we are sorry to see you go. Is there anything we could've done to have kept you using our app?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  goodbyeEmail,
};
