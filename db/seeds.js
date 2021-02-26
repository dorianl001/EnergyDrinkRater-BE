const energyDrinks = require('../models/energydrink-model');
const enDrinkSeeds = require('./seeds.json');
energyDrinks.deleteMany({})
    .then(() => {
        return Beverages.insertMany(enDrinkSeeds);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    })