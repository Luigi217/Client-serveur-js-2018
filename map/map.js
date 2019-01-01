const requestPromise = require('request-promise');
const express = require('express');

// Init variables
const port = 3000;

const app = express();

app.get('/getMap', (req, res) => {
  res.setHeader(''); // ?
  res.status(200).send(/**/);
});




app.listen(port, () => {
  console.log('Map online');
});
