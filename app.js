const express = require('express');
const app = express();

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  items.push(req.body.item);
  res.status(201).send('Item added');
});

module.exports = app;
