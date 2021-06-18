'use strict'

const express = require('express');

const app = express();
const PORT = 8080;

app.listen(PORT, (err) => {
	console.log(`Server listening on http:/localhost:${PORT}`);
});

app.use(express.static('public'));
app.use(express.static('js'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
