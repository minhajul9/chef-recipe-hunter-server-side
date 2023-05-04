const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;


const chefs = require('./data/chefs.json')
const recipe = require('./data/recipe.json')


app.use(cors())

app.get('/', (req, res)=>{
    res.send('running on port');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    // console.log(id);
    const chef = chefs.find(ch => ch.id === id);
    res.send(chef)
})

app.get('/recipe', (req, res)=>{
    res.send(recipe);
})

app.get('/recipe/:name', (req, res)=>{

    const newName = req.params.name;
    console.log(newName);
    
    const select = recipe.find( rc => rc.name == newName);
    res.send(select)
    


})

app.listen(port, () => {
    console.log('chef server');
})