const { Router } = require('express');
const router = new Router();
const nodemailer = require('nodemailer');
const mysql = require('mysql');

const port = process.env.PORT || 3000


// CONEXION CON BASE DE DATOS




const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'marcelofernandez'
})



conn.connect((err) => {
    if (err) throw err;
    console.log('conexion establecida...')
});


// RUTAS



router.get('/', (req, res) => {
    res.render('index', {

    }
    );
});

router.get('/index', (req, res) => {
    res.render('index', {

    }
    );
});




router.get('/contacto', (req, res) => {
    res.render('contacto');


})


router.get('/rrss', (req, res) => {
    res.render('rrss');


})

router.get('/pastas', (req, res) => {
    res.render('pastas');


})

router.get('/cafe', (req, res) => {
    res.render('cafe');

// fetch('http://5fc82e232af77700165ad172.mockapi.io/api/products')
// .then(response => response.json())
// .then(data => console.log(data));

})

router.get('/tienda', (req, res) => {
    res.render('tienda');
})

router.get('/enviado', (req, res) => {
    res.render('enviado');


})


// Suscripcion 
router.post('/suscribe', (req, res) => {
    let data = { email: req.body.email, }
    let sql = "INSERT INTO suscriptos SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/enviado');
    });
});






// SELECT 
router.get('/productos', (req, res) => {
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('../views/productos', {
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
router.post('/delete', (req, res) => {
    let sql = "DELETE FROM producto WHERE producto_id=" + req.body.producto_id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/productos');
    });
});



   //Envio de mail

   router.get('/contacto', (req, res) => {
      res.render('contacto');
    });


   router.post("/envio", (req, res) => {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const email = req.body.email;
        const asunto = req.body.asunto;
        const mensaje = req.body.mensaje;


        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "cc5c3bb782a3b2",
              pass: "685826181e853a"
            }
          });
        const mailOptions = {
            from: "Remitente",
            to: "naranjaspintadas@gmail.com",
            subject: `${asunto}`,
            html: `<h1>Consulta de ${nombre} sobre ${mensaje}. Responder a ${email}</h1>`,
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                res.redirect('/enviado');
                res.status(200).jsonp(reqbody);
                
            }
        });
    });


router.get('*', (req, res) => {
    res.render('404');


})
module.exports = router;

