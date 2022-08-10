const express = require('express');
const app = express();
const path = require('path');

const dotenv = require('dotenv').config();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/home.html"))})

app.get('/register.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/register.html"))
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/login.html"))
})
    
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})