const path = require("path");
const express = require('express');
const session = require("express-session");
const { handlebars } = require('hbs');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const hbs = require('hbs');
const { urlencoded } = require('express');
const router = require("./router/router");




//settings
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'hbs');


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(require ('./router/router'));




    
// //handlebars


hbs.registerPartials(__dirname + "/views/partials/")


app.listen(port, () => {
  console.log(`Usando el puerto http://localhost:${port}`);
});