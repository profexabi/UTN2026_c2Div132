/*=====================
	Importaciones
=====================*/
import express from "express"; // Importamos express luego de instalarlo con npm i express
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js";

const app = express(); // Creamos una instancia de aplicacion de express en app
const PORT = environments.port;




/*=====================
	Middlewares -> Funciones que se ejecutan entre la req y la res
=====================*/
app.use(cors()); // Middleware CORS basico para permitir todas las solicitudes

// Middleware logger para mostrar por consola las solicitudes de nuestro servidor
app.use(loggerUrl);

// Parseamos el JSON que enviamos en los formularios para recibirlos como objemos
app.use(express.json()); // Parseamos el JSON recibido en el body automaticamente




/*=====================
	Endpoints -> Combinacion entre URL + Verbo HTTP + Logica
=====================*/
app.get("/", (req, res) => {
	res.send("Hola mundo desde un servidor de Express.js");
});


// Rutas API Rest
app.use("/api/products", productRoutes); // Ahora todas las peticiones que apunten a /api/products las redirigimos a product.routes
// app.use("/dashboard", viewRoutes);


/* Vistas EJS -> en src/views/index.ejs
app.get("/dashboard/principal", async (req, res) => {
	const [rows] = await connection.query(`SELECT * FROM products`);

	// Devolvemos el HTML con los propios productos
	res.render({
		vista: index
		productos: rows
	})
});


app.get("/login")
*/

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});