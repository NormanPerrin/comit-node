# Más ejercicios de funciones

## Parte 1: variables vs parámetros

1. Crear una función "decirPersonalidad", la cual reciba un objeto por parámetro y muestre por consola su atributo con nombre "personalidad". Una vez definida la función, llamarla de 2 formas:
    1. definiendo un objeto llamado "persona" en una variable, y luego llamar la función "decirPersonalidad".
    1. llamándo directamente a la función "decirPersonalidad" definiendo un objeto en su parámetro.
1. Crear una función "aumentarContador", la cual aumente en 1 la variable "contador" cuando se ejecute. No hace falta definirle parámetros.
1. Definir una variable llamada "variable", con valor "soy una variable". Luego, crear una función "variableParametro", la cual tenga un parámetro con nombre "variable", la misma debe hacer `console.log` del parámetro cuando se ejecuta. Responder:
    1. Qué valor va a imprimir por consola cuando ejecuto la función "variableParametro" con el valor "soy un parametro"?
    1. Qué valor va a imprimir por consola cuando ejecuto la función "variableParametro" con el valor que tenga la variable "variable"?
    1. Qué valor va a imprimir por consola si vuelvo a definir la función "variableParametro" sin parámetros, y la ejecuto con el valor "soy un parametro"?
    1. Qué podrían hacer para no caer en confusión cuando tienen un parámetro con mismo nombre que una variable definida afuera de la función?

## Parte 2: jodiendo al programador

Para hacer los siguientes ejercicios, vamos a usar la función `Object.assign`.

Esta función copia todos los atributos de un objeto fuente, a otro destino.

```js
var destino = { a: 1, b: 2 }
var fuente = { b: 3, c: 4 }

Object.assign(destino, fuente)

console.log(destino) //> { a: 1, b: 3, c: 4 }
console.log(fuente) //> { b: 3, c: 4 }
```

Prueben algunos ejemplos en la consola para que quede claro el comportamiento.

Ejercicios:

1. Crear un objeto "programador", el cual tenga como atributos:
    - nombre: texto
    - quemades: número entre 0 y 10.
    - energia: número entre 0 y 10.
    - empleado: false
1. Crear una función "esProductivo", que reciba un programador y retorne:
    - `true` cuando el `quemades` sea menor a `energia`.
    - `false` cuando no pase lo anterior.
1. Crear una función "tomarCafe", la cual recibe un programador, y retorna un programador con nivel de quemadés con 2 niveles menos de los que tenía, y energia con 3 niveles más de lo que tenía.
1. Crear una funcíon "programar", la cual recibe un programador y un número de horas trabajadas, y retorna un programador con 1 nivel de `energia` menos por cada hora trabajada, y 2 niveles de `quemades` más por hora trabajada.
1. Crear una función "dormir", la cual recibe un programador y un número de horas dormidas, y retorna un programador con 1 nivel de `energia` más por hora dormida, y 2 niveles de `quemades` menos por hora dormida.
1. Crear una función "simularDespido", que reciba un programador, y si luego de tomar cafe y dormir 2 horas no es productivo, retorne un programador no empleado, de lo contrario retornar el mismo programador.
1. Crear una función "simularContratacion", que reciba un programador, y si su nivel de `energia` es mayor a 8, su quemadés es menor a 2, y no es empleado, que retorne un programador empleado.
1. Crear una función "accion", que reciba un programador y una función de las anteriores creadas como parámetros. La misma debe imprimir por consola el programador, luego ejecutar la función recibida por parámetro con el programador, y finalmente otra impresión por consola del programador.
