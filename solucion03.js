// Ejercicio 1: Crear un servidor básico con Node.js

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola, Mundo!"); // Respuesta que el servidor enviará al navegador
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

// Explicación:
// Aquí se crea un servidor HTTP básico que responde con "Hola, Mundo!" a cualquier solicitud.
// Usamos 'createServer' del módulo 'http', configuramos el status code a 200, que indica éxito,
// y usamos 'end' para enviar la respuesta finalizando la solicitud.

// Ejercicio 2: Usar Axios para hacer una solicitud HTTP a una API

const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data); // Muestra los datos de la respuesta
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
  });

// Explicación:
// Se hace una solicitud GET a la API 'jsonplaceholder'.
// Si la solicitud es exitosa, los datos se muestran en la consola.
// Si hay un error, se captura y se muestra en la consola.
