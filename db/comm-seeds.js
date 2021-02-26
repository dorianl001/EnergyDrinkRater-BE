const Comment = require('../models/comments-model');
const CommSeeds = require('./comment-seeds.json');
Comment.deleteMany({})
    .then(() => {
        return Comment.insertMany(CommSeeds)
    })
    .then(console.log)
    .catch(console.eror)
    .finally( () => {process.exit()}) 