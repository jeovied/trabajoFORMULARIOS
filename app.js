const express = require('express');
const path = require('path');
const port = 3030;
const app = express();

app.use(express.static('public'));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views', 'register.html')));
app.listen(port , () => console.log('Server running on port ' + port));