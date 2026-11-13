/*=====================
	Importaciones
=====================*/
import express from "express"; // Importamos express luego de instalarlo con npm i express
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";
import { __dirname, join } from "./src/api/utils/index.js";


/*=====================
	Config
=====================*/
const app = express(); // Creamos una instancia de aplicacion de express en app
const PORT = environments.port;

app.set("view engine", "ejs"); // Configuramos EJS como motor de plantillas
app.set("views", join(__dirname, "src/views")); // Apuntamos a la carpeta de las vistas de EJS



/*=====================
	Middlewares -> Funciones que se ejecutan entre la req y la res!
=====================*/
app.use(cors()); // Middleware CORS basico para permitir todas las solicitudes

// Middleware logger para mostrar por consola las solicitudes de nuestro servidor
app.use(loggerUrl);

// Parseamos el JSON que enviamos en los formularios para recibirlos como objemos
app.use(express.json()); // Parseamos el JSON recibido en el body automaticamente

// Middleware para servir archivos estaticos
app.use(express.static(join(__dirname, "src/public")));



/*=====================
	Rutas
=====================*/
// Rutas endpoints
app.use("/api/products", productRoutes); // Ahora todas las peticiones que apunten a /api/products las redirigimos a product.routes

// Rutas vistas
app.use("/dashboard", viewRoutes); // Redirigimos las consultas a /dashboard a la ruta de vistas




app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});