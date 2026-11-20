/*=======================
	Rutas de producto
=======================*/

import { Router } from "express";
import { createSale } from "../controllers/sale.controllers.js";
const router = Router();

router.post("/", createSale);

export default router;