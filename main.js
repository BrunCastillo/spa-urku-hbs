
const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static('public'));
hbs.registerPartials('views/partials');
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



app.listen(8080);
console.log('Ta prendido el puerto 8080 master')