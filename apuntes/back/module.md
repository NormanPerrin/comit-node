# Module

NodeJS se maneja con módulos para reutilizar compartirse funcionalidades.

Hay diferentes tipos de módulos

1. Locales: los que definimos nosotros.
2. Nativos: los que ya vienen definidos por NodeJS, como `fs` o `http`.
3. Externos: los que nos podemos descargar con el manejador de paquetes `npm` de internet.

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

```
