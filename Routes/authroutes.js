const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Login Routes
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Signup Routes
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

module.exports = router;
