const express = require('express');

const app = express();
const port = 5000;

const chefs = require('./data/chefs.json')

app.get('/', (req, res)=>{
    res.send('running on port');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log('chef server');
})