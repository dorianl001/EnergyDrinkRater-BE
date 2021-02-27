const express = require('express');
const router = express.Router();
const commRouter = require('../models/comments-model');

//list all comments 
router.get('/', (req, res) => {
    commRouter.find({}).then((comment) => res.json(comment));
});

module.exports = router; 