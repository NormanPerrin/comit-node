# File System (fs)

1. Crear un programa que muestre los archivos y directorios donde está contenido.
2. Crear un programa que cree una carpeta con nombre igual al que reciba por parámetros.
3. Crear un programa que cree un archivo con nombre igual al que reciba como primer parámetro, y contenido igual al que reciba como segundo parámetro.
4. Crear un programa que cree un archivo "index.html", que contenga como contenido:

```html
<html lang="es">
	<head>
		<title>@titulo@</title>
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>
```

5. Crear un programa que cree un archivo "config.json", que contenga como contenido:

```json
{
	"titulo": "El gran título",
	"subtitulo": "Un subtítulo",
	"descripcion": "Una descripción larga que no se me ocurre que poner, tururu ru ru ru"
}
```

5. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola.
6. Crear un programa que importe el archivo "config.json" y muestre el título por consola.
7. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola, **pero** esta vez, reemplazando `@titulo@` por el título que esté en el archivo "config.json", y así con las otras variables del html.


## Ejercicio Final 😱

Crear un programa que cree una carpeta con la siguiente estructura:

```
titulo/
|__ index.html
|__ estilos.css
```

La carpeta deberá tener el mismo título que el que aparece en el archivo `config.json`.

El archivo `index.html` va a tener como contenido el siguiente:

```html
<html lang="es">
	<head>
		<title>@titulo@</title>
		<link rel="stylesheet" href="./estilos.css">
	</head>
	<body>
		<h1>@titulo@</h1>
		<h2>@subtitulo@</h2>
		<p>@descripcion@</p>
	</body>
</html>
```

Pero reemplazando `@titulo@` por el título del archivo `config.json`, y así con las otras variables que haya.

El archivo `estilos.css` tendrá el siguiente contenido:

```css
body {
    margin: 0;
    text-align: center;
    background-color: tomato;
}

h1 {
    background-color: #333;
    color: #fafafa;
    padding: 20px;
}
```

Buena suerte
