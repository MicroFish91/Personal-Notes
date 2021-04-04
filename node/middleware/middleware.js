/*
    A middleware function is a function that takes a request object and either
    terminates the request/response cycle or passes control to another middleware
    function.
*/

// Custom Middleware Function Example
app.use(function(req, res, next)) {
    console.log("Logging...");
    next();
}; 

app.use(function(req, res, next)) {
    console.log("Authenticating...");
    next();
};

// Other Express Middleware
// https://expressjs.com/en/resources/middleware.html


// Helmet
// 'npm i helmet'
const helmet = require('helmet');
app.use(helmet());

// 