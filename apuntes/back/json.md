# JSON

JavaScript Object Notation

Es una extensión de archivo. Tiene una sintaxis muy parecida a lo que son los objetos en JavaScript, solo que los nombres de los atributos se escriben entre comillas dobles, y no se pueden definir funciones.

Por ejemplo, para el archivo `persona.json`:

```json
{
	"nombre": "Norman",
	"apellido": "Perrin",
	"edad": 25,
	"pelado": false,
	"amigo": {
		"nombre": "juan"
	}
}
```

Sus atributos pueden ser de tipo:

- texto
- número
- booleano
- objeto

Y su utilidad está en que se integra con NodeJS de una forma muy fácil. Se suele usar para definir archivos de configuración.

Se pueden importar y usar estos archivos en NodeJS de esta forma muy simple.

## Importando

```js
var persona = require('./persona.json')

console.log(persona.nombre) //> "Norman"
console.log(persona.amigo.nombre) //> "Juan"
```

## Transformar string a objeto

Esta es una función muy útil cuando estamos leyendo información de un archivo u obtenemos una respuesta de una conexión con un servidor.

```js
var fs = require('fs')

// pueden probar de crearse un archivo `persona.json` para ejecutar la sentencia de abajo.
// ponerle un JSON como contenido, con atributo nombre.
var json = fs.readFileSync('./persona.json', 'utf-8')
// si no es un archivo con sintaxis JSON, va a dar un error la sentencia de abajo
var persona = JSON.parse(json)

console.log(persona.nombre)
```

## Transformar objeto a string

Esta es una función muy útil cuando escribimos archivos, o cuando tenemos que responder a una conexión cuando programamos servidores.

```js
var personaObjeto = {
	nombre: "norman",
	edad: 25,
	amigo: {
		nombre: "camila"
	}
}

// ahora personaJson es un texto
var personaJson = JSON.stringify(personaObjecto)

console.log(personaJSON) //> '{"nombre":"norman","edad":25,"amigo":{"nombre":"camila"}}'
```