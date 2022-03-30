//requires express
const express = require('express');
//requires the data json file
const { animals } = require('./data/animals.json');


//this adds the route for the fetch and a callback 
//function that is executed every time the GET request happens.
app.get('/api/animals', (req,res) => {
    res.send('Hello');
});

//This tells the server to listen for (fetch) requests. Always used at end of the server.js file
app.listen(3001, () => {
    console.log(`API now on port 3001!`);
});
