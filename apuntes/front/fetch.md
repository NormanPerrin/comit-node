# Fetch

La forma que tenemos desde el frontend, o nuestra página, de comunicarnos con otros servidores.

Y la sintaxis o interfaz, afortunadamente, es la misma que la que se usa en `node-fetch` desde el backend.

## GET simple

_index.html_

```html
<script>
var url_feriados = 'https://nolaborables.com.ar/api/v2/feriados/2019'

async function obtener_feriados_nacionales() {
    var respuesta = await fetch(url_feriados)

    // ya se de antemano que me viene una respuesta tipo JSON.
    var contenido = await respuesta.json()

    document.querySelector('body').innerHTML = contenido
}

obtener_feriados_nacionales()
</script>
```

Este padecito de JavaScript lo único que hace es hacer un GET a la url `url_feriados` y "volcar" el texto que recibe en el `body`. Sin usar etiquetas ni nada. Lo cual lo hace un poco feo a la vista.

Vamos a mejorarlo

## GET y HTML

Primero, para saber cómo mostrar la información en forma de HTML, deberíamos ver la estructura de la información que nos llega.

Lo podemos hacer desde la pestaña "Network" o "Red" en las herramientas de desarrollador. Re-cargando la página y viendo la respuesta que nos da.

Al ver el tipo de respuesta que nos da, identificamos que es un Array de objetos, cada objeto tiene los atributos `motivo`, `tipo`, `dia`, `mes` y `id`.

Podríamos hacer una tabla o lista para mostrar cada feriado. Se pueden usar las etiquetas `table` y relacionadas, o `divs`, o `ul`, ... Pero vamos a usar tablas ya que esos elementos HTML tienen algunas funciones que nos van a ayudar a agregar elementos dinámicamente.

_index.html_

```html
<table>
    <tr>
        <th>Motivo</th>
        <th>Tipo</th>
        <th>Día</th>
        <th>Mes</th>
        <th>Id</th>
    </tr>
</table>

<script>
var url_feriados = 'https://nolaborables.com.ar/api/v2/feriados/2019'
var tabla = document.querySelector('table')

async function obtener_feriados_nacionales() {
    var respuesta = await fetch(url_feriados)

    // ya se de antemano que me viene una respuesta tipo JSON.
    var contenido = await respuesta.json()

    crear_tabla(contenido)
}

function crear_tabla(feriados) {
    // el `forEach` actúa sobre un Array,
    // ejecutando la función que le pasamos por cada elemento de la lista.
    feriados.forEach(function (feriado) {
        // crear fila
        var fila = tabla.insertRow()
        
        // le agrego una celda a la fila, y le cambio su texto
        fila.insertCell().textContent = feriado.motivo
        fila.insertCell().textContent = feriado.tipo
        fila.insertCell().textContent = feriado.dia
        fila.insertCell().textContent = feriado.mes
        fila.insertCell().textContent = feriado.id
    })
}

obtener_feriados_nacionales()
</script>
```

Excelente!

Ahora tenemos una tablita HTML con la lista de feriados, quedaría darle algo de estilos para que se vea bonito.

A tener en cuenta. Algunos elementos HTML tienen atributos específicos, como `insertRow` (insertar fila), o `insertCell` (insertar celda), las cuales usamos para ayudarnos en llenar la tabla.

## Headers

Para pasar headers en nuestra consulta o conexión, lo hacemos como con `node-fetch` nuevamente.

_index.html_

```html
<div class="contenido"></div>

<script>
    var url = 'https://msn-comit.herokuapp.com/doc'

    async function obtener_pagina() {
        var respuesta = await fetch(url)
        var contenido = await respuesta.text()

        document.querySelector('.contenido').innerHTML = contenido
    }

    obtener_pagina()
</script>
```

Puede que tengamos un error de este estilo:

```
Access to fetch at 'https://msn-comit.herokuapp.com/doc' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Por temas de seguridad, no se pueden hacer consultas desde diferentes dominios, `localhost` o tu sistema de archivos hacia `msn-comit.herokuapp.com`, por defecto. Va a depender de cómo esté programado el servidor si nos autoriza una respuesta o no.

Para saber qué tienen que hacer del lado del servidor, les recomiendo [leer este apunte sobre CORS](/apuntes/back/cors.md).

En el caso del servidor que yo subí, no deberían tener problemas 👀

Aunque si no le pasamos un header para el endpoint `/doc`, nos va a dar un error:

```
Error: header "pastafrola" no encontrado
```

Este es un error que programé que muestre el servidor al no pasar el header `pastafrola`, el cual debe recibir el valor de `membrillo`, y ningún otro.

_index.html_

```html
<style>
    .contenido {
        max-width: 400px;
        margin: auto;
        padding: 15px;
        border: 2px solid #333;
        background-color: aliceblue;
    }
</style>

<p>La página que se renderiza es <code>https://msn-comit.herokuapp.com/doc</code></p>

<div class="contenido"></div>

<script>
    var url = 'https://msn-comit.herokuapp.com/doc'

    async function obtener_pagina() {
        var respuesta = await fetch(url, {
            headers: {
                pastafrola: 'membrillo'
            }
        })
        var contenido = await respuesta.text()

        document.querySelector('.contenido').innerHTML = contenido
    }

    obtener_pagina()
</script>
```

Le agregué algunos estilos para que vea lindo, y más importante, que se entienda que se estoy cargando el HTML que me devuelve en endpoint `/doc` adentro del elemento con clase `contenido`.

## Más que GETs

Seguimos haciéndo las cosas como con `node-fetch`.

Para especificar un método, usamos el atributo `methods` del parámetro de configuración del `fetch`.

```html
<button onclick="postear()">POSTear</button>

<script>
var url = 'http://localhost:3000/mensajes'

async function postear() {
    var respuesta = await fetch(url, {
        method: 'POST',
        headers: {
            // este token lo saqué de haberme logueado antes.
            // para más info de cómo intactuar con esa url, pueden leer
            // https://msn-comit.herokuapp.com/doc, pasándole el header `pastafrola: 'membrillo'`
            token: '82bc4d81d2f1f786c63c'
        }
        body: 'Hola mundo'
    })
    var contenido = await respuesta.text()
    alert(contenido)
}
</script>
```

## Siguientes pasos

Para practicar lo recién visto, les recomiendo la práctica de [`fetch` del lado del frontend](/ejercicios/front/fetch.md)
