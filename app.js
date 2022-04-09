const path = require("path");
const express = require('express');
const { handlebars } = require('hbs');

require ('dotenv').config();

const app = express();
const port = process.env.PORT;
const hbs = require('hbs');

  
//settings
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'hbs');


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(require ('./router/router'));

//  fetch("https://619967319022ea0017a7ae59.mockapi.io/Pastas")
//   .then(response => response.json())
//   .then(json => console.log(json));



    
 //handlebars


hbs.registerPartials(__dirname + "/views/partials/")

// Server listener

app.listen(port, () => {
  console.log(`Usando el puerto http://localhost:${port}`);
});