import { Router } from "express"; // Importamos el middleware Router para gestionar las rutas
import { validateId, validateProduct } from "../middlewares/middlewares.js";
import { createProduct, getAllProducts, getProductById, modifyProduct, removeProduct } from "../controllers/product.controllers.js";

const router = Router(); // Funciona igual que una miniaplicacion de express



///////////////////
// GET all products -> Obtener todos los productos

router.get("/", getAllProducts);



///////////////////
// GET product by id -> Obtener producto por id

router.get("/:id", validateId, getProductById);



///////////////////
// POST product -> Crear producto

router.post("/", validateProduct, createProduct);



///////////////////
// PUT product -> Modificar producto

router.put("/", validateProduct, modifyProduct);



///////////////////
// DELETE product -> Eliminar producto

router.delete("/:id", validateId, removeProduct);



// Exportamos todas las peticiones que atiende router
export default router;