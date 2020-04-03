const http = require('http') // Incluyo modulo htpp
var respuesta = { // var respuesta es un objeto JSON el cual tiene el dato que quiero obtener.
    respuesta : "Mundo" // En este caso el objeto tiene un atributo Respuesta - con el valor de Mundo 
}
// en caso de hacer un res.end(respuesta) nos diria un error parecido a este:
// The "chunk" argument must be one of type string
//  or Buffer. Received type object
// ------
// Esto lo que en pocas palabras nos esta diciendo es el argumento de res.end(respuesta) -> es un Objeto JSON
// El argumento (respuesta) Deberia ser -> String  o Buffer

var server = http.createServer(function (req , res) {
    if(req.url === '/hola'){
        res.end(JSON.stringify(respuesta)); // Transformamos respuesta -> JSON  a respuesta -> STRING 
        //de esa forma deberiamos evitar el error de arriba
    } else {
        //si el recurso no existe
        res.statusCode = 404; 
        res.end('Recurso: '+ req.url + ' no encontrado') 
    }
})


server.listen(3000)