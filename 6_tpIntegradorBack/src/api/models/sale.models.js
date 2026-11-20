/*==========================
    Modelos de ventas
==========================*/
import connection from "../database/db.js";


/////////////////////////////
// Insertamos nueva venta
const insertNewSale = (date, total_price, user_name) => {
    // Insertamos la venta en la tabla 'sales'
    const sql = "INSERT into sales (date, total_price, user_name) values (?, ?, ?)";
    return connection.query(sql, [date, total_price, user_name]);
}

/////////////////////////////
// Insertamos en product_sales
const insertIntoProductSales = (productId, saleId) => {
    const sql = "INSERT INTO product_sales (product_id, sale_id) VALUES (?, ?)";
    return connection.query(sql, [productId, saleId]);
}


export default {
    insertNewSale,
    insertIntoProductSales
}