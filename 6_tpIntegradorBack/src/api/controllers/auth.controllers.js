/*===============================
	Controladores de autenticacion
===============================*/

import UserModels from "../models/user.models.js";
import bcrypt from "bcrypt"; // Importamos bcrypt


///////////////////
// Vista login
export const vistaLogin = (req, res) => {
    res.render("login", {
        title: "Login Admin",
        about: "Introduzca sus credenciales"
    })
}



//////////////////////////
// Login usuario admin
export const loginUserAdmin = async (req, res) => {
    try {

        /* Podemos recibir los datos de email y password de login.ejs ya como un objeto 
        app.use(express.urlencoded({extended: true}));*/
        const { email, password } = req.body;
        // console.table(req.body);

        // Evitamos una consulta innecesaria a la BBDD
        if (!email || !password) {
            return res.render("login", {
                title: "Login Admin",
                about: "Introduzca sus credenciales",
                error: "Todos los campos son obligatorios"
            });
        }

        // Ahora con bcrypt traemos solamente el usuario que tenga ese amil
        const [rows] = await UserModels.selectAdminUser(email);
        console.log(rows);


        // Si no existe el usuario admin
        if (rows.length === 0) {
            return res.render("login", {
                title: "Login Admin",
                about: "Introduzca sus credenciales",
                error: "No existe usuario admin"
            });
        }

        // En caso de que exista el usuario, lo guardo en la variable user
        const user = rows[0];

        // Traido el usuario admin, vamos a comparar si hasheando su password coincide con el hash guardado en la BBDD
        // Comparara si el hash de la contraseña del req.body coincide con el guardado
        const match = await bcrypt.compare(password, user.password); 
        console.log(match);

        if (match) {
            // Si coinciden los passwords hasheados
            
                    // Guardo la sesion
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
            
                    // Guardada la sesion, redirijo a la vista /dashboard/principal
                    return res.redirect("/dashboard/principal");


        } else {
            // Si no coinciden los passwords hasheados
            return res.render("login", {
                title: "Login Admin",
                about: "Introduzca sus credenciales",
                error: "Contraseña invalida"
            });
            
        }


    } catch (error) {
        console.log("Error en el login: ", error);

        res.status(500).json({
            message: "Error interno del servidor al hacer login"
        });
    }
}



//////////////////////////
// Logout admin
export const logoutUserAdmin = (req, res) => {
    
    // Destruimos la sesion existente
    req.session.destroy((err) => {
        if (err) {
            console.log("Error al destruir la sesion: ", err);
            return res.status(500).json({
                message: "Error al destruir la sesion"
            });
        }

        // Eliminada exitosamente la sesion, redirigimos a login
        res.redirect("/login");
    });
}