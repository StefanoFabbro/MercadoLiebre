const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/home.html"))})

app.get('/register.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/register.html"))
})

app.get('/login.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/login.html"))
})

app.post('/register.html', function(req, res) {
    res.sendFile(path.join (__dirname, "./views/home.html"))
})
    
app.listen(3000, () => {
    console.log('Servidor corriendo');
})