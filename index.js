
const express = require('express');
const app = express();
const port = 9999;

app.get('/', (request, response) => {
    console.log(`Welcome`);
    response.send(`Welcome to TechM NodeJS App at ${port}`);
});
app.listen(port, () => {
    console.log(`Started...`);
});
