const PORT = process.env.PORT || '8080';
const express = require('express');
const app = express();
const hbs = require('hbs');
let server = require('http').Server(app);

app.set("port",PORT);
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

server.listen(PORT, function() {  // do not add localhost here if you are deploying it
    console.log("server listening to port "+PORT);
});