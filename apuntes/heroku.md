# Heroku

Cómo correr un servidor en Heroku, paso a paso.

## Requerimientos previos

- Cuenta [Heroku](https://www.heroku.com/) creada.
- [git](https://git-scm.com/downloads) instalado en la terminal.
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) instalado en la terminal.
- Un proyecto hecho.

## A considerar

No podemos interactuar con los archivos y directorios, solo podemos crear un servidor y hostearlo en [Heroku](https://www.heroku.com/).

## Pasos

1. [Crearse una nueva aplicación](#1.%20Crearse%20una%20nueva%20aplicación)
2. [Nombrar la aplicación](#2.%20Nombrar%20la%20aplicación)
3. [Seguir pasos para subir la aplicación](#3.%20Seguir%20pasos%20para%20subir%20la%20aplicación)
4. [Iniciar sesión](#4.%20Iniciar%20sesión)
5. [Siguen los pasos](#5.%20Siguen%20los%20pasos)
6. [Subimos los cambios](#6.%20Subimos%20los%20cambios)
7. [Corrección](#7.%20Corrección)
8. [Viendo la aplicación en la plataforma](#8.%20Viendo%20la%20aplicación%20en%20la%20plataforma)

## 1. Crearse una nueva aplicación

![crear aplicación en Heroku](/recursos/heroku-crear-aplicacion.png)

## 2. Nombrar la aplicación

![nombrar aplicación en Heroku](/recursos/heroku-nombar-aplicacion.png)

## 3. Seguir pasos para subir la aplicación

![deploy aplicación en Heroku](/recursos/heroku-seguir-pasos-deploy.png)

## 4. Iniciar sesión

Ir a la carpeta del proyecto.

Y escribir `heroku login`

![login Heroku cli](/recursos/heroku-login-cli.png)

Se les va a abrir una página web para que inicien sesión en Heroku.

![login Heroku web](/recursos/heroku-login-web.png)

Una vez que hayan iniciado sesión deberían ver algo así:

![login Heroku éxito](/recursos/heroku-login-exito.png)

## 5. Siguen los pasos

1. Inicializan repositorio.
2. Como repositorio remoto, apuntan al de Heroku, haciendo referencia al nombre de la aplicación que eligieron.
3. Agregan los cambios.
4. Los commitean.

![pasos a seguir Heroku](/recursos/heroku-seguir-pasos-cli.png)

## 6. Subimos los cambios

Todo debería andar bien pero...

![problema Heroku push](/recursos/heroku-problema-push.png)

Tenemos un problema, hay que agregar un archivo `package.json` para que reconozca el lenguaje del programa a ejecutar, y cómo ejecutarlo.

## 7. Corrección

1. Creamos el archivo `package.json` en la carpeta del proyecto, reemplazando el nombre de la aplicación por el que hayan elegido. Además su archivo que ejecutan debería llamarse `index.js`. Si requieren módulos no importa, siempre y cuando el archivo que ejecuten con `node` se llame `index.js`.

![package.json Heroku](/recursos/heroku-package-json.png)

2. Agregamos los cambios, como ya sabemos (add, commit), y verifico que se haya agregado:

![verificando cambios Heroku](/recursos/heroku-verificando-cambios.png)

3. Ahora pruebo de pushear y....

![push exitoso Heroku](/recursos/heroku-push-exitoso.png)

4. Puedo ver cada "deploy" o subida que se haya hecho, desde la plataforma de Heroku:

![actividad platforma Heroku](/recursos/heroku-actividad.png)

Si se fijan tuve como 4 subidas que fallaron. Todas porque no tenía ese archivo `package.json`, y la última fue la exitosa.

## 8. Viendo la aplicación en la plataforma

Ahora si vamos a: `[nombre-aplicacion].herokuapp.com` vamos a ver nuestra app andando.

![aplicación andando en Heroku](/recursos/heroku-aplicacion-andando.png)

---

Et ç'est tout
