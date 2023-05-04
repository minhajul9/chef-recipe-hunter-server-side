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

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id);
    const chef = chefs.find(ch => ch.id === id);
    res.send(chef)
})

app.listen(port, () => {
    console.log('chef server');
})