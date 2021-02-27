const express = require('express');
const router = express.Router();
const edrinkRouter = require('../models/energydrink-model');

//list all energy drinks
router.get('/', (req, res) => {
    edrinkRouter.find({}).then((edrink) => res.json(edrink));
});

module.exports = router;