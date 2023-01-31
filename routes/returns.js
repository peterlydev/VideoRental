const { Rental } = require('../models/rental');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("CustomerID not valid!");
  if (!req.body.movieId) return res.status(400).send("MovieID not valid!");

  const rental = await Rental.findOne({
    "customer._id": req.body.customerId,
    "movie._id": req.body.movieId,
  });
  if (!rental) return res.status(404).send('Rental not found!');

  res.status(401).send("Unauthorized");
});

module.exports = router;
