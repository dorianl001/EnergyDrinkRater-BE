const mongoose = require('../db/connections')
const beverageSchema = new mongoose.Schema(
    {
        ID: Number,
        Brand: String,
        Flavor: String,
        Image: String, 
        Stats: String
    }
);
const Beverage = mongoose.model('Beverage', beverageSchema);
module.exports = Beverage;