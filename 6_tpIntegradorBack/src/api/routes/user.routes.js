/*=======================
    Rutas de usuario
=======================*/

import { Router } from "express"; // Importamos el middleware Router para gestionar las rutas
import { createUserAdmin } from "../controllers/user.controllers.js";
const router = Router(); // Funciona igual que una miniaplicacion de express


router.post("/", createUserAdmin);


export default router;