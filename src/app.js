const express = require('express');
const path = require('path');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname , '../templates/views'));
hbs.registerPartials(path.join(__dirname, "../templates/partials"))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/views/index', function(req, res) {
    res.render("index", {
        title: "View Page",
        body: "This is view body"
    });
});

app.get('/help', function(req, res) {
        res.send("Help");
});

app.listen(3000, function() {
    console.log("Server is running on 3000");
});

