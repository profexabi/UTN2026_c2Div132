/*============================
	Rutas de autenticacion
============================*/
import { Router } from "express";
import { loginUserAdmin, logoutUserAdmin, vistaLogin } from "../controllers/auth.controllers.js";
const router = Router();

///////////////////////
// Redirigimos a login hasta la ruta raiz "/"
router.get("/", vistaLogin);


///////////////////////
// Vista del login
router.get("/login", vistaLogin);


//////////////////////////
// Funcionalidad login
router.post("/login", loginUserAdmin);


//////////////////////////
// Funcionalidad logout
router.post("/logout", logoutUserAdmin);


export default router;