/*===============================
	Controladores de producto
===============================*/
import ProductModels from "../models/product.models.js"; // Importamos los modelos



///////////////////
// GET active products -> Obtener todos los productos activos
export const getActiveProducts = async (req, res) => {
    try {
        const [rows] = await ProductModels.selectActiveProducts();

        if (rows.length === 0) {
            return res.status(404).json({
                message: "No hay productos activos"
            });
        }


        res.status(200).json({
            payload: rows
        })

    } catch (error) {
        console.log("Error obteniendo productos activos: ", error);

        res.status(500).json({
            message: "Error interno del servidor al obtener productos activos"
        });
    }
}



///////////////////
// GET all products -> Obtener todos los productos

export const getAllProducts = async (req, res) => {
    // Optimizacion 1: Manejamos errores con try...catch
    try {
        
        // El controlador llama al modelo
        const [rows, tables] = await ProductModels.selectAllProducts();


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
        });
    }
}



///////////////////
// GET product by id -> Obtener producto por id

export const getProductById = async (req, res) => {
    // Optimizacion 1: validamos el id y lo agregamos a req.id con el middleware validateId

    // Optimizacion 2: manejo de errores con try...catch
    try {

        const [rows] = await ProductModels.selectProductById(req.id);


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

        const [rows] = await ProductModels.insertNewProduct(name, image, category, price);


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
        const { id, name, image, price, category, active } = req.body;

        const [result] = await ProductModels.updateProduct(name, image, price, category, active, id);

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
        
        await ProductModels.deleteProduct(req.id);

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