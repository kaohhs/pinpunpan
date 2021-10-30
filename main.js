const express = require('express');
const { handlebars } = require('hbs');


require ('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const hbs = require('hbs');
const { urlencoded } = require('express');

// middlewares

app.use(express.json());
app.use( express.urlencoded({extended: false}))



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


app.post("/registro"), (req, res) => {

  console.log(req.body)
  res.send('recibido')
}

app.listen(PORT, () => {
        console.log(`Usando el puerto http://localhost:${PORT}`);
});