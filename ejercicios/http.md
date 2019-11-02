# HTTP

1. Crear un programa que haga un http GET al endpoint `http://itsthisforthat.com/api.php?json` y mostrar la respuesta en consola.
2. Como el ejercicio anterior, solo que ahora debe mostrar el valor del atributo `this` en consola.
3. Crear un programa que inicialice un servidor en el puerto `3000`, el mismo debe responder ante el endpoint `/hola` con el texto "mundo".
4. Como el ejercicio anterior, solo que ahora debe responder con un JSON `{ "respuesta": "mundo" }`. Usar la función `JSON.stringify(objeto)` para enviar la respuesta como texto.
5. Crear un programa que inicialice un servidor en el puerto `3000`, el mismo debe responder ante el endpoint `/emoji` con un emoji aleatorio en un JSON de esta forma `{ "emoji": "💣" }`. Para este ejercicio van a recibir una pequeña ayuda, la función para obtener un emoji aleatorio es la siguiente:

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

6. Como el ejercicio anterior, pero ahora el endpoint recibe un parámetro opcional `indice`, si este parámetro está definido, se le pasa el índice a la función emoji, de esa forma devuelve el emoji del índice indicado, sino, sigue funcionando como antes.