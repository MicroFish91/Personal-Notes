const express = require('express');
const app = express();

// middleware for processing req.body
app.use(express.json());


// ** HTTP GET REQUESTS USING EXPRESS **
// if navigating to /api/courses/1 sends the following object {id: 1}
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

// if navigating to /api/posts/2018/1 sends the following object {year: 2018, month: 1}
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params.id);
});

// if navigating to /api/posts/2018/1?sortBy=name sends the following object {sortBy: 'name'}
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

// error message example
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given id was not found.');
    res.send(course);
});


// ** HTTP POST REQUESTS USING EXPRESS ** need a better example
app.post('/api/courses', (req, res) => {
    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});