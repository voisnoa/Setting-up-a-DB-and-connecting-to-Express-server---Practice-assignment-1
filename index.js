const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => console.error('Database connection error:', err));


  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });