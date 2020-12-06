const express = require('express');
const hbs = require('hbs');


const expApp = express();
expApp.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
expApp.set('view engine', 'hbs');np

expApp.get('/', (req, res) =>{
    res.render('partials/home');
});
expApp.listen(3000);
