# Replace

`replace` es una función que se puede aplicar a strings.

La misma reemplaza la aparición de algún texto que le pasamos (1er parámetro), por el reemplazo que le definimos (2do parámetro).

Ejemplos:

```js
var nombre = "norman"
var otroNombre = nombre.replace("n", "N")
console.log(otroNombre) //> Norman
```

```js
var titulo = "<body><h1>@titulo@</h1></body>"
var nuevoTitulo = titulo.replace("@titulo@", "norman")
console.log(nuevoTitulo) //> "<body><h1>norman</h1></body>"
```

Pero cómo hacemos para reemplazar todas las apariciones que encuentre?

Lo mismo que antes, pero cambiando un poco la sintaxis:

```js
var frase = "el gato negro sentado al lado del gato gris"

frase = frase.replace(/gato/g, "perro")

console.log(frase) //> "el perro negro sentado al lado del perro gris"
```

Es importante siempre respetar la sintaxis.

Para que no parezca mágico, esa "g" hace referencia a que reemplace las apariciones de manera "global", en todo el texto, no solo el primero.

Y como está entre barras, es una [expresión regular](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions) la cual nos permite definir patrones de búsqueda más complejos que un simple texto. Por eso es que no se pone entre comillas.

Si quieren saber más acerca de esta función les recomiendo leer la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace).
