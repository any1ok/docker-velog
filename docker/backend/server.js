const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('Hello World'));

app.listen(3001, () => {
    console.log('My REST API running on port 3000!');
})
