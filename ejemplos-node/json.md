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

```js
var persona = require('./persona.json')

console.log(persona.nombre) //> "Norman"
console.log(persona.amigo.nombre) //> "Juan"
```
