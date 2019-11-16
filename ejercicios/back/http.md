# HTTP

Pueden ayudarse con el [apunte de httpp](/apuntes/back/http.md).

## Básicos

1. Crear un programa que inicialice un servidor en el puerto `3000`, el mismo debe responder ante el endpoint `/hola` con el texto "mundo".
2. Como el ejercicio anterior, solo que ahora debe responder con un JSON `{ "respuesta": "mundo" }`. Usar la función `JSON.stringify(objeto)` para enviar la respuesta como texto.
3. Crear un programa que inicialice un servidor en el puerto `3000`, el mismo debe responder ante el endpoint `/emoji` con un emoji aleatorio en un JSON de esta forma `{ "emoji": "💣" }`. Para este ejercicio van a recibir una pequeña ayuda, la función para obtener un emoji aleatorio es la siguiente:

```js
function obtenerEmoji(indice) {
    var emojis = ["😀", "😳", "😄", "😁", "😆", "😅", "😂", "😴", "🤭️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🤤", "😙", "😚", "😋", "😛", "😝", "😜", "😎", "🤓", "🥳", "🤯", "😡", "😱", "🥺", "😏"]
    if (!indice) {
        var random = Math.floor(Math.random() * 33)
        return emojis[random]
    }
    return emojis[indice]
}

var emoji = obtenerEmoji()
```

## Parámetros

4. Como el ejercicio anterior, pero ahora el endpoint recibe un parámetro opcional `indice`, si este parámetro está definido, se le pasa el índice a la función emoji, de esa forma devuelve el emoji del índice indicado, sino, sigue funcionando como antes.

## Headers

Llegado este punto, recomiendo que se descarguen [postman](https://www.getpostman.com/downloads/) para poder probar sus servidores de una forma más rápida que usando `node-fetch`.

5. Siguiendo con el ejercicio anterior, ahora queremos que según el header que nos llegue de la conexión llamado `accept`, el cual puede ser `text/plain`, `text/html` o `application/json`, responder con el formato adecuado y agregando como header de respuesta `'Content-Type': 'text/plain'`, poniendo el tipo de contenido adecuado. Las respuestas podrán ser las siguientes:

- `'{"emoji": "[emoji aleatorio]"}'` para `application/json`.
- `'[emoji aleatorio]'` para `text/plain`.
- `'<h1 style="text-align:center;">[emoji aleatorio]</h1>'` para `text/html`.

Si no se especifica el header `accept`, se deberá responder con `application/json`.

## Más que GETs

6. Siguiendo nuevamente con lo anterior, pero ahora vamos a aceptar el método `POST` a nuestro endpoint `/emoji`. Cuando obtengamos un `POST` tendremos que agregar a la lista de emojis el que nos hayan pasado en el `body` de la conexión.

El servidor deberá seguir funcionando como antes para los métodos `GET` a `/emoji`.

No se olviden de responderle algo aunque les hagan `POST`.

### Aclaración importante

Ahora se está declarando la lista de emojis en la función `obtenerEmoji`. Para que se pueda acceder globalmente la variable `emojis`, la misma deberá ser declarada afuera de la función, y es la variable que luego se va a tener que usar.

Para agregar un emoji pueden usar la función `push` de Arrays.

```js
var colores = ['rojo', 'amarillo']

colores.push('azul')

console.log() //> ['rojo', 'amarillo', 'azul']
```
