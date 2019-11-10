# HTTP

## Teoría

### URL

```
http://127.0.0.1:3000/alumnos?filtro=aprobados&orden=nombre
```

Una URL (Uniform Resource Location) especifica la locación de un recurso.

La misma está compuesta de las siguientes partes (obviando algunas otras que no nos interesa):

- `http`: protocolo de comunicación.
- `127.0.0.1`: IP de la máquina (o host) al que me quiero conectar.
- `3000`: puerto al que me quiero conectar. Cuando ponemos una URL en el navegador, si no especificamos puerto nos va al 80 por defecto.
- `/alumnos`: recurso al que quiero acceder. En este caso podría ser una lista de alumnos.
- `?filtro=aprobados&orden=nombre`: cadena de búsqueda (opcional). En este caso se podría estar especificando un filtro para los alumnos, que solo me devuelva los aprobados, y que vengan ordenados por el campo nombre.

### Endpoint

URL a la cual un cliente puede acceder.

### Tipos de endpoints

Cuando un cliente accede a ese endpoint se le responde con algún recurso, o interactuar con algún recurso.

El recurso se especifica con la URL, por ejemplo: `http://localhost:3000/alumnos?filtro=aprobados&orden=nombre`.

En el anterior caso se interactúa con el recurso `/alumnos`. Pero con ese recurso se pueden realizar diferentes acciones.

- `GET`: leer (cuando ponemos una URL en nuestro navegador web, siempre hace un acceso `GET`.)
- `POST`: crear
- `DELETE`: borrar
- `PUT`: actualizar / reemplazar (todo el recurso)
- `PATCH`: actualizar / modificar (no todo el recurso, parcialmente)

No podemos saber cómo va a responder un servidor. Aunque le pidamos los alumnos aprobados, quizás nos devuelva la cotización del dólar y prenda un aspersor de un jardín. Como si le preguntamos el nombre a una persona, no sabemos qué puede hacer, pero lo esperable sería que nos diga cómo se llama.

Cuando programamos un servidor, nada nos impide crear un recurso cuando obtenemos un `GET` en nuestro endpoint. Pero si hacemos ese tipo de cosas, los clientes que se conecten con el servidor no van a saber cómo interactuar con él. Al programar un servidor deberíamos tener en cuenta el recurso que se especifica, los parámetros adicionales, y la acción a realizar del recurso.

### [Código de respuesta (status code)](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

Lean la guía que referencio en el enlace del título, es mejor de lo que puedo explicar.

## Práctica

Algunas url con las que pueden interactuar:

- `https://corporatebs-generator.sameerkumar.website`
- `https://yesno.wtf/api?force=maybe`: `force` puede ser `yes`, `no` o `maybe`. Es un parámetro opcional, si se saca la respuesta es aleatoria.
- `http://itsthisforthat.com/api.php?json`: pueden pasar text en vez de json.

### Importar módulo

Tener en cuenta que para el protocolo `https` tenemos que usar el módulo `https`, no varía el uso.

```js
var http = require("http")
var https = require("https")
```

### Crear servidor

```js
var http = require("http")
var URL = require("url")

var host = "127.0.0.1"
var port = 3000

var alumnos = [
  {
    nombre: "norman",
    aprobado: true,
    edad: 25
  },
  {
    nombre: "juan",
    aprobado: false,
    edad: 28
  },
  {
    nombre: "pepe",
    aprobado: true,
    edad: 20
  }
]

var server = http.createServer(function(req, res) {
  if (req.method !== "GET") {
    res.statusCode = 401
    res.end("Error: se esperaba una conexión GET\n")
  }

  var objetoUrl = URL.parse(req.url)
  if (objetoUrl.pathname === "/alumnos") {
    var respuesta = JSON.stringify({ alumnos: alumnos })
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(respuesta)
  } else {
    res.statusCode = 404
    res.end("Error: endpoint no encontrado\n")
  }
})

server.listen(port, host, function() {
  console.log(`Servidor escuchando en http://${host}:${port}/`)
})
```

### Pedir recurso

```js
var http = require("http")

var url = process.argv[2]

var conexion = http.get(url, function(response) {
  var data = ""

  response.setEncoding("utf8")
  response.on("data", function(bloque) {
    data += bloque
  })
  response.on("end", function() {
    console.log(`Respuesta: ${data}\n`)
    var json = JSON.parse(data)
    console.log(`Atributos: ${Object.keys(json)}\n`)
    console.log(`Valores: ${Object.values(json)}\n`)
  })
})

conexion.on("error", function(error) {
  console.error(error)
})
```
