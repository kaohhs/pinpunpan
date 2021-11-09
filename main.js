const path = require ("path");
const express = require('express');
const session = require("express-session");
const { handlebars } = require('hbs');
const mysql = require('mysql');
const bodyParser = require("body-parser");

require ('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const hbs = require('hbs');
const { urlencoded } = require('express');


// conexion a la base de datos


const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database: 'crud_node'
})

conn.connect((err)=>{
  if(err) throw err;
  console.log('conexion establecida...')
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/assets', express.static (__dirname + '/public'));


//Routes

app.get('/productos' , (req,res) =>{
  let sql = "SELECT * FROM producto";
  let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('productos', {
          results: results
      })
          
  })
})

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));
app.use ('./routes/routes.js');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');







app.use(express.json());
app.use( express.urlencoded({extended: false}))

app.use(session({
  secret: '123456',
  resave: true,
  saveUninitialized: true
}))



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

app.use(express.static("public"))


  
 
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