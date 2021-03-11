const express = require('express');
const router = express.Router();
const commRouter = require('../models/comments-model');

//list all comments 
router.get('/', (req, res) => {
    commRouter.find({}).then((comment) => res.json(comment));
});

//list a comment by id 
router.get('/id:', (req, res) => {
    const id = req.params.id;
    commRouter.find({}).then((comment) => res.json(comment));
});

//create a new comment 
router.post('/', (req, res) => {
    commRouter
    .create(req.body)
    .then((comment) => res.json(comment))
    .catch(next);
});

//update a single comment 
router.put('/:id', (req, res) => {
    commRouter
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(commRouter.find({}).then((comment) => res.json(comment)));
});

//delete a comment by id
router.delete('/id:', (req, res) => {
    const id = req.params.id;
    commRouter.findOneAndDelete({ _id: id }).then((comment) => res.json(comment));
})

module.exports = router; 