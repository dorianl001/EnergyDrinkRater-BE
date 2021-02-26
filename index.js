const express = require('express');
const app = express();

/* Start Route */
app.use('/', (req, res) => {
    res.send('Express says, Hello!')
})
/* End Route */

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express is running on port: ${port}`);
})