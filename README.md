# API de Series y Plataformas

Bienvenido a la documentación del proyecto **API de Series y Plataformas**. Esta API permite gestionar una base de datos de series y plataformas de streaming, con funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar).

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [Series](#series)
  - [Plataformas](#plataformas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)
- [Licencia](#licencia)

## Descripción del Proyecto

Este proyecto es una API RESTful construida con **Node.js** y **Express**, que se conecta a una base de datos **MongoDB**. Permite gestionar información sobre series y plataformas de streaming, incluyendo la capacidad de asociar series con plataformas específicas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Node.js y npm (Node Package Manager) instalados.
- MongoDB instalado y ejecutándose en tu máquina local, o acceso a un servicio de MongoDB en la nube.
- Un archivo `.env` con las variables de entorno necesarias.

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Accede al directorio del proyecto:

        cd tu-repositorio

3. Instala las dependencias:

        npm install

4. Configura las variables de entorno:

  Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

    MONGODB_URI=mongodb://localhost:27017/tu_basededatos
    PORT=3000

5. Inicia el servidor:

        npm start


El servidor debería estar ejecutándose en "http://localhost:3000".



Endpoints
Series
1. Obtener todas las series
URL: /api/v1/series
Método: GET
Descripción: Retorna una lista de todas las series disponibles.
Respuesta: Array de objetos JSON, cada uno representando una serie.


2. Obtener una serie por ID
URL: /api/v1/series/:id
Método: GET
Descripción: Retorna la serie correspondiente al ID especificado.
Parámetros:
id: El ID de la serie (en la URL).
Respuesta: Objeto JSON que representa la serie.


3. Obtener series por categoría
URL: /api/v1/series/category/:category
Método: GET
Descripción: Retorna una lista de series que pertenecen a la categoría especificada.
Parámetros:
category: Nombre de la categoría (en la URL). Valores posibles: action, animation, comedy, terror.
Respuesta: Array de objetos JSON con las series de la categoría.


4. Obtener series por puntuación
URL: /api/v1/series/punctuation/:punctuation
Método: GET
Descripción: Retorna una lista de series que tienen la puntuación especificada.
Parámetros:
punctuation: Puntuación de la serie (en la URL).
Respuesta: Array de objetos JSON con las series que tienen la puntuación especificada.


5. Crear una nueva serie
URL: /api/v1/series
Método: POST
Descripción: Crea una nueva serie.
Cuerpo de la solicitud: Objeto JSON con las propiedades name, image, punctuation, y category.
Respuesta: Objeto JSON que representa la serie creada.


6. Actualizar una serie
URL: /api/v1/series/:id
Método: PUT
Descripción: Actualiza los datos de una serie existente.
Parámetros:
id: El ID de la serie (en la URL).
Cuerpo de la solicitud: Objeto JSON con las propiedades que se desean actualizar.
Respuesta: Objeto JSON que representa la serie actualizada.


7. Eliminar una serie
URL: /api/v1/series/:id
Método: DELETE
Descripción: Elimina una serie de la base de datos.
Parámetros:
id: El ID de la serie (en la URL).
Respuesta: Objeto JSON que representa la serie eliminada.




Plataformas
1. Obtener todas las plataformas
URL: /api/v1/plataforma
Método: GET
Descripción: Retorna una lista de todas las plataformas disponibles.
Respuesta: Array de objetos JSON, cada uno representando una plataforma.


2. Obtener una plataforma por ID
URL: /api/v1/plataforma/:id
Método: GET
Descripción: Retorna la plataforma correspondiente al ID especificado.
Parámetros:
id: El ID de la plataforma (en la URL).
Respuesta: Objeto JSON que representa la plataforma.


3. Crear una nueva plataforma
URL: /api/v1/plataforma
Método: POST
Descripción: Crea una nueva plataforma.
Cuerpo de la solicitud: Objeto JSON con las propiedades name, image, y opcionalmente series (una lista de IDs de series).
Respuesta: Objeto JSON que representa la plataforma creada.


4. Actualizar una plataforma
URL: /api/v1/plataforma/:id
Método: PUT
Descripción: Actualiza los datos de una plataforma existente.
Parámetros:
id: El ID de la plataforma (en la URL).
Cuerpo de la solicitud: Objeto JSON con las propiedades que se desean actualizar.
Respuesta: Objeto JSON que representa la plataforma actualizada.


5. Eliminar una plataforma
URL: /api/v1/plataforma/:id
Método: DELETE
Descripción: Elimina una plataforma de la base de datos.
Parámetros:
id: El ID de la plataforma (en la URL).
Respuesta: Objeto JSON que representa la plataforma eliminada.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework de aplicaciones web para Node.js.
MongoDB: Base de datos NoSQL para almacenar datos de series y plataformas.
Mongoose: ODM para MongoDB y Node.js.




Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


