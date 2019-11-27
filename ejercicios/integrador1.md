# Ejercicio integrador #1

Con los temas que vimos en la cursada ya podemos hacer un proyecto de punta a punta, completo.

No me creen?

- Sabemos cómo hacer un HTML, o sea la interfaz del usuario.
- Sabemos cómo hacer un servidores, guardar y leer información de archivos.
- Sebemos transformar objetos a JSON, y JSON a objetos.
- Sabemos tratar diferentes tipos de datos, como objetos y listas.
- Sabemos cómo manipular elementos HTML para mostrar información dinámicamente.
- Sabemos cómo conectar las 2.

No saben? Nunca se termina de saber.

Si están perdidos con algún tema pueden consultar estos apuntes.

- [serviores, módulo http](/apuntes/back/http.md).
- [archivos, módulo fs](/apuntes/back/modulo-fs.md).
- [JSON](/apuntes/back/json.md).
- [fetch desde el front](/apuntes/front/fetch.md).
- [manipulacion HTML](/apuntes/front/manipulacion-dom.md).
- [solucionando problemas CORS](/apuntes/back/cors.md).

## Enunciado

### Servidor

Crear un servior que responda ante un recurso que ustedes elijan, como "usuario", "puntaje", ..., con las acciones GET, POST, DELETE y PATCH.

Esto significa que si se hace un GET a "usuario", el servidor debería responderme con una lista de usuarios. Si se hace un POST a "usuario", se debería crear uno nuevo.

### Interfaz de usuario

Todas estas conexiones se deberán establecer desde un HTML, el cual será la interfaz de su usuario para interactuar con su sistema.

### Persistencia datos

Y de dónde se va a leer la información, o guardar? En un archivo `.json`.

Este archivo `.json` deberá tener una lista de objetos, cada objeto será un un recurso o entidad de nuestro sistema. Por ejemplo, si elegimos que se cree un usuario, debería agregarse a la lista del `.json`.

### A considerar

Pueden modificar el enunciado como les convenga para apuntarlo a su proyecto final.
