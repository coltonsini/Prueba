const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
require('dotenv').config();

// Inicializaciones

const app = express();
require('./database');

// Settings

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// Moddlewares 

app.use(express.urlencoded({extended: false}));


// Routes 

app.use(require('./routes/index')); 


//static files 

app.use(express.static(path.join(__dirname, 'public')));

// iniciar servidor

app.listen(app.get('port'), () =>{
    console.log('servidor ejecutandose', app.get('port'));
})