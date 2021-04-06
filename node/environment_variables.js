// Stored in the process object
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// On MAC to set env variable through command-line, use the 'export' command
// For Windows use the 'set' command
// export PORT=5000


// Setting Up Development Environments
// pulls from process.NODE_ENV (undefined if not set)
// usually set to 'development' or 'production'
// if NODE_ENV not set (undefined), app.get('env') defaults to 'development'

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}

// To set env variable in console
// example: 'export NODE_ENV=production'