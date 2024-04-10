const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/toDoRoute');
require('dotenv').config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected To MongoDB....`))
  .catch((err) => console.log(err));

app.use("/api" , router);

app.listen(port, () => console.log(`Server started on ${port}`));
