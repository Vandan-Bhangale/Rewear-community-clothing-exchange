// index.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // ✅ move to top
const multer = require('multer');

const app = express();
const PORT = 3000;

// ✅ Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (CSS, JS, HTML, etc.)
app.use(express.static('public'));

//Exchange function
app.get('/sell', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'exchange.html'));
});

// ✅ MongoDB connection URI
const PATH = 'mongodb+srv://admin:Admin123@cluster0.smbrkxm.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';
// ⬆️ Replace `myDatabase` with your actual DB name

// ✅ Load routes
const authRoutes = require('./Routes/authroutes'); // ✅ Correct folder casing (not "Routes")
app.use(authRoutes);

// ✅ Home route (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Connect to MongoDB and start the server
mongoose.connect(PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected successfully to MongoDB Atlas.");
  app.listen(PORT, () => {
    console.log(`🚀 Server is live on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.log("❌ Error while connecting to MongoDB:", err);
});
