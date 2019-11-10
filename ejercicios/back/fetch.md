# Fetch

Para los siguientes ejercicios vamos a usar el módulo `node-fetch`, el cual deben descargarse con `npm`. Si no sabés de lo que hablo podés pasar por [esta guía](/apuntes/back/module.md) primero.

Además pueden ver [cómo usar `node-fetch`](/apuntes/back/node-fetch.md) una vez que hayan logrado instalar e importar el módulo.

## Empezando con GETs 

1. Hacer un programa que obtenga una URL por parámetro cuando se ejecute, y muestre por consola la respuesta en forma de texto.
2. Mismo que antes, pero en vez de texto, que muestre por consola la respuesta en forma de JSON.
3. Mismo que antes, pero que muestre el atributo `emoji` de la respuesta. Usar esta URL para asegurarse que la respuesta tenga ese atributo: `https://emoji-aleatorio.herokuapp.com/emoji`.
4. Hacer un programa que obtenga una URL de una página, como `https://nperrin.io`, y guarda la respuesta en un archivo llamado `salida.html`.

## Usando headers

1. Hacer lo mismo que el ejercicio 2, solo que ahora se agrega el header `Accept: text/plain` a la consulta, y mostrar por consola el texto entrante. Con la URL `https://emoji-aleatorio.herokuapp.com/emoji`.
2. Mismo que el anterior ejercicio, solo que ahora con el header `Accept: text/html`, y guardarlo en un archivo `salida.html`. Con la URL `https://emoji-aleatorio.herokuapp.com/emoji`.

## Autentificacion

Para este ejercicio vamos a usar un endpoint que requiere autentificación.

Para poder autentificarse, deben ingresar a `https://autentificarse-tranqi.herokuapp.com/registrar?nombre=[tu nombre]` reemplazando `[tu nombre]` por tu nombre... pueden poner espacios si quieren.

Como respuesta obtendrán un "token" o código, con el cual van a poder autentificarse, pero solo por 10 segundos, así que inmediatamente van a tener que acceder a la siguiente ruta: `https://autentificarse-tranqi.herokuapp.com/acceder?token=[tu token]`.

La respuesta les dirá si pudieron completar o no el ejercicio.

## Haciendo más que GETs

Para estos ejercicios vamos a interactuar con el endpoint `https://msn-comit.herokuapp.com`.

Para saber cómo interactuar con este endpoint pueden acceder a `https://msn-comit.herokuapp.com/doc` con el header: `Pastafrola: membrillo`. Les recomiendo guardarse la respuesta en un archivo, así pueden consultarlo con facilidad.

Siguiendo la documentación:

1. Registrarse.
2. Subir un mensaje.
3. Ver sus mensajes.
4. Actualizar un mensaje.
