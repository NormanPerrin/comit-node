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

Si quieren saber más acerca de esta función les recomiendo leer la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace).
