/*==========================
	Modelos de usuario
==========================*/
import connection from "../database/db.js";


/////////////////////////////
// Obtener usuario admin
const selectAdminUser = (email) => {
    // Nos comunicamos con la BBDD
    const sql = "SELECT * FROM users WHERE email = ?";
    return connection.query(sql, [email]);
}


////////////////////////////
// Crear usuario admin
const createAdminUser = (name, email, password) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    return connection.query(sql, [name, email, password]);
}



export default {
    selectAdminUser,
    createAdminUser
}