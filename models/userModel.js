const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "First name is required"]
  },
  LastName: {
    type: String
  },
  Email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  Password: {
    type: String,
    required: [true, "Password is required"]
  },
  userType: {
    type: String,
    enum: ['guest', 'host'],
    default: 'guest'
  }
});

module.exports = mongoose.model("User", userSchema);
