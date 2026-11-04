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

// Middleware para filtrar ids no validos
const validateId = (req, res, next) => {
	const id = Number(req.params.id); // Pasamos a number el id del parametro

	// Si el id no es un numero entero o es <= 0
	if (!Number.isInteger(id) || id <= 0) {
		return res.status(404).json({
			message: "El id debe ser un numero entero positivo"
		})
	}

	req.id = id;
	next();
}



/*=====================
	Endpoints -> Combinacion entre URL + Verbo HTTP + Logica
=====================*/
app.get("/", (req, res) => {
	res.send("Hola mundo desde un servidor de Express.js");
});



///////////////////
// GET all products -> Obtener todos los productos
app.get("/api/products", async (req, res) => {
	// Optimizacion 1: Manejamos errores con try...catch
	try {
		// Optimizacion 2: Solo devolvemos los campos necesarios, no todo
		const sql = "SELECT id, name, price, image FROM products";
		const [rows, tables] = await connection.query(sql);
		
		// Optimizacion 3: Devolvemos 404 si no hay productos
		if (rows.length === 0) {
			return res.status(404).json({
				message: "No se encontraron productos"
			});
		}
	
		res.status(200).json({
			payload: rows,
		});

	} catch (error) {
		console.log("Error obteniendo productos: ", error);

		// Optimizacion 4: Devolvemos error 500 si algo fallo en la conexion
		// Ej: Fallo la conexion a la BBDD, tardo demasiado, la tabla no existe, error de sintaxis
		res.status(500).json({
			message: "Error interno del servidor al obtener productos"
		})
	}
});



///////////////////
// GET product by id -> Obtener producto por id
app.get("/api/products/:id", validateId, async (req, res) => {
	// Optimizacion 1: validamos el id y lo agregamos a req.id con el middleware validateId

	// Optimizacion 2: manejo de errores con try...catch
	try {

		// Optimizacion 3: Solo devolvemos los campos necesarios, no todo
		// Gracias a los ? (placeholders) nuestra consulta SQL es mas segura porque evitamos consultas vulnerables
		const sql = "SELECT id, name, price, image FROM products WHERE products.id = ?";
		const [rows] = await connection.query(sql, [req.id]);


		// Optimizacion 4: Devolvemos 404 si no existe producto con ese id
		if (!rows.length) { // Forma mas optima? en lugar de rows.length === 0
			return res.status(404).json({
				message: `No se encontro producto con id ${req.id}`
			});
		}

		// console.log(rows);
		res.status(200).json({
			payload: rows
		});

	} catch (error) {
		console.log("Error obteniendo producto: ", error);

		// Optimizacion 4: Devolvemos error 500 si algo fallo en la conexion
		// Ej: Fallo la conexion a la BBDD, tardo demasiado, la tabla no existe, error de sintaxis
		res.status(500).json({
			message: "Error interno del servidor al obtener producto por id"
		})
	}

	
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
app.delete("/api/products/:id", validateId, async (req, res) => {
	// Optimizacion 1: Usar el middleware validateId

	// Optimizacion 2: Manejo de errores
	try {
		const sql = "DELETE FROM products WHERE id = ?";
		await connection.query(sql, [req.id]);
	
		res.status(200).json({
			message: `Producto con id ${req.id} eliminado correctamente`
		});

	} catch (error) {
		console.log("Error eliminando producto: ", error);

		// Optimizacion 3: Devolvemos error 500 si algo fallo en la conexion
		// Ej: Fallo la conexion a la BBDD, tardo demasiado, la tabla no existe, error de sintaxis
		res.status(500).json({
			message: "Error interno del servidor al eliminar producto"
		});
	}

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