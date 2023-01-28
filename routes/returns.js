const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    if (!req.body.customerId) return res.status(400).send('CustomerID not valid!');
    if (!req.body.movieId) return res.status(400).send('MovieID not valid!');

    res.status(401).send('Unauthorized');
});

module.exports = router;
