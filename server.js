/**
 * Created by molot on 18.04.16.
 */

var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});