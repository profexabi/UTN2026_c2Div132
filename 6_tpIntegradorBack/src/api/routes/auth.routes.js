/*============================
	Rutas de autenticacion
============================*/
import { Router } from "express";
import connection from "../database/db.js";
const router = Router();

///////////////////////
// Redirigimos a login hasta la ruta raiz "/"
router.get("/", (req, res) => {
    res.redirect("/login");
})


///////////////////////
// Vista del login
router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login Admin",
        about: "Introduzca sus credenciales"
    })
});


//////////////////////////
// Funcionalidad login
router.post("/login", async (req, res) => {
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


        // Nos comunicamos con la BBDD
        const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        const [rows] = await connection.query(sql, [email, password]);
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

        // Guardo la sesion
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email
        }

        // Guardada la sesion, redirijo a la vista /dashboard/principal
        res.redirect("/dashboard/principal");

        // TO DO, desacoplar esto, crear controladores y modelos
        // hacer /logout


    } catch (error) {
        console.log("Error en el login: ", error);

        res.status(500).json({
            message: "Error interno del servidor al hacer login"
        });
    }
})


export default router;