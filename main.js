const express = require('express');
const { handlebars } = require('hbs');

require ('dotenv').config();

const app = express();
const port = process.env.port;
const hbs = require('hbs');



//handlebars


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials/")

app.get('/', (req, res) => {

  res.render('index'); {
  
}}

)
app.get('/index', (req, res) => {

  res.render('index'); {
  
}}

)

// contenido estatico

app.use(express.static('public'))

  
 
app.get('/contacto', (req, res) => {
     res.render('contacto'); {

     }
})

app.get('/productos', (req, res) => {
  res.render('productos'); {

  }
})

app.get('/rrss', (req, res) => {
  res.render('rrss'); {

  }
})

app.get('/pastas', (req, res) => {
  res.render('pastas'); {

  }
})

app.get('/cafe', (req, res) => {
  res.render('cafe'); {

  }
})

app.get('/tienda', (req, res) => {
  res.render('tienda'); {

  }
})

app.get('*', (req, res) => {
  res.render('404'); {

  }
})


app.listen(port, () => {
        console.log(`Usando el puerto http://localhost:${port}`);
});