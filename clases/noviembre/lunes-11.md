# Lunes 11

## Hicimos

- [Ejercicio repaso](#ejercicio%20repaso) + [resolución](https://youtu.be/HNRX6X6lTYw)
- [Repaso teoría http](/apuntes/back/http.md)
- [Instalar módulos con npm](/apuntes/back/modulo-fs.md#3-externos) + [explicación](https://youtu.be/B-zeSlKxfKk)
- Simulacro evacuación.
- [Explicación node-fetch](/apuntes/back/node-fetch.md) + [explicación](https://youtu.be/B-zeSlKxfKk)
- [Ejercicios node-fetch](/ejercicios/back/fetch.md)

## Pendientes profe

- Terminar servidor ejercicios node-fetch. Últimos ejercicios. (mañana probablemente...)

## Pendientes alumnos

- Llegar hasta donde puedan resolviendo ejercicios de node-fetch.
- Seguir pensando / desarrollando su proyecto final.

## Ejercicio repaso

Crear un programa que obtenga 2 colores hexadecimal por parámetro. Y que genere una hoja de estilos css. La misma va a ser resultado de leer el archivo estilos-template.css El cual tiene el siguiente contenido:

```css
body {
  background-color: #@secundario@
}
h1, h2, h3 {
  background-color: #@secundario@
  color: #@primario@
}
main {
  border: 5px solid #@primario@
}
```

Y de reemplazar los textoss @primario@  y @secundario@  por los colores hexadecimales que haya recibido por parámetros.
La hoja de estilos será creada con nombre estilos-generados.css
