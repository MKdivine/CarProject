const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoDB = 'mongodb://localhost/blog';

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const blogRoutes = require('./blogRoutes');
app.use('/api', blogRoutes);

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
