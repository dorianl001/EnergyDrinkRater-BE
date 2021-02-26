const mongoose = require('../db/connections')
const energyDrinkSchema = new mongoose.Schema(
    {
        ID: Number,
        Brand: String,
        Flavor: String,
        Image: String, 
        Stats: String
    }
);
const energyDrink = mongoose.model('energyDrink', energyDrinkSchema);
module.exports = energyDrink;