
// Importamos todas las funciones del model.
const model = require('../models/temaModels');


// Funcion del controller que le pide al model todos los temas de la base de datos y mostrarlos en la vista.
const listarTemas = async (req, res) => {
    try {
        const listaDeTemas = await model.obtenerTodos(); // Esperamos a que la funcion nos devuelva los temas y los guardamos.
        res.render('temas', { temas: listaDeTemas, titulo: 'Cursos Gratis' }); // Renderizamos junto con la plantilla(temas.ejs) los datos obtenidos y lo enviamos al navegador.
    
    } catch (error) { 
        console.error(error);
        res.status(500).send("Error al cargar los temas") // Enviamos un aviso al navegador, 500 indica que fue un error del servidor.
    }
};


// Funcion del controller que le pide al model crear un tema y guardarlo en la base de datos.
const agregarTema = async (req, res) => {
    try {
        const { nombreDelTema, enlaceDelTema } = req.body; // Extraemos los valores que envio el usuario del objeto intepretado(titulo, enlace).
        await model.crearTema(nombreDelTema, enlaceDelTema); // Usamos la funcion del model para crear un tema y guardarlo en la base de datos.
        res.redirect('/temas'); // cada vez que hacemos un cambio, el redirect provoca que el navegador vuelva a cargar la pagina con la informacion mas reciente.
    
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al guardar el tema'); // Indicamos en el navegador que el problema fue del servidor.
    }
};


// Funcion para mostrar y preparar el formulario de edicion de un tema por su id.
const mostrarFormularioEditar = async (req, res) => {
    try {
        const id = req.params.id;                     // Toma el id del tema desde la URL.
        const tema = await model.obtenerPorID(id);    // Usamos ese id para obtener los datos de ese tema y guardarlo.

        if (!tema) {                                   // Verificamos si la base de datos no devolvio ningun tema.
            return res.status(404).send("Tema no encontrado"); // Devolvemos un error indicando que se pudo encontrar el tema.
        }
        
        res.render('editar', {tema: tema}); // Muestra el formulario para editar el tema con sus datos actuales.
    
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener tema");
    }
};


// Funcion para actualizar y guardar los datos de un tema que ya existe en la base de datos.
const actualizar = async (req, res) => {
    try {
        const id = req.params.id;                       // Obtenemos de los parametros el id del tema
        const { titulo, enlace } = req.body;            // Obtenemos los datos dentro de la peticion
        await model.actualizarTema(id, titulo, enlace);  // Actualizamo el tema con el id especificado.
        res.redirect('/temas');                          // Redirige al usuario a la lista de todos los temas.
    
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar tema");
    }
};


// Funcion para votar un tema por su id
const votar = async (req, res) => {
    try {
        const id = req.params.id;
        await model.votarTema(id);
        res.redirect('/temas'); 
    
    } catch (error){
        console.error(error);
        res.status(500).send('Error al votar el tema');
    }

};


// Funcion para eliminar un tema por su id
const eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        await model.eliminarTema(id);
        res.redirect('/temas');
    
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el tema")
    }
};

// Exportamos las funciones de controller a temaRoutes para que pueda enrutar las peticiones al controller.
module.exports = { listarTemas, agregarTema, mostrarFormularioEditar, actualizar, votar, eliminar }