var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
})

app.post('/result', function(req, res){
    submitted_info = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment
    };
    res.render('result', {user_data: submitted_info});
})

app.listen(8000, function(){
    console.log("Listening!!!");
})