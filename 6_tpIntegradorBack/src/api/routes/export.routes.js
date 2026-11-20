/*============================
    Rutas de exportacion
============================*/
import { Router } from "express";
import { excelProducts } from "../controllers/export.controllers.js";
const router = Router();

router.get("/products", excelProducts);

export default router;