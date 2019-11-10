# async / await

Mucho de lo que hacemos en JavaScript es asincrónico.

Pedimos recursos de afuera como datos (json), imágenes, videos, documentos html, etc. y todo eso tiene un tiempo de respuesta.

Puede que nuestro internet no sea bueno y tarde mucho, o los datos a transmitir sean muchos.

Por eso es que cuando realizamos alguno de estos pedidos que pueden tardar, JavaScript nos deja seguir con otras cosas mientras se resuelve ese pedido.

Inicialmente JavaScript nos permitió manejar el asincronismo a través de "callbacks", estos callbacks son funciones que le le damos a nuestra operación asincrónica para que la ejecute una vez resuelta. Por ejemplo, con `setTimeout`:

```js
function callback() {
  console.log("pasaron 3 segundos")
}

setTimeout(callback, 3000)
```

Una vez pasado los 3 segundos, se va a ejecutar la función `callback`. Lo mismo podría pasar con algún pedido que pueda tardar algo de tiempo.

## Promesas

Otra forma que tiene JavaScript de manejar ese asincronismo es a través de "promesas". Las promesas son como los callbacks, pero con otra "interfaz" o forma de interactuar.

Para cada función que nos devuelva una promesa, vamos a poder especificar que se ejecute de manera "sincrónica", o sea paso a paso, como veníamos haciendo con otras operaciones. Esta forma de manejarse puede ser más sencilla que con callbacks, ya que podemos ver fácilmente el orden de ejecución de nuestro código:

```js
var fetch = require('node-fetch')

async function get() {
  var respuesta = await fetch('https://emoji-aleatorio.herokuapp.com/emoji')
  var json = await respuesta.json()
  console.log(json)
}

get()
```

Podemos esperar a que se cumpla la promesa, con la palabra reservada `await`, la cual significa algo como "esperá". Espera a que se cumpla la promesa, y su resultado se retorna.

Tenemos que saber qué funciones devuelven una promesa. En el caso anterior las funciones `fetch` y `json` pueden tardar en resolverse, por lo tanto devuelven una promesa.

Por último, algo importante al usar `await`, es que tiene que estar, sí o sí, contenida en una función que tenga la palabra `async` al empezar su declaración.

## Manejo de errores

Las promesas pueden fallar. Para manejar errores hay que encerrar todo lo que tenga `await` en un `try`/`catch`:

```js
var fetch = require('node-fetch')

async function get() {
  try {
    var respuesta = await fetch('https://emoji-aleatorio.herokuapp.com/emoji')
    var json = await respuesta.json()
    console.log(json)
  } catch (error) {
    console.log('Hubo un error...')
    console.log(error)
  }
}

get()
```

Básicamente como funciona un `try`/`catch`, es que intenta (try) ejecutar el primer bloque de código que se le pasa, en caso de no lograrlo entra al segundo bloque de código.

Pueden probar de forzar el error cambiando la url.

## Bonus

Si quieren crear sus funciones que devuelvan promesas, pueden usar el Objeto `Promise`.

```js
var fs = require('fs')
var ruta = process.argv[2]

function leerArchivo() {
  // cuando se crea una promesa, le tenemos que pasar una función
  // que recibe como primer parámetro una función a ejecutar cuando todo salga bien,
  // y como segundo parámetro una función que la ejecutamos cuando algo haya salido mal.
  var promesa = new Promise(function (resolver, rechazar) {
    // que bueno que tenemos la función `readFileSync` no?
    fs.readFile(ruta, 'utf-8', function (error, data) {
      if (error) {
        return rechazar(error)
      }
      return resolver(data)
    })
  })
  return promesa
}

async function ejecutar() {
  try {
    var contenido = await leerArchivo()
    console.log(contenido)
  } catch (error) {
    console.log('Parece que hubo un error...')
    console.log(error)
  }
}

ejecutar()
```
