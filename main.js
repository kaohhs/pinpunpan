const path = require ("path");
const express = require('express');
const session = require("express-session");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const { handlebars } = require('hbs');



require ('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const hbs = require('hbs');
const { urlencoded } = require('express');

// middlewares

app.use(express.json());
app.use( express.urlencoded({extended: false}))

app.use(session({
  secret: '123456',
  resave: true,
  saveUninitialized: true
}))


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

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/assets', express.static (__dirname + '/public'));


//Routes

app.get('/' , (req,res) =>{
  let sql = "SELECT * FROM producto";
  let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('productos', {
          results: results
      })
          
  })
})

// insertar

app.post('/save', (req, res)=>{
  let data = {producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio};
  let sql = "INSERT INTO producto SET ? ";
  let query = conn.query(sql, data, (err, results)=>{
      if(err) throw err;
      res.redirect('/');
  })
})

// SELECT 
app.get('/',(req, res)=>{
  let sql ="SELECT * FROM producto";
  let query = conn.query(sql, (err, results)=>{
      if(err) throw err;
      res.render('productos',{
          results: results
      });
  });
});
// Insertar 
app.post('/save',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//UPDATE
app.post('/update',(req, res) => {
  let sql = "UPDATE producto SET producto_nombre='"+req.body.producto_nombre+"', producto_precio='"+req.body.producto_precio+"' WHERE producto_id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.get("/", (req, res) => {
  res.render("index");
});

app.post('/envio', (req, res) => {
  console.log(req.body);
})


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
