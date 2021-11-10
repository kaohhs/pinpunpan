const { Router } = require('express');
const router = new Router();
const nodemailer = require('nodemailer');
const mysql = require('mysql');




// CONEXION CON BASE DE DATOS


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_node'
  })
  

  
conn.connect((err)=>{
  if(err) throw err;
  console.log('conexion establecida...')
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
  
  // SELECT 
router.get('/', (req, res) => {
  let sql = "SELECT * FROM producto";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('index', {
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
      res.redirect('/');
  });
});


//UPDATE
router.post('/update', (req, res) => {
  let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/');
  });
});

// DELETE
router.post('/delete', (req, res) => {
  let sql = "DELETE FROM producto WHERE producto_id=" + req.body.producto_id + "";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/');
  });
});

  //Envio de mail

  router.get('/contacto',(req, res) => {
      res.render('contacto');
  });
  
  
      router.post("/send-email",(req, res) =>{
      const transporter = nodemailer.createTransport({
          host:"smtp.ethereal.email",
          port:"587",
          secure:false,
          auth: {
          user: 'omari.bahringer60@ethereal.email',
          pass: 'Ph7WjQGseTV7wB3HXq'
      }
      })
      const mailOptions={
          from: "Remitente <omari.bahringer60@ethereal.email>",
          to:"naranjaspintdas@gmail.com",
          subject: "Enviado desde nodemailer",
          text:"¡Hola mundo!"
      };
      transporter.sendMail(mailOptions,(error, info)=>{
          if(error){
          res.status(500).send(error.message);
              }else{
              console.log("Email enviado")
              res.status(200).jsonp(reqbody);
              }
      });
  });

  module.exports = router;


