const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();


const PORT = 2001;


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

  app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api', require('./routes/index'));

app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});