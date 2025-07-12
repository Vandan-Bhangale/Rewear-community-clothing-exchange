// controller/authController.js
const path = require('path');

exports.getLogin = (req, res) => {
    res.sendFile(path.join(__dirname,'../public/Login.html'));
    // Or render your login view:
    // res.render('login');
};

exports.postLogin = (req, res) => {
    // Your login logic here
    const { email, password } = req.body;
    // Authentication logic...
    res.sendFile(path.join(__dirname, '../public/index.html'));
};

exports.getSignup = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
    // Or render your signup view:
    // res.render('signup');
};

exports.postSignup = (req, res) => {
    // Your signup logic here
    const { username, email, password } = req.body;
    // Registration logic...
    res.json({ 
        message: 'Signup successful',
        status: 'success' 
    });
};
