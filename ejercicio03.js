// Ejercicio 1: Crear un servidor básico con Node.js

// TIP: Usa el módulo 'http' de Node.js
// Completa el siguiente código para crear un servidor que responda con "Hola, Mundo!" a cualquier solicitud.

const http = require("http");

const server = http.metodo((req, res) => {
  // Cual es el metodo http?
  // Completa la respuesta del servidor:
  // TIP: Usa el método 'end' para enviar la respuesta y finalizar la solicitud
  // Aquí debe ir la respuesta que el servidor enviará al navegador
});

server.listen(); // Esta funcion recibe 2 parametros

// Ejercicio 2: Usar Axios para hacer una solicitud HTTP a una API

// TIP: Recuerda instalar Axios
// Completa el siguiente código para hacer una solicitud GET a la API de 'jsonplaceholder' y mostrar la respuesta en la consola.

const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // TIP: Usa 'response.data' para acceder a los datos de la respuesta
    // Aquí deberías mostrar los datos de la respuesta
  })
  .catch(); // Si en la solicitud existe un error debes atraparlo, completa el codigo
