/*=======================
	Rutas de producto
=======================*/

import { Router } from "express";
import { vistaConsultar, vistaCrear, vistaEliminar, vistaModificar, vistaProductos } from "../controllers/view.controllers.js";

const router = Router();

// Vista principal
router.get("/principal", vistaProductos);

// Vista consultar
router.get("/consultar", vistaConsultar);

// Vista crear
router.get("/crear", vistaCrear);

// Vista modificar
router.get("/modificar", vistaModificar);


///////////////////
// Vista eliminar
router.get("/eliminar", vistaEliminar)


export default router;