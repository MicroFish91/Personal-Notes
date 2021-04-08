// Express is a framework that gives our web server application proper structure and makes it more modular,
// readable, and maintainable

// Express is a simple, minimalistic and lightweight framework for building web servers

const express = require('express');
const app = express();

// http://expressjs.com/en/4x/api.html#app
// These app objects represent all of the RESTful HTTP (Verbs) Requests discussed under restful.js
// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Listening on port 3000'));