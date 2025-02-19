const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const aktuellesRouter = require('./routes/aktuelles');

const app = express();
const port = 3000;

// MongoDB verbinden
mongoose.connect(process.env.CONNECTION_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// EJS als Template-Engine einrichten
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware für statische Dateien
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routen einbinden
app.use('/aktuelles', aktuellesRouter);

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});