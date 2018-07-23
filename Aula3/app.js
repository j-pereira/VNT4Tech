'use strict'

const express = require('express');
const server = express();
const app = require('./config/server');
const port = 8080;

//server.use('/vjobs', express.static(__dirname + 'Aula2/app/static'));
server.get('/', async (req, res) => {
    return res.redirect(`http://localhost:${port}/vjobs/index.html`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
