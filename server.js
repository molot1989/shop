/**
 * Created by molot on 18.04.16.
 */
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('shop', ['users']);
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/image', express.static(__dirname + '/image'));
app.post('/userRegister', function(req, res) {
    console.log(req.body);
    db.users.insert(req.body, function (err, docs) {
        res.json(docs);
    });
});
app.all('/*', function(req, res) {
    res.sendFile('./public/index.html', { root: __dirname });
});
app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});