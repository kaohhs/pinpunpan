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
    database: 'crud_node'
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

// router.get('/productos', (req, res) => {
//     res.render('productos');


//})

router.get('/rrss', (req, res) => {
    res.render('rrss');


})

router.get('/pastas', (req, res) => {
    res.render('pastas');


})

router.get('/cafe', (req, res) => {
    res.render('cafe');


})

router.get('/tienda', (req, res) => {
    res.render('tienda');


})





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
    const apellido = req.body.apellidp;
    const email = req.body.email;
    const asunto = req.body.asunto;
    const mensaje = req.body.mensaje;


    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kamren.goodwin78@ethereal.email',
            pass: 'NQZEdm9u2gtG9N6sdm'
        }
    });
    const mailOptions = {
        from: "Remitente",
        to: "naranjaspintdas@gmail.com",
        subject: `${asunto}`,
        html: `<h1>Consulta de ${nombre} sobre ${mensaje}. Responder a ${email}</h1>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email enviado")
            res.status(200).jsonp(reqbody);
        }
    });
});


router.get('*', (req, res) => {
    res.render('404');


})
module.exports = router;

