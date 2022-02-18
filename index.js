
const express = require('express');
const app = express();
const port = 9999;

// app.get(arg1, arg2);
// app.get('url', () => {});

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// http://localhost:9999
app.get('/', (request, response) => {
    console.log(`Welcome`);
    response.send(`Welcome to TechM NodeJS App at ${port}`);
});

// http://localhost:9999/home
app.get('/home', (request, response) => {
    console.log(`Welcome Home`);
    response.send(`Welcome to TechM NodeJS App home`);
});

// http://localhost:9999/contact
app.get('/contact', (request, response) => {
    console.log(`Welcome contact`);
    response.send(`Welcome to TechM NodeJS App contact`);
});

// http://localhost:9999/about
app.get('/about', (request, response) => {
    console.log(`Welcome About`);
    response.send(`Welcome to TechM NodeJS App about`);
});


app.listen(port, () => {
    console.log(`Started...`);
    console.log(`Open http://localhost:${port}/ on browser.`)
});
