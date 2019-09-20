# Viernes 20

Hablamos sobre `git` y `GitHub`.

## Enlaces

- [Guía introducción a Git y GitHub](https://nperrin.io/es/tech/guia-introduccion-a-git#introducci%C3%B3n).

## Pendientes profe

- Subir video explicación Git y GitHub.

## Pendientes alumnos

1. Terminar portfolio, para presentar el lunes.
2. Subir su portfolio a un repositorio de GitHub.
3. Disfrutar el finde.

## Aclaraciones

Como respuesta de lo que vi en la clase, algunas sugerencias o advertencias.

También quiero aclarar estas aclaraciones van a tener su apartado en la guía que les compartí, así que gracias por el feedback.

### Ver dónde están parados

Asurarse de que cuando hagan `git init`, o cualquier otro comando de `git`, que estén en la carpeta correcta.

Para ver dónde están parados:

```console
$ pwd
/users/josesin/Desktop/alto-proyecto
```

Qué pasa si hacen `git init` en una carpeta incorrecta, como la de la base de su sistema?

Pueden borrar la carpeta `.git` de esa carpeta, y ya no les va a hacer un seguimiento de historial de esos directorios o archivos.

Borrar carpeta `.git`:

```console
$ rm -fr .git
```

No vaya a ser que terminan subiendo archivos privados a GitHub.

### Partes

Por un lado tenemos nuestro **editor de texto**: nos permite crear carpetas, archivos, y modificarlas.

Luego tenemos la **terminal**, o **consola**: nos permite movernos por diferentes directorios y ejecutar comandos, para esta clase usamos comandos de `git`, con el cual vamos a hacer un seguimiento de modificaciones, localmente, en nuestra compu.

Por último tenemos **GitHub**: plataforma web que nos deja subir nuestro repositorio local.
