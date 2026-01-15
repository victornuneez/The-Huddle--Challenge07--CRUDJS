/*
Pool: Es un conjunto de conexiones listas para usar.
Sirve para que la aplicacion sea rapida y estable.

Analogia: Es como tener 10 telefonos con la linea abierta, cuando necesitas hablar con alguien(base de datos), solo agarras una linea que este libre, llamas, te comunicas
y lo soltas para que otro lo use.
*/

// Importamos la clase 'Pool' desde el modulo 'pg', es una herramienta que sirve para poder hablar con la base de datos PostgreSQL desde Node.js.(Interprete entre Node.js y PostgreSQL)
const { Pool } = require('pg');

// Creamos un objeto pool que sirve para manejar conexiones a la base de datos(Administrador de conexiones).
const pool = new Pool({
    user: 'postgres',         // Usuario del backend para poder ingresar a la base de datos.(Credencial)
    host: 'localhost',          // Direccion de donde esta la base de datos.
    database: 'Cursos_db',      // Nombre de la base de datos.
    password: '111222',    // Contrasenha del backend para poder usar la base de datos.(Pin de la Credencial)
    port: 5432,                 // El canal de conexion de la base de datos.
});

// Exportamos
module.exports = pool