const Comment = require('../models/comments-model');
const commSeeds = require('./comm-seeds.json');
Comment.deleteMany({})
    .then(() => {
        return Comment.insertMany(commSeeds)
    })
    .then(console.log)
    .catch(console.eror)
    .finally( () => {process.exit()}) 