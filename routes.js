const express = require('express');
const router = express.Router();

router.get('/games', (req, res) => {
    res.sendFile(__dirname + '/public/games.html');
});

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

router.get('/docs/LICENSE', (req, res) => {
    res.sendFile(__dirname + '/src/LICENSE');
});

module.exports = router;
