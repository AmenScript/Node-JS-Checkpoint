const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'password',
    },
});

const mailOptions = {
    from: 'email@gmail.com',
    to: 'email@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This email was sent using Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error('Error:', error);
    }
    console.log('Email sent:', info.response);
});
