/*==========================
	Modelos de producto
==========================*/
import connection from "../database/db.js";



/////////////////////////////
// Traer productos activos
const selectActiveProducts = () => {
    const sql = "SELECT id, name, price, image FROM products WHERE products.active = 1";
    return connection.query(sql);
}



/////////////////////////////
// Traer todos los productos
const selectAllProducts = () => {
    // Optimizacion 2: Solo devolvemos los campos necesarios, no todo
    const sql = "SELECT id, name, price, image FROM products";
    return connection.query(sql);
};



///////////////////////////
// Traer producto por id
const selectProductById = (id) => {
    // Optimizacion 3: Solo devolvemos los campos necesarios, no todo
    // Gracias a los ? (placeholders) nuestra consulta SQL es mas segura porque evitamos consultas vulnerables
    const sql = "SELECT id, name, price, image, active FROM products WHERE products.id = ?";
    return connection.query(sql, [id]);
}



///////////////////////////
// Crear nuevo producto
const insertNewProduct = (name, image, category, price) => {

    const sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)"
    return connection.query(sql, [name, image, category, price]);
}



///////////////////////////
// Actualizar producto
const updateProduct = (name, image, price, category, active, id) => {
    const sql = "UPDATE products SET name = ?, image = ?, price = ?, category = ?, active = ? WHERE id = ?";

    return connection.query(sql, [name, image, price, category, active, id]);
}



///////////////////////////
// Eliminar producto
const deleteProduct = (id) => {
    const sql = "DELETE FROM products WHERE id = ?";
    return connection.query(sql, [id]);
}



export default {
    selectAllProducts,
    selectProductById,
    insertNewProduct,
    updateProduct,
    deleteProduct,
    selectActiveProducts
}