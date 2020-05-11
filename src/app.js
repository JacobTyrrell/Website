const express = require('express'); // import express package
const app = express(); // initalise 
const port = 3001; // this is for nginx's proxy

app.get('/', (req, res) => {
    res.send('Hello! This is a Express server!')
});

app.listen(port, () => {
    console.log(`Example application listening on port ${port}`)
});
