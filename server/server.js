// SERVER
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

let port = process.env.PORT || 9000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// DATABASE
const db = require('../db/database.js');

// ROUTES
app.post('/products/:productNumber', function(req, res) {
  // Placeholder in case products will be able to be added for future use
})
app.get('/listing/:productNumber', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname + '/../client/dist/'
  });
})
app.get('/products/:productNumber', function(req, res) {
  var productNumber = req.params.productNumber;
  db.fetch(productNumber, function(results) {
    res.send(results[0])
  })
})


