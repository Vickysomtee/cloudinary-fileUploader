require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express()

app.get('/', (req, res, next) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("server has started")
});
