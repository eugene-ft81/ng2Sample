var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var users = [];

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    return res.send(users);
});

app.post('/add', (req, res) => {
    users.push(req.body);
    return res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
