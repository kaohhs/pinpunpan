const express = require('express');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuarioPath = "/api/usuario";

        // middlewares 
        this.middlewares();

        // RUTAS
        this.routes();

    }
    middlewares(){
        
        // lectura y parseo del body
        this.app.use(express.json());

        // directorio publico

        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Server corriendo en el puerto", this.port);
        })
    }
}

module.exports = Server

