# Node fetch

Antes de empezar con este apunte, les recomiendo leer sobre el manejo de [`async`/`await`](/apuntes/js/async-await.md).

El módulo [`node-fetch`](https://www.npmjs.com/package/node-fetch) nos permite hacer consultas o "requests" más fácil que con `http.get`, usando **promesas** sobre **callbacks**, permitiendo tener un mejor siguimiento de la ejecución de nuestro código.

Primero debemos bajar este módulo con `npm i node-fetch` y luego importarlo en donde queramos usarlo.

## GET

Tan simple como:

```js
var fetch = require('node-fetch')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function get() {
  var respuesta = await fetch(url)
  var json = await respuesta.json()
  console.log(json.emoji)
}

get()
```

## Headers

Los headers nos permitían definirle información extra a nuestras conexiones, como el tipo de contenido que aceptamos como respuesta:

```js
var fetch = require('node-fetch')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function get() {
  var respuesta = await fetch(url, {
    headers: {
      Accept: 'text/plain'
    }
  }
  var texto = await respuesta.text()
  console.log(texto)
}

get()
```

Aunque pasarle esta información extra no nos garantiza que el servidor las va a tener en cuenta. Eso va a depender cómo esté programado el servidor. Por lo general todas las respuestas son del tipo `application/json`, pero no podemos estar seguros. Incluso ustedes pueden pasarle el header que quieran.

```js
var fetch = require('node-fetch')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function get() {
  var respuesta = await fetch(url, {
    headers: {
      Accept: 'text/plain',
      AlgoLoco: 'blah blah blah'
    }
  }
  var texto = await respuesta.text()
  console.log(texto)
}

get()
```

Y puede que el servidor lea el header `AlgoLoco` y lo use de alguna forma, pero eso va a depender de cómo el servidor implemente sus comunicaciones.

Y si queremos escribir un header con guiones medios, como `Mi-Nombre`, necesitamos encerrarlo entre comillas, ya que sino va a dar un error de sintaxis:

```js
var fetch = require('node-fetch')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function get() {
  var respuesta = await fetch(url, {
    headers: {
      Accept: 'text/plain',
      'Mi-Nombre': 'Norman'
    }
  }
  var texto = await respuesta.text()
  console.log(texto)
}

get()
```

## Recibiendo información

Cuando recibimos una respuesta de una conexión, quizás nos responde con información, esa información va a ser texto, pero la podemos encontrar en diferentes formatos (JSON, HTML, texto plano), por lo tanto nos tenemos que fijar cuál es el formato de la respuesta. Para eso podemos fijarnos el header `Content-Type` con el cual nos respondió la conexión. Este header indica el formato de respuesta:

```js
var fetch = require('node-fetch')
var url = 'https://emoji-aleatorio.herokuapp.com/emoji'

async function get() {
  var respuesta = await fetch(url)
  var header = respuesta.headers.get('content-type')

  if (header === 'application/json') {
    var json = await respuesta.json()
    console.log(json)
  } else {
    var texto = await respuesta.text()
    console.log(texto)
  }
}

get()
```

## POST, DELETE, PATCH, etc

El método de conexión es `GET` por defecto, cuando no se indica en la función `fetch`, pero si queremos indicar que la conexión es de otro tipo, le tenemos que especificar el atributo `method` al objeto del segundo parámetro de `fetch`:

```js
var fetch = require('node-fetch')
var url = 'https://mas-que-get.herokuapp.com/'

async function post() {
  var datos = JSON.stringify({ nombre: 'Norman' })
  var respuesta = await fetch(url, {
    method: 'POST'
    headers: {
      'Content-Type': 'application/json'
    }
    body: datos
  }
  var texto = await respuesta.text()
  console.log(texto)
}

post()
```

Aparecieron algunas otras cosas...

### method

Por un lado indicados con `method: 'POST'` la acción que queremos realizar.

## Content-Type

Por otro lado tenemos un nuevo header, el `'Content-Type': 'application/json'` el cual indica el tipo de contenido que va a enviar.

### body

Cuando establecemos conexiones, no solo enviamos como información la URL a la que nos conectamos y los headers, sino que también podemos enviar un "cuerpo" o datos dentro de la misma. Nos es útil cuando queremos resguardar la información que transmitimos, ya que va a viajar de forma encriptada si es por https. Suele usarse cuando se envian formularios desde una página web por ejemplo. Este "cuerpo" se especifica con el atributo `body`, y como valor recibe un texto. Como no puede ser un objeto, si quiero transmitir un objeto, uso `JSON.stringify` para transformar ese objeto a texto. También le especifico que estoy transmitiendo un JSON con el header que mencioné antes.
