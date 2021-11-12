const { response, request} = require('express');
const  usuarioGet = (req = request, res = response) => {

    res.send({
        mensaje: 'Peticion GET'
    })

}

module.exports = {
    usuarioGet
}
