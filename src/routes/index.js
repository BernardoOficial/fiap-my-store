'use strict'

const express = require('express')

const router = new express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({ message: "API STARTED" });
});

module.exports = router;