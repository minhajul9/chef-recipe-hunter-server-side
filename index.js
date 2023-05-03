const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('running on port');
})

app.listen(port, () => {
    console.log('chef server');
})