/*=====================
	Importaciones
=====================*/
import express from "express"; // Importamos express luego de instalarlo con npm i express
import environments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";
import cors from "cors";

const app = express(); // Creamos una instancia de aplicacion de express en app
const PORT = environments.port;



/*=====================
	Middlewares -> Funciones que se ejecutan entre la req y la res
=====================*/
app.use(cors()); // Middleware CORS basico para permitir todas las solicitudes

// Middleware logger para mostrar por consola las solicitudes de nuestro servidor
app.use((req, res, next) => {
	let fecha = new Date();
    console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
    
	next(); // Pasamos al siguiente middleware o a la respuesta
});




/*=====================
	Endpoints -> Combinacion entre URL + Verbo HTTP + Logica
=====================*/
app.get("/", (req, res) => {
	res.send("Hola mundo desde un servidor de Express.js");
});


// GET all products
app.get("/api/products", async (req, res) => {
	const [rows, tables] = await connection.query("SELECT * FROM products");
	// console.log(rows);

	res.status(200).json({
		payload: rows
	});
});


// GET product by id
app.get("/api/products/:id", async (req, res) => {

	const id = req.params.id;
	// req.body -> de aca recibiremos la info de los <form>
	// console.log(id);

	const [rows] = await connection.query(`SELECT * FROM products WHERE products.id = ${id}`);

	// console.log(rows);
	res.status(200).json({
		payload: rows
	});
});


// app.post("/api/products")

// app.put("/api/products/:id")

// app.delete("/api/products/:id")


/* Vistas EJS -> en src/views/index.ejs
app.get("/dashboard/principal", async (req, res) => {
	const [rows] = await connection.query(`SELECT * FROM products`);

	// Devolvemos el HTML con los propios productos
	res.render({
		vista: index
		productos: rows
	})
});
*/

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});