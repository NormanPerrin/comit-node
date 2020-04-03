const http = require('http') // Incluyo el modulo http

var server = http.createServer(function (req , res) { //Defino el comportamiento de el servidor donde llegaran req y cada req tendra 1 res
    if (req.url === '/hola'){// si la Consulta o Request (req) pide al servidor por el recurso /hola
        res.end('mundo') //respondo con un 'mundo' indicando que todo salio bien (status code 200)
    } else {
        //si el recurso no existe
        res.statusCode = 404; // Por defecto es 200, en este caso debemos cambiarlo por un 404 
        res.end('Recurso: '+ req.url + ' no encontrado') // indico que el recurso no existe y no fue encontrado (status code 404)
    }
})

server.listen(3000) // Enciendo mi servidor en el puerto 3000 para que empieze a recibir consultas