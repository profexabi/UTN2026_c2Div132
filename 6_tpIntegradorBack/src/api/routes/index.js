// Este sera nuestro archivo de barril que centraliza o "arrastra" todas las rutas. Importa las rutas con un nombre y las exporta con el mismo nombre
import productRoutes from "./product.routes.js"; // Importamos las rutas de product.routes con este nombre
import viewRoutes from "./view.routes.js";
import authRoutes from "./auth.routes.js"; // Importamos las vistas de autenticacion
import userRoutes from "./user.routes.js";
import saleRoutes from "./sale.routes.js";
import exportRoutes from "./export.routes.js";

// Exportamos todas las rutas
export {
    productRoutes,
    viewRoutes,
    authRoutes,
    userRoutes,
    saleRoutes,
    exportRoutes
}