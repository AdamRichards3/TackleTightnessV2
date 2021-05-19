'use strict'

const express = require('express');

const app = express();
const PORT = 8080;

app.listen(PORT, (err) => {
	console.log(`Server listening on http:/localhost:${PORT}`);
});

app.use(express.static('__durname'));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
