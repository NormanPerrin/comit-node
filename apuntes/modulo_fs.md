# Módulo: File System (fs)

## Importar módulo

```js
var fs = require('fs')
```

## Usarlo

### Leer directorio

Recibe como primer parámetro un string con la ruta del directorio. Con `"."` se indica que es el directorio actual.

```js
var directorios = fs.readdirSync('.')
console.log(directorios)
```

### Crear carpeta

Recibe como primer parámetro un string con el nombre de la carpeta a crear. La crea en el mismo directorio de donde se ejecuta node.

```js
fs.mkdirSync('nombreCarpeta')
```

### Borrar carpeta

Recibe como primer parámetro un string con el nombre de la carpeta a borrar. La borra en el mismo directorio de donde se ejecuta node.

```js
fs.rmdirSync('nombreCarpeta')
```

### Escribir archivo

Recibe como primer parámetro un string con el nombre del archivo a leer. Como segundo parámetro, el contenido a escribir.

Pueden usar los acentos invertidos si quieren escribir mucho contenido.

```js
fs.writeFileSync('index.html', `
  <html lang="es">
    <head>
      <title>Título</title>
    </head>
    <body>
      <h1>Título re bueno</h1>
    </body>
  </html>
`)
```

### Leer archivo

Recibe como primer parámetro un string con el nombre del archivo a leer. Como segundo parámetro, la codificación del archivo. Si no se pone la codificación

```js
var contenido = fs.readFileSync('nombreCarpeta', 'utf-8')
console.log(contenido)
```
