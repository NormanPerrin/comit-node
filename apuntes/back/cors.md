# CORS 🚔

Esa sensación cuando solo quieren hacer un maldito `fetch` pero les sale error de CORS...

![desesperación](/recursos/desesperacion.jpeg)

Hay una [buena explicación de MDN sobre CORS acá](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)

> El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent (navegador web) obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece. Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, un protocolo o un puerto diferente al del documento que lo generó.

Básicamente, cuando hacen consultas o conexiones http entre dominios diferentes, como `localhost:3000` y `comit-node.herokuapp.com`, el servidor que recibe la conexión va a autorizar o no la conexión entrante.

## Deshabilitando CORS

Si se fijan en la pestaña de "Network" o "Red" desde las herramientas de desarrolladores. Cuando se hace un pedido http desde `fetch`, por defecto se hace teniendo en cuenta CORS.

Primero se hace un request de método `OPTIONS`, al cual el servidor contesta con información sobre los métodos, headers y orígenes (dominios) que acepta.

El código del programa que se ejecuta desde el navegador es el siguiente:

```html
<button onclick="obtener_doc()">buscar doc</button>

<script>
    var url = 'http://localhost:3000/doc'

    async function obtener_doc() {
        var respuesta = await fetch(url, {
            headers: {
                pastafrola: 'membrillo'
            }
        })
        var contenido = await respuesta.text()
        console.log(contenido)
    }
</script>
```

El servidor es el mismo que `msn-comit.herokuapp.com` pero lo tengo ejecutándose localmente.

Y me da el siguiente error ahora:

![error CORS `console`](/recursos/cors-error-console.png)

Una solución rápida sería podría ser de usar `mode: 'no-cors'`.

_No tan rápido muchacho_

El uso de `mode: 'no-cors'` no viene sin consecuencias. Solo permite algunos métodos, con algunos headers y algunos valores de headers. Pueden ver más detalles de lo que [permite acá](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS#solicitudes%20simples).

El header `pastafrola: 'membrillo'` llega vacío al servidor, ya que no es un header permitido en modo `no-cors`.

Entonces...

## Autorizando desde el servidor

El servidor como está programado ahora no responde ante el método `OPTIONS`, ni autoriza una consulta de origen diferente al mismo dominio.

### Respondiendo a OPTIONS

Antes de hacer un `fetch` se hace una consulta con método `OPTIONS`, la misma debe ser manejada.

```js
if (consulta.method === 'OPTIONS') {
    // se acepta cualquier origen
    respuesta.setHeader('Access-Control-Allow-Origin', '*')

    // se aceptan los headers "pastafrola" y "token"
    respuesta.setHeader('Access-Control-Allow-Headers', 'pastafrola, token')

    // se aceptan los métodos "GET", "PATCH", "POST" y "OPTIONS"
    respuesta.setHeader('Allow', 'GET, PATCH, POST, OPTIONS')

    // termino la consulta
    return respuesta.end('')
}
```

Ahora la consulta a `OPTIONS` que se hace automáticamente desde el navegador se responde bien, pero además hay que especificar el header `Access-Control-Allow-Origin` para cada respuesta que demos.

### Antes de responder a cualquier consulta

Antes de responder con la información que se solicitó, se debe agregar el header `Access-Control-Allow-Origin` con el valor `*`, que indica que se aceptan todos los orígenes.

```js
respuesta.setHeader('Access-Control-Allow-Origin', '*')
respuesta.end('información que me pidieron')
```

Ahora a la consulta del frontend (página) puedo sacarle el `mode: 'no-cors'`. Y la consulta se va a hacer bien! 🎉

```html
<button onclick="obtener_doc()">buscar doc</button>

<script>
    var url = 'http://localhost:3000/doc'

    async function obtener_doc() {
        var respuesta = await fetch(url, {
            headers: {
                pastafrola: 'membrillo'
            }
        })
        var contenido = await respuesta.text()
        console.log(contenido)
    }
</script>
```

![cors bien console](/recursos/cors-bien-console.png)
