// SERVER
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/src')));

const port = process.env.PORT || 9000;

app.listen(port);

// DATABASE
const db = require('../db/database.js');

// ROUTES
app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client/src/'),
  });
});
app.get('/products/:productNumber', (req, res) => {
  const { productNumber } = req.params;
  db.fetch(productNumber, (results) => {
    res.send(results[0]);
  });
});
