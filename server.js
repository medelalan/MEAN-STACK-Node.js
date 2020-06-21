var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('Hello World!')
});

app.get('/sweet', function (req, res){
    res.send('Sweet!')
});

app.listen(5000, function(){
    console.log('app listening to port 5000!')
});