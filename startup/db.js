const winston = require('winston');
const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect()
    .then(() => winston.info("Connected to MongoDB..."));

};
