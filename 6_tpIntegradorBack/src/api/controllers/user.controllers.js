/*===============================
	Controladores de usuario
===============================*/

import UserModels from "../models/user.models.js";
import bcrypt from "bcrypt"; // Importamos bcrypt

// Creacion de usuarios admin
export const createUserAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Si faltara algun campo de informacion en el form, lo vemos en la vista en un parrafo de error
        if (!name || !email || !password) {
            return res.render("post", {
                title: "Crear",
                error: "Todos los campos son obligatorios al crear un admin"
            });
        }


        // Indicamos las rondas de sal (cantidad de veces que aleatorizamos los caracteres)
        const saltRounds  = 10;

        // Hasheamos (ciframos) el password recibido en el req.body (ej: hasheamos "homero")
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const [rows] = await UserModels.createAdminUser(name, email, hashedPassword);

        return res.render("post", {
            title: "Crear",
            exito: "Usuario creado exitosamente"
        });
        

    } catch (error) {
        console.log("Error en el registro de usuarios admin: ", error);

        res.status(500).json({
            message: "Error interno del servidor al crear usuario admin"
        });
    }
}