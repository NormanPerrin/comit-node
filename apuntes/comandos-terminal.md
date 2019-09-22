# Comandos terminal

Explicación y ejemplos de algunos comandos básicos para manejarse por la terminal.

Si quieren investigar sobre el tema, yo recomiendo [esta guía](https://guide.bash.academy/), si no saben inglés pueden probar de usar el Google Translate.

También si quieren ver detalles de un comando pueden ver su manual, desde la terminal:

```bash
$ man ls # para salir pueden apretar "q"
```

## pwd

Ver en qué carpeta estoy parado.

```bash
$ pwd
/Users/norman/code/comit/comit-node
```

## ls

Listar archivos y carpetas desde donde estás parado:

```console
$ ls
apuntes clases cursada ejemplos readme.md
```

Listar archivos y carpetas de la carpeta "clases":

```console
$ ls clases
readme.md septiembre
```

```console
$ ls clases/..
apuntes clases cursada ejemplos readme.md
```

## cd

Cambiar de directorio.

Ir a carpeta "clases", desde donde estoy:

```bash
$ cd clases
```

Ir a la carpeta base:

```bash
$ cd /
```

Ir a una carpeta atrás:

```bash
$ cd ..
```

Uniendo las 2, yendo a clases, atrás, a clases de nuevo...

```bash
$ cd clases/../clases/../clases/.. # estoy en el mismo lugar de donde partí
```

## mkdir

Crear una carpeta.

```bash
$ mkdir nombre_de_carpeta
```

Si ahora listo los archivos, debería tener una carpeta nueva:

```bash
$ ls
apuntes clases cursada ejemplos nombre_de_carpeta readme.md
```

Y si veo qué hay dentro de carpeta:

```
$ ls nombre_de_carpeta
```

Nada... es una carpeta vacía.

## Abrir VSCode

Para abrir VSCode con la carpeta en la que estoy parado como proyecto:

```bash
code .
```
