const express = require('express');
const router = express.Router();
const edrinkRouter = require('../models/energydrink-model');

//list all energy drinks
router.get('/', (req, res) => {
    edrinkRouter.find({}).then((edrink) => res.json(edrink));
});

//list an energy drink by id 
router.get('/:id', (req, res) => {
    const id = req.params.id;
    edrinkRouter.findOne({ _id: id }).then((x) => res.json(x));
});

//create a new energy drink post
router.post('/', (req, res) => {
    edrinkRouter
        .create(req.body)
        .then((edrinkRouter) => res.json(edrinkRouter))
        .catch(next);
});

//update a single energry drink post 
router.put('/:id', (req, res) => {
    edrinkRouter
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(edrinkRouter.find({}).then((edrinkRouter) => res.json(edrinkRouter)));
});

//delete a person by id 
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    edrinkRouter.findOneAndDelete({ _id: id }).then((edrinkRouter) => res.json(edrinkRouter));   
});
module.exports = router;