// app.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World! Anthony? '));

// Динамическое приветствие
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}! Welcome to our site.`);
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
