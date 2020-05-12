const express = require('express'); // import express package
const path = require('path'); // import path package
const createError = require('http-errors'); //import http-errors package

const app = express(); // initalise 
const port = 3001; // this is for nginx's proxy

// Configure the views
app.set('views', path.join(__dirname, 'views/templates/')) // set templates directory
app.set('view engine', 'ejs'); // set view engine
app.set('view options', { pretty : true }); // prettify the code

// Set static directory
app.use(express.static(path.join(__dirname, 'public'))); 

// passes it onto stuff, i guess.
app.use((req, res, next) => {
    next();
});

// Set routers
app.use('/', require('./routes/index')); // set index router
app.use('/projects', require('./routes/projects')) // set project router

// Catch 404 and pass on to error handler. 
app.use((req, res, next) => {
    next(createError(404));
});

 // Set Error Handler
app.use((err, req, res, next) => {
    // Render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Error', status: err.status, message: err.message });
});

// Initalise the web server
app.listen(port, () => {
    console.log(`Example application listening on port ${port}`)
});
