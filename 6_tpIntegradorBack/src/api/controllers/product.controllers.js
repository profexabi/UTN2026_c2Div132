import connection from "../database/db.js";


///////////////////
// GET all products -> Obtener todos los productos

export const getAllProducts = async (req, res) => {
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
}



///////////////////
// GET product by id -> Obtener producto por id

export const getProductById = async (req, res) => {
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
        });
    }
}



///////////////////
// POST product -> Crear producto

export const createProduct = async (req, res) => {

    // Optimizacion 1: Validamos los productos con el middleware validateProduct

    // Optimizacion 2: Manejamos errores con try...catch
    try {
        const { category, image, name, price } = req.body;

        const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)"

        const [rows] = await connection.query(sql, [name, image, category, price]);

        res.status(201).json({
            message: "Producto creado con exito",
            productId: rows.insertId // Devolvemos el id que se acaba de asignar al prod
        });

    } catch (error) {
        console.log("Error creando producto: ", error);

        // Optimizacion 3: Devolvemos error 500 si algo fallo en la conexion
        // Ej: Fallo la conexion a la BBDD, tardo demasiado, la tabla no existe, error de sintaxis
        res.status(500).json({
            message: "Error interno del servidor al crear un producto"
        });
    }
}



///////////////////
// PUT product -> Modificar producto

export const modifyProduct = async (req, res) => {
    // Optimizacion 1: Validar el envio del formulario con el middleware validateProduct

    // Optimizacion 2: Manejamos los errores con try...catch 
    try {
        const { id, name, image, price, category } = req.body;

        const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";

        const [result] = await connection.query(sql, [name, image, price, category, id]);

        console.log(result);

        // Optimizacion 4: Verificamos si realmente se actualizo algo
        if (result.changedRows === 0) {
            return res.status(404).json({
                message: `No se actualizo el producto`
            });
        }

        res.status(200).json({
            message: `Producto con id ${id} actualizado correctamente`
        });


    } catch (error) {
        console.log("Error modificando producto: ", error);

        // Optimizacion 3: Devolvemos error 500 si algo fallo en la conexion
        // Ej: Fallo la conexion a la BBDD, tardo demasiado, la tabla no existe, error de sintaxis
        res.status(500).json({
            message: "Error interno del servidor al modificar un producto"
        });
    }
}



///////////////////
// DELETE product -> Eliminar producto

export const removeProduct = async (req, res) => {
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
}