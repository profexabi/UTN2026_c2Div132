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

// Parseamos el JSON que enviamos en los formularios para recibirlos como objemos
app.use(express.json()); // Parseamos el JSON recibido en el body automaticamente


/*=====================
	Endpoints -> Combinacion entre URL + Verbo HTTP + Logica
=====================*/
app.get("/", (req, res) => {
	res.send("Hola mundo desde un servidor de Express.js");
});



///////////////////
// GET all products -> Obtener todos los productos
app.get("/api/products", async (req, res) => {
	const [rows, tables] = await connection.query("SELECT * FROM products");
	// console.log(rows);

	res.status(200).json({
		payload: rows
	});
});



///////////////////
// GET product by id -> Obtener producto por id
app.get("/api/products/:id", async (req, res) => {

	const id = req.params.id;
	// req.body -> de aca recibiremos la info de los <form>
	// console.log(id);

	// Gracias a los ? (placeholders) nuestra consulta SQL es mas segura porque evitamos consultas vulnerables
	const sql = "SELECT * FROM products WHERE products.id = ?";
	const [rows] = await connection.query(sql, [id]);

	// console.log(rows);
	res.status(200).json({
		payload: rows
	});
});



///////////////////
// POST product -> Crear producto
app.post("/api/products", async (req, res) => {
	
	// Extraemos los datos del form dentro del cuerpo de la peticion 
	console.log(req.body);
	/*
	{
		category: 'drink',
		image: 'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fw6a3b0hlkifc1.jpeg',
		name: 'Manaos uva',
		price: '1500'
	}
	*/

	const { category, image, name, price } = req.body;

	const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)"

	await connection.query(sql, [name, image, category, price]);

	res.status(201).json({
		message: "Producto creado con exito"
	});
})



///////////////////
// PUT product -> Modificar producto
app.put("/api/products", async (req, res) => {
	
	const { id, name, image, price, category } = req.body;

	const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";

	await connection.query(sql, [name, image, price, category, id]);

	res.status(200).json({
		message: `Producto con id ${id} actualizado correctamente`
	});
})



///////////////////
// DELETE product -> Eliminar producto
app.delete("/api/products/:id", async (req, res) => {

	const id = req.params.id;

	const sql = "DELETE FROM products WHERE id = ?";
	await connection.query(sql, [id]);

	res.status(200).json({
		message: `Producto con id ${id} eliminado correctamente`
	});
});


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