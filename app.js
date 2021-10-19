require('dotenv').config();
const express = require('express');
const cors = require('cors');

const uploadsRoute = require("./routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("uploads"))

app.get('/', (req, res, next) => {
  res.send("Hello World")
})

app.use("/upload", uploadsRoute)

app.listen( process.env.PORT || 4000, () => {
  console.log("server has started")
});
