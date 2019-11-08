# Repaso gral de NodeJS

1. Crear un programa que cuando se ejecute, obtenga el nombre que se le pasa por parámetro y muestre por consola el mensaje "Hola [nombre]" reemplazando `[nombre]` por el que obtenga como primer parámetro.
2. Crear un programa que obtenga la edad por parámetro cuando se ejecute, y muestre por consola el mensaje "mayor" si la edad ingresada es `>18` o menor en el caso contrario.
3. Crear un programa que obtenga un nombre por parámetro y cree una carpeta con ese nombre.
4. Crear el programa "slug.js" que reciba un texto como parámetro y reemplace del texto todos los:
	- espacios por guiones medios (`"el profesor de node"` -> `"el-profesor-de-node"`).
	- mayúsculas por minúsculas (`"NoRmaN" -> `"norman"`).
	- vocales con acéntos por vocales sin acéntos (`"canción"` -> `"cancion"`).

Ayudas:

```js
var texto = "el gato negro es un gato negro"
texto = texto.replace(/gato/g, "perro")

console.log(texto) //> "el perro negro es un perro negro"

var nombre = "Norman"
nombre = nombre.toLowerCase()

console.log(nombre) //> "norman"
```

5. Pasar el programa anterior a un módulo. Ese módulo debería definir la función "slug" y exportarla. La función ahora tomará el texto como parámetro de la función, y no como parámetro de ejecución del programa. Para probar que funcione, importarla desde otro archivo y ejecutarla.
6. Crear un programa que al ser ejecutado obtenga un nombre como parámetro de ejecución del programa. El programa debe crear una carpeta con nombre igual al que haya obtenido por parámetro, **PERO**, el nombre se va a modificar aplicándosele la función "slug", que deberá ser importada del módulo creado anteriormente.
