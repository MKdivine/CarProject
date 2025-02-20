const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const aktuellesRouter = require('./routes/aktuelles');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

const app = express();
const port = 3000;

// Log MongoDB URI to check the value
console.log('MongoDB URI:', process.env.CONNECTION_MONGO);

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/aktuelles', aktuellesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
