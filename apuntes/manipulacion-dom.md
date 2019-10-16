# Manipulación DOM

## Buscar elemento

```js
var elemento = document.querySelector('h1')
```

El `querySelector` acepta un texto, con un selector, como CSS.

### Selectores

1. selección por clase del elemento: `".nombre-de-clase"`.
2. selección por etiqueta: `"h1"`.
3. selección por id: `"#nombre-identificador"`.
4. selección atributo - valor: `"a[href]='#'"`.

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

## Ejemplo

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
