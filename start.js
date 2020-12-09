const PORT = process.env.PORT || '8080';
const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname+ '/public'));
hbs.registerPartials(__dirname + '/views/Partials');
//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('home')
});

app.get('/portfolio', (req,res) => {
    res.render('portfolio')
});

app.get('/product1', (req,res) => {
    res.render('product1')
});

app.get('/blog', (req,res) => {
    res.render('blog')
});

app.get('/about', (req,res) => {
    res.render('about', {
        year: new Date().getFullYear()
    })
})

app.get('/contact', (req,res) => {
    res.render('contact')
});

app.listen(PORT, function() {  // do not add localhost here if you are deploying it
    console.log("server listening to port "+PORT);
});