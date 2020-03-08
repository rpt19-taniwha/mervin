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

