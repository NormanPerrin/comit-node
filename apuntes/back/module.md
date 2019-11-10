# Module

NodeJS se maneja con módulos para reutilizar compartirse funcionalidades.

Hay diferentes tipos de módulos

1. [Locales](1.%20Locales): los que definimos nosotros.
2. [Nativos](2.%20Nativos): los que ya vienen definidos por NodeJS, como `fs` o `http`.
3. [Externos](3.%20Externos): los que nos podemos descargar con el manejador de paquetes `npm` de internet.

Para exportar valores desde un módulo (o archivo), tenemos que acceder al atributo `exports` del objeto `module` y asignarle el valor que queramos exportar.

```js
var nombre = "norman"

module.exports = nombre
```

## 1. Locales

La gracia de usar módulos locales es para reutilizar funciones en diferentes lugares, haciendo nuestros archivos (o módulos) más chicos, y por lo tanto, más legibles y mantenibles.

Veamos un ejemplo.

Teniendo la siguiente estructura de archivos:

```
proyecto/
    |_ index.js
    |_ funciones
        |_ sumar.js
	|_ restar.js
	|_ multiplicar.js
```

El `index.js` (o `main.js`, o `app.js`) que está inmediatamente contenido en la carpeta `proyecto`, suele ser el archivo principal. Este mismo va a ser el que se ejecute con el programa `node`.

Los demás archivos van a exportar funcionalidades.

El contenido de un archivo que exporta funcionalidad es el siguiente:

_funciones/sumar.js_

```js
function sumar(n1, n2) {
  return n1 + n2
}

module.exports = sumar
```

_funciones/restar.js_

```js
function restar(n1, n2) {
  return n1 - n2
}

module.exports = restar
```

_funciones/multiplicar.js_

```js
function multiplicar(n1, n2) {
  return n1 * n2
}

module.exports = multiplicar
```

Todos estos archivos solo definen y exportan funciones. Estas mismas pueden ser importadas por otros archivos y usadas luego. Si el día de mañana quiero cambiar la funcionalidad de `sumar`, solo tengo que modificar un archivo.

Y ahora cómo las uso?

En este caso las usaría desde el `index.js` solamente, pero podría importarlas donde yo las necesite.

_index.js_

```js
var sumar = require('./funciones/sumar')
var restar = require('./funciones/restar')
var multiplicar = require('./funciones/multiplicar')

var numero1 = process.argv[2]
var numero2 = process.argv[3]

console.log(`La suma es: ${sumar(numero1, numero2)}`)
console.log(`La resta es: ${restar(numero1, numero2)}`)
console.log(`La multiplicación es: ${multiplicar(numero1, numero2)}`)
```

Y tengo que hacer un `require` por cada módulo?

Bueno, hay un truquito, podrían definir un `index.js` adentro de `funciones/`, importar esas funciones y exportarlas todas agrupadas en un objeto:

_funciones/index.js_

```js
var sumar = require('./funciones/sumar')
var restar = require('./funciones/restar')
var multiplicar = require('./funciones/multiplicar')ar 

module.exports = {
  sumar: sumar,
  restar: restar,
  multiplicar: multiplicar
}
```

Y ahora para usarlo desde el `index.js`

_index.js_

```js
var funciones = require('./funciones/index')

var numero1 = process.argv[2]
var numero2 = process.argv[3]

console.log(`La suma es: ${funciones.sumar(numero1, numero2)}`)
console.log(`La resta es: ${funciones.restar(numero1, numero2)}`)
console.log(`La multiplicación es: ${funciones.multiplicar(numero1, numero2)}`)
```

De esta forma solo tengo que hacer 1 `require`, ya que se exporta un objeto.

## 2. Nativos

Los módulos nativos los requerimos cuando queremos aumentar las funcionalidades que nos vienen por defecto en NodeJS.

Si queremos manejar archivos y directorios, usamos el módulo `fs`.

Si es algo de conexiones con http, usamos el módulo `http`.

y así con un montón de otros módulos que tiene disponible NodeJS.

Para importar un módulo nativo, lo que cambia es la forma en la que definimos la ruta a importar. Además del detalle de que nosotros no tenemos que exportar nada, sino que ya está definido el módulo, y solo tenemos que importarlo y usarlo.

```js
var fs = require('fs')

fs.writeFileSync('hola.txt', 'mundo')
```

_Si quieren saber más de fs, pueden leer [esta guía sobre fs](/apuntes/back/modulo-fs.md)._

## 3. Externos

Los módulos externos, no vienen definidos de NodeJS, sino que otras personas los definieron y amablemente subieron a internet para el beneficio de otros.

Hay un repositorio en internet que los guarda, a los que nosotros podemos acceder para descargarlos: [npm](https://www.npmjs.com/).

La forma de descargarlos es a través de `npm`. Primero debería explicar un poco esta herramienta.

### npm

_Node Package Manager_

En vez de ir a la página del módulo, descargarnos el archivo e incluirlo localmente, hay una forma más sencilla de hacerlo, a través de esta herramienta.

Primero, tenemos que "inicializar" nuestro proyecto para que pueda descargarse módulos.

En la terminal:

```console
$ npm init -y
Wrote to /Users/usuario/proyecto/package.json:

{
  "name": "proyecto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Esto nos crea un archivo `package.json`, el cual contiene información del proyecto, y más importante, va a listar los módulos que nos descarguemos.

Ahora podemos descargarnos módulos de npm, veamos un ejemplo instalando el módulo `node-fetch`:


```console
$ npm i node-fetch
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN proyecto@1.0.0 No description
npm WARN proyecto@1.0.0 No repository field.

+ node-fetch@2.6.0
added 1 package from 1 contributor and audited 1 package in 1.421s
found 0 vulnerabilities
```

Qué acaba de pasar?

Nos creó una carpeta `node_modules`. La misma va a tener el módulo descargado de internet.

Además nos creó un archivo `package-lock.json`, el cual podemos ignorar por el resto de nuestras vidas.

Por último, si volvemos a ver el `package.json`, ahora tenemos un atributo nuevo `dependencies` que lista el módulo descargado, y su versión.

Una vez descargado lo podemos usar, importándolo como si fuese un módulo nativo:

_index.js_

```js
var fetch = require('node-fetch')
var url = process.argv[2]

async function get() {
  var respuesta = await fetch(url)
  var data = await respuesta.json()
  console.log(data)
}

get()
```

Probamos si funciona

```console
$ node index.js https://emoji-aleatorio.herokuapp.com/emoji
{ emoji: '🤓' }
```

Cuando subamos nuestro código a GitHub, no va a hacer falta subir la carpeta `node_modules`. Al estar listado el módulo en el `package.json`, ya sabemos qué nos tenemos que descargar para que funcione el proyecto.

Así que cuando nos descarguemos un proyecto que tenga un `package.json`, para instalar sus dependencias, vamos a tener que escribir:

```console
$ npm i
npm WARN proyecto@1.0.0 No description
npm WARN proyecto@1.0.0 No repository field.

added 1 package from 1 contributor and audited 1 package in 1.263s
found 0 vulnerabilities
```

Y una vez descargadas las dependencias, vamos a poder ejecutar el programa.
