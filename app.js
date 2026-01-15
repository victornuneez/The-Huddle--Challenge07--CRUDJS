// IMPORTAMOS HERRAMIENTAS

// Importamos el modulo express que nos permite crear aplicaciones web.
const express = require('express');

// Al ejecutar la funcion express, creamos una aplicacion web completa, ahora app es el servidor.(Contiene todos los metodos para escuchar, recibir datos)
const app = express();

// ======================================
// CONFIGURACION DEL MOTOR DE PLANTILLAS.
// ======================================

// Le indicamos a express que motor de plantila usar para generar las vistas dinamicas.
app.set('view engine', 'ejs');

// Le indicamos a Express en que carpeta buscar las vistas(las plantillas) que tiene que renderizar.
app.set('views', './views');

// ==========
// MIDDLEWARE
// ==========
// El navegador, por defecto, construye la pagina web a partir del HTML que recibe y la completa unicamente con los recursos que la aplicacion le entrega.

// Le decimos a express, que exponga la carpeta public cada vez que llega una peticion del navegador.(Se ejecuta cuando el navegador pide GET /style css para darle estilo al HTML)
app.use(express.static('public'));

// Middleware urlencoded es el traductor que convierte el texto del formulario en un objeto que JavaScript puede entender.
app.use(express.urlencoded({extended: false}));

// Conectamos el servidor con el archivo de rutas.
const temaRoutes = require('./routes/temaRoutes');
app.use('/temas', temaRoutes); // Conectamos la aplicacion web a nuestras rutas definidas, delegamos las peticiones hechas a /temas que se encargue temaRoutes.

app.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000/temas"));