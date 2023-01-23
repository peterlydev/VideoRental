require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");
const error = require("./middleware/error");
const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const Fawn = require("fawn");
const home = require("./routes/home");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const app = express();

winston.handleExceptions(
  new winston.transports.File({ filename: 'uncaughtExceptions.log' }))

process.on('unhandledRejection', (ex) => {
  throw ex;
});

winston.add(winston.transports.File, { filename: "logfile.log" });
winston.add(winston.transports.MongoDB, {
  db: "mongodb://localhost/vidly",
  level: "info"
});

const p = Promise.reject(new Error('Something failed miserably!'));
p.then(() => console.log('Done!'));

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined!");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.log("Could not connect to MongoDB!"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
