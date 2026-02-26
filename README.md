# API - Sistema de Gestión de Tickets de Asistencia Técnica 

Este repositorio contiene el backend (API RESTful) para el sistema de gestión de tickets de asistencia técnica, desarrollado como parte del Examen de Fin de Carrera (Caso de Estudio 4)[cite: 653, 654].

El proyecto implementa la arquitectura MVC [cite: 767] y permite la gestión de usuarios, técnicos, clientes y tickets.

 **URL de Despliegue:** [https://caso4-ticketsdb.onrender.com](https://caso4-ticketsdb.onrender.com)

##  Características Principales

*  **Arquitectura MVC:** Separación clara entre Modelos, Controladores y Rutas[cite: 767].
  <img width="431" height="556" alt="image" src="https://github.com/user-attachments/assets/65b29887-f079-473a-aaa6-db63a0ef2785" />

*  **Gestión de Usuarios (Login/Registro):** Autenticación de usuarios utilizando JSON Web Tokens (JWT) y encriptación de contraseñas con bcrypt.
*  **CRUD de Técnicos:** Operaciones completas para gestionar a los técnicos del sistema.
*  **CRUD de Clientes:** Operaciones completas para gestionar a los clientes.
*  **CRUD de Tickets:** Generación y gestión de tickets, relacionando al cliente que lo solicita y al técnico asignado.
* **Base de Datos NoSQL:** Modelado de datos e interacción con MongoDB a través de Mongoose.
* **CORS Abierto:** Configurado para aceptar peticiones de cualquier origen, facilitando la integración con cualquier frontend.

##  Tecnologías Utilizadas

* [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) - Entorno y Framework para el servidor.
* [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/) - Base de datos y ODM.
* [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) - Para la autenticación.
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Para el hash de contraseñas.
* [Cors](https://www.npmjs.com/package/cors) - Para el intercambio de recursos de origen cruzado.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Para el manejo de variables de entorno.

##  Instalación y Configuración Local

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/JuanL525/Caso4_TicketsDB.git](https://github.com/JuanL525/Caso4_TicketsDB.git)
    cd Caso4_TicketsDB
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto basándote en el `README.md` original o usando esta plantilla:
    ```env
    PORT=4000
    MONGO_URI=tu_cadena_de_conexion_mongodb
    JWT_SECRET=tu_palabra_secreta_super_segura
    ```

4.  **Ejecutar el servidor en modo desarrollo:**
    ```bash
    npm run dev
    ```
    El servidor se iniciará en `[http://localhost:4000](https://caso4-ticketsdb.onrender.com/)`.

##  Endpoints Principales

A continuación se detallan las rutas principales de la API (añade tu URL base de Render para consumirlas).

### Usuarios
* `POST /api/usuarios` - Registrar un nuevo usuario.
* `POST /api/usuarios/login` - Iniciar sesión (Devuelve token y datos del usuario).

### Técnicos
* `GET /api/tecnicos` - Obtener lista de técnicos.
* `POST /api/tecnicos` - Registrar un nuevo técnico.
* `GET /api/tecnicos/:id` - Obtener un técnico por su ID.
* `PUT /api/tecnicos/:id` - Actualizar información de un técnico.
* `DELETE /api/tecnicos/:id` - Eliminar a un técnico.

### Clientes
* `GET /api/clientes` - Obtener lista de clientes.
* `POST /api/clientes` - Registrar un nuevo cliente.
* `GET /api/clientes/:id` - Obtener un cliente por su ID.
* `PUT /api/clientes/:id` - Actualizar información de un cliente.
* `DELETE /api/clientes/:id` - Eliminar a un cliente.

### Tickets
* `GET /api/tickets` - Obtener lista de tickets (Incluye populate de técnico y cliente).
* `POST /api/tickets` - Generar un nuevo ticket.
* `GET /api/tickets/:id` - Obtener un ticket específico.
* `PUT /api/tickets/:id` - Actualizar información o estado de un ticket.
* `DELETE /api/tickets/:id` - Eliminar un ticket.

##  Estructura del Proyecto

```text
├── src/
│   ├── config/       # Configuración de la base de datos (db.js)
│   ├── controllers/  # Lógica de negocio (CRUDs y funciones)
│   ├── helpers/      # Funciones de ayuda (ej. generarJWT.js)
│   ├── middleware/   # Middlewares (ej. checkAuth para proteger rutas)
│   ├── models/       # Esquemas de Mongoose (Usuario, Técnico, Cliente, Ticket)
│   ├── routes/       # Definición de endpoints de la API
│   └── index.js      # Archivo principal de entrada y configuración de Express
├── .env              # Variables de entorno (no incluir en commits)
├── .gitignore        # Archivos a ignorar por git
├── package.json      # Dependencias y scripts
└── README.md         # Documentación del proyecto

## Pruebas de rendimiento
<img width="1465" height="864" alt="image" src="https://github.com/user-attachments/assets/09a09582-507e-4792-b560-e173df860423" />

