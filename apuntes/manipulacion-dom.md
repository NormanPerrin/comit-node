# Manipulación DOM

## Usando funciones desde HTML

Lo primero que vamos a querer hacer es "vincular" nuestro HTML con JS, para eso podemos ejecutar funciones cuando un botón reciba el evento "click".

En nuestro .html agregamos:

```html
<button onclick="miFuncion()"></button>
```

En .js definimos:

```js
function miFuncion() {
	console.log("la función funciona! :)")
}
```

## Buscar elemento

En el ejercicio de manipular elementos HTML, es importante usar las herramientas de desarrollador.

Antes de buscar un elemento HTML, debemos ver cómo seleccionarlo. Para eso podemos inspeccionar el elemento a seleccionar con las herramientas de desarrollador, ver su estructura, e intentar seleccionarlo.

```js
var elemento = document.querySelector('h1')
```

El `querySelector` acepta un texto, con un selector, como CSS.

### Selectores

1. selección por clase del elemento: `".nombre-de-clase"`.
2. selección por etiqueta: `"h1"`.
3. selección por id: `"#nombre-identificador"`.
4. selección atributo - valor: `"a[href='#']"`.

## Modificar elemento

Pasos:

1. Fijarse en la estructura HTML, cómo los puedo seleccionar (como si le tuviese que dar estilos en CSS).
2. Buscar al elemento: `document.querySelector("seleccion")`.
3. Verificar si encontró el elemento.
4. Guardar el elemento en una variable.
5. Modificar el elemento usando la variable creada.

### Posibles modificaciones

Cambiar texto de adentro:

```js
elementoHtml.innetText = "hola mundo"
```

Cambiar HTML de adentro:

```js
elementoHtml.innerHTML = "<h1>que onda</h1>"
```

Cambiar atributo:

```js
elementoHtml.atributo = "algun valor"
```

## Ejemplo buscar y modificar

Agrego contenido al body:

```js
var body = document.querySelector('body')
body.innerHTML = `
	<a href="#">Un hipervínculo</a>
`
```

Ahora que tengo un hipervínculo, lo voy a intentar seleccionar y modificar:

```js
var link = document.querySelector("a[href='#']")
link.innerText = "Un LINK"
link.href = "https://google.com"
```

## Agregando y sacando clases

Cuando tenemos un elemento HTML, podemos acceder a su listado de clases y agregar, modificar, o "togglear" una clase.

```js
// agregar
elementoHtml.classList.add('nombre-de-clase')

// eliminar
elementoHtml.classList.remove('nombre-de-clase')
```

Qué es eso de "togglear". No hay una buena traducción al castellano de la palabra, pero básicamente lo que hacemos cuando usamos `toggle`, es: si la clase está en el elemento HTML, la elimina, de lo contrario, si la clase no está en el elemento HTML, la agrega.

Supongamos que `elementoHtml` no tiene la clase "nombre-de-clase".

```js
// la agrega
elementoHtml.classList.toggle('nombre-de-clase')

// la elimina
elementoHtml.classList.toggle('nombre-de-clase')

// la agrega
elementoHtml.classList.toggle('nombre-de-clase')

// la elimina
elementoHtml.classList.toggle('nombre-de-clase')

// ...
```

## Cambiar estilos directamente

```js
// cambia el width a 200px
elementoHtml.style.width = 200

// cambia el width a 40%
elementoHtml.style.width = "40%"

// para propiedades que lleven "-", se separa con mayúscula
elementoHtml.style.flexDirection = "column"
```

## Reaccionar a eventos

Primero debemos saber qué elemento queremos que escuche al evento. Puede ser un botón para el evento "click", o el body para escuchar teclas que se presionen (keydown).

```js
// "evento" es información del evento
function moverCirculo(event) {
	var circulo = document.querySelector('.circulo')

	if(event.key === "ArrowUp") {
		circulo.classList.remove('abajo')
	}
	if(event.key === "ArrowRight") {
		circulo.classList.add('derecha')
	}
	if(event.key === "ArrowLeft") {
		circulo.classList.remove('derecha')
	}
	if(event.key === "ArrowDown") {
		circulo.classList.add('abajo')
	}
}

document.body.addEventListener('keydown', moverCirculo)
```
