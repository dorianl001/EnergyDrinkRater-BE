const express = require('express');
const app = express();
const commentController = require('./controllers/comments-controller')
const edrinkController = require('./controllers/edrink-controller')

const cors = require("cors");

app.use(cors());


app.use('/', (req, res) => {
    res.send('Express says, Hello!')
})

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* Start Route */
app.use('/comment', commentController);
app.use('/edrink', edrinkController);
/* End Route */

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express is running on port: ${port}`);
})