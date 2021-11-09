const { Router } = require('express');
const router = new Router();
// const { conn } = require ('./routes');
const mysql = require('mysql');
// router.get ('/', usuarioGet);



module.exports = router;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_node'
  })
  

  conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida...');
  });

router.get('/productos', (req, res) => {
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('productos', {
        results: results
      });
    });
  });
  
  // Insertar 
  router.post('/save', (req, res) => {
    let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio };
    let sql = "INSERT INTO producto SET ?";
    let query = conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.redirect('/productos');
    });
  });
  
  
  //UPDATE
  router.post('/update', (req, res) => {
    let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/productos');
    });
  });
  
  // DELETE
  router.post('/delete',(req, res) => {
    let sql = "DELETE FROM producto WHERE producto_id="+req.body.producto_id+"";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
        res.redirect('/productos');
    });
  });


// envio mail

router.get('/contacto'), (req,res) => {
  res.render('contacto')
}
  module.exports = router;


