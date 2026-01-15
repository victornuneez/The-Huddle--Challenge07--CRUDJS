
// Importamos el pool configurado para poder tener varias conexiones con la base de datos.
const pool = require('../config/db'); 


// Funcion para obtener todos los temas.
const obtenerTodos = async () => {
    // Ejecutamos una consulta SQL mediante pool.query(), con await (palabra reservada JavaScript) le dice a la funcion que espere que la base de datos responda antes de seguir.
    const res = await pool.query('SELECT * FROM Temas ORDER BY votos DESC');
    return res.rows; // Retornamos las filas que devolvio la base de datos.(Objetos JavaScript)
};


// Funcion para votar un tema por su id.
const votarTema = async (id) => {
    // Con SET indicamos que valores queremos cambiar.
    const sql = 'UPDATE Temas SET votos = votos + 1 WHERE id = $1';
    await pool.query(sql, [id]);
};


// Funcion para obtener un tema por su id
const obtenerPorID = async (id) => {
    const res = await pool.query('SELECT * FROM Temas WHERE id = $1', [id]);
    return res.rows[0]; // Con el [0] devolvemos solo el objeto listo para usar, no un Array de un solo objeto.
};


// Funcion para crear un tema dentro de la base de datos.
const crearTema = async (titulo, enlace) => {
    // placeholders($1, $2), huecos donde van los datos ingresados(titulo, enlace)
    const sql = 'INSERT INTO Temas (titulo, enlace) VALUES($1, $2)';
    await pool.query(sql, [titulo, enlace]); // 
};


// Funcion para actualizar el titulo y el enlace de un tema por su id.
const actualizarTema = async (id, titulo, nuevoEnlace) => {
    const sql = 'UPDATE Temas SET titulo = $1, enlace = $2 WHERE id = $3';
    await pool.query(sql, [titulo, nuevoEnlace, id]);
};


// Funcion para eliminar un tema por su id 
const eliminarTema = async (id) => {
    const sql = 'DELETE FROM Temas WHERE id = $1';
    await pool.query(sql, [id]);
};


// Exportamos las funciones del model al controller para que las pueda usar.
module.exports = {obtenerTodos, obtenerPorID, crearTema, votarTema, eliminarTema, actualizarTema };