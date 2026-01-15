/* 
EL ROUTER ES COMO UNA CENTRAL TELEFONICA:
Recibe la llamanda (la URL) y la deriva( al controlador) 

Sirve para definir y organizar las rutas tambien se encarga de deriivar las peticiones al controlador.
*/

// Importamos express para poder usar el router.
const express = require('express');

// Creamos un objeto enrutador, nos permite derivar las peticiones que hacen al servidor al controller.
const router = express.Router();

// Importamos las funciones del controller.
const { listarTemas, agregarTema, mostrarFormularioEditar, actualizar, votar, eliminar}= require('../controllers/temaController');

// RUTAS DEL SERVIDOR(ENDPOINTS) pasan las peticiones a las funciones de los controladores.

router.get('/', listarTemas); // app.use('/temas', temaRoutes) es la puerta, router.get('/') es la habitación. Dentro de temaRoutes: / significa /temas

router.post('/crear', agregarTema);

router.get('/votar/:id', votar);

router.get('/eliminar/:id', eliminar);

router.get('/editar/:id', mostrarFormularioEditar);

router.post('/editar/:id', actualizar);

// Exportamos nuestro archivo a la carpeta app.js para que el servidor pueda derivar todo lo realcionado a /temas a este archivo temaRoutes. 
module.exports = router
