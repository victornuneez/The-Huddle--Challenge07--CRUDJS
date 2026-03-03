Ranking de Temas: Sistema de Votación (MVC Pattern)

Este proyecto es una aplicación web dinámica construida con Node.js y Express, que implementa un CRUD completo para la gestión y votación de temas de aprendizaje. La arquitectura sigue estrictamente el patrón Modelo-Vista-Controlador (MVC) y utiliza PostgreSQL como motor de base de datos persistente.


🎯 Propósito del Proyecto

Demostrar el dominio en la estructuración de aplicaciones escalables, separando las responsabilidades de cada componente para facilitar el mantenimiento y el trabajo en equipo.


🛠️ Stack Tecnológico

Backend: Node.js con Express.

Base de Datos: PostgreSQL (usando pg pool para gestión de conexiones).

Frontend: EJS (Embedded JavaScript templates) para renderizado dinámico del lado del servidor.

Estilos: CSS3 personalizado con un diseño moderno y responsivo.


🏛️ Estructura del Proyecto (MVC)

models/: Lógica de acceso a datos. Contiene las consultas SQL (pool.query) para interactuar con PostgreSQL.

controllers/: El cerebro de la aplicación. Gestiona las peticiones de las rutas, llama a los modelos correspondientes y decide qué vista renderizar.

views/: Plantillas EJS que generan el HTML dinámico basándose en los datos enviados por el controlador.

routes/: Define los Endpoints y los conecta con sus respectivos controladores.

config/: Configuración centralizada del Pool de conexiones a la base de datos.

public/: Recursos estáticos (CSS, imágenes) accesibles para el cliente.


✨ Funcionalidades Destacadas

Ranking Dinámico: Los temas se ordenan automáticamente por cantidad de votos (ORDER BY votos DESC), otorgando medallas (🥇, 🥈, 🥉) a los tres primeros puestos.


CRUD Completo:

Create: Agregar nuevos temas con validación de URL.

Read: Listado de temas en tiempo real desde la base de datos.

Update: Edición de títulos y enlaces existentes.

Delete: Eliminación segura de registros por ID.

Sistema de Votación: Implementación de actualización incremental (UPDATE ... SET votos = votos + 1).

Gestión de Conexiones: Uso de un Connection Pool para optimizar el rendimiento y la estabilidad del servidor ante múltiples peticiones simultáneas.


🚀 Instalación y Configuración

Configurar PostgreSQL:

Crear base de datos Cursos_db.

Crear tabla Temas con las columnas: id (PK), titulo, enlace, votos (default 0).


Instalar dependencias:

Bash

npm install express ejs pg

Iniciar Servidor:

Bash

node app.js
