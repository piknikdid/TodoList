var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();

app.use(express.static(path.join(__dirname)));


app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
