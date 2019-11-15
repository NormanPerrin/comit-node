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

### Métodos

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

## Servidores

Los servidores son programas que escuchan conexiones entrantes y hacen algo como respuesta.

Estas conexiones entrantes pueden llamarse "clientes" del servidor también.

Un servidor se ejecuta en cierta IP y puerto, respondiendo ante comunicaciones o conexiones http. Según el recurso al que se quiera acceder, especificado a través de la URL, y la acción que se indique, especificado a través del método.

## Práctica

Pueden hacer [práctica de servidores acá](/ejercicios/back/http.md) y de [`node-fetch` acá](/ejercicios/back/fetch.md).

### Importar módulo

Tener en cuenta que para el protocolo `https` tenemos que usar el módulo `https`, no varía el uso.

```js
var http = require("http")
var https = require("https")
```

### Servidor básico

- `consulta.url`: texto con la url que pide la conexión. Ej: "/", "/alumnos", ...
- `consulta.method`: texto con el método de la conexión. Ej: "GET", "POST", ...

- `respuesta.end("respuesta")`: terminar conexión mandándole un mensaje.

```js
var http = require("http")
var puerto = 3000

var servidor = http.createServer(function (consulta, respuesta) {
  // si es igual a la página de inicio
  if (consulta.url === '/') {
    respuesta.end('hola que tal')
  } else {
    respuesta.end('ruta no encontrada :(')
  }
})

servidor.listen(puerto, function () {
  console.log(`servidor escuchando en el puerto ${puerto}`)
})
```

### Servidor mediano

- `respuesta.setHeader('Content-Type', 'application/json')`: con `setHeader` puedo agregar cabeceras o headers a las respuestas del servidor. En este caso se agrega el header `Content-Type` que hace referencia al tipo de respuesta que se da, se envía la respuesta en formato JSON (aunque siempre como texto). Para ver los diferentes tipos de contenido que pueden poner, tienen una [explicación](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types) y una [lista incompleta](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME).
- `respuesta.statusCode = 404`: poner código de respuesta.

```js
var http = require("http")
var puerto = 3000

var servidor = http.createServer(function (consulta, respuesta) {
  if (consulta.url === '/' && consulta.method === 'GET') {
    respuesta.setHeader('Content-Type', 'application/json')
    var texto_a_responder = JSON.stringify({ respuesta: "hola que tal" })
    respuesta.end(texto_a_responder)
  } else {
    respuesta.statusCode = 404
    respuesta.end('ruta no encontrada :(')
  }
})

servidor.listen(puerto, function () {
  console.log(`servidor escuchando en el puerto ${puerto}`)
})
```

### Servidor avanzado

- `consulta.headers.accept`: acceder a headers que envíe la conexión entrante. En este caso el header `accept` indica

Para acceder a los parámetros de la URL:

```js
var objetoUrl = url.parse(consulta.url)
var busqueda = new url.URLSearchParams(objetoUrl.query)
var tipo_de_respuesta = busqueda.get('tipo')
```

En ese caso, se obtiene el parámetro `tipo` de la URL. Una URL con ese parámetro podría ser: `/inicio?tipo=despedida&otra_cosa=nose`

```js
var http = require("http")
var url = require("url")
var puerto = 3000

var servidor = http.createServer(function (consulta, respuesta) {
  var objetoUrl = url.parse(consulta.url)
  var busqueda = new url.URLSearchParams(objetoUrl.query)

  if (consulta.url === '/' && consulta.method === 'GET') {
    if (consulta.headers.accept === 'application/json') {
      respuesta.setHeader('Content-Type', 'application/json')
      var tipo_de_respuesta = busqueda.get('tipo')
      if (tipo_de_respuesta === 'despedida') {
        var texto_a_responder = JSON.stringify({ respuesta: "chau nos vemos" })
        respuesta.end(texto_a_responder)
      } else {
        var texto_a_responder = JSON.stringify({ respuesta: "hola que tal" })
        respuesta.end(texto_a_responder)
      }
    } else {
      respuesta.end('hola que tal')
    }
  } else {
    respuesta.statusCode = 404
    respuesta.end('ruta no encontrada :(')
  }
})

servidor.listen(puerto, function () {
  console.log(`servidor escuchando en el puerto ${puerto}`)
})
```

### Servidor que recibe un `body`

Los métodos a los que se les suele pasar un `body` son `POST` y `PATCH`.

```js
var http = require("http")
var puerto = 3000

var personas = [
  { nombre: 'norman', edad: 25 },
  { nombre: 'pepito', edad: 80 }
]

var servidor = http.createServer(function (consulta, respuesta) {
  if (consulta.url === '/personas') {
    respuesta.setHeader('Content-Type', 'application/json')
    if (consulta.method === 'GET') {
      respuesta.end(JSON.stringify({ personas: personas }))
    } else if (consulta.method === 'POST') {
      var data = ''
      consulta.on('data', function (bloque_de_texto) {
        data += bloque_de_texto
      })
      consulta.on('end', function () {
        // lo contrario que JSON.stringify,
	// transformo texto a un objeto
        var persona_nueva = JSON.parse(data)
        personas.push(persona_nueva)
	respuesta.end('{"resultado": "éxito!"}')
      }
    } else {
      respuesta.statusCode = 404
      respuesta.end('ruta no encontrada :(')
    }
  } else {
    respuesta.statusCode = 404
    respuesta.end('ruta no encontrada :(')
  }
})

servidor.listen(puerto, function () {
  console.log(`servidor escuchando en el puerto ${puerto}`)
})
```

## Hacer consulta

Para hacer una consulta a un servidor, o una conexión, ahora como "cliente" de un servidor, podemos usar el módulo [`node-fetch`](/apuntes/back/node-fetch.md)
