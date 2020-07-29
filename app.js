const express = require('express'); //libreria de express
const hbs = require('hbs');


//Inizialiso el Objeto
const app = express(); //Crear objeto
require('./models/mysql'); //llamo a mysql 

//Settings
app.set('view engine', 'hbs'); // hbs
app.use(express.urlencoded({ extended: false }));
const puerto = process.env.PORT || 3000; // puerto para Heroku
app.set('port', puerto)
app.use(express.static(__dirname + '/public')); // buscar en la carpeta public

//Routes
app.use(require('./routes/metrica'));
module.exports = app;