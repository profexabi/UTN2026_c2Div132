/*=======================
	Rutas de producto
=======================*/

import { Router } from "express";
import { vistaConsultar, vistaCrear, vistaEliminar, vistaModificar, vistaProductos } from "../controllers/view.controllers.js";
import { requireLogin } from "../middlewares/middlewares.js";

const router = Router();

// Vista principal
router.get("/principal", requireLogin, vistaProductos);

// Vista consultar
router.get("/consultar", requireLogin, vistaConsultar);

// Vista crear
router.get("/crear", requireLogin, vistaCrear);

// Vista modificar
router.get("/modificar", requireLogin, vistaModificar);

// Vista eliminar
router.get("/eliminar", requireLogin, vistaEliminar);


export default router;