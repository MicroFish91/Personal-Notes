// Stored in the process object
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// On MAC to set env variable through command-line, use the 'export' command
// For Windows use the 'set' command
// export PORT=5000