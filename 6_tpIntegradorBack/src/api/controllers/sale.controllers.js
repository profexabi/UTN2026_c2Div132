/*===============================
	Controladores de ventas
===============================*/

import SaleModels from "../models/sale.models.js";

///////////////////
// POST sale -> Crear venta
export const createSale = async (req, res) => {

    try {

        // Recibimos los datos ya parseados del cuerpo de la peticion
        const { date, total_price, user_name, products } = req.body;

        // Validacion minima de datos
        if (!date || !total_price || !user_name || !Array.isArray(products) || products.length ===0 ) {
            return res.status(400).json({
                message: "Datos invalidos. Debes enviar date, total_price, user_name y products como array"
            });
        }

        // 1. INSERTAMOS LA VENTA EN "sales"
        const [saleResult] = await SaleModels.insertNewSale(date, total_price, user_name);

        // 2. OBTENEMOS EL ID DE LA VENTA recien creada
        const saleId = saleResult.insertId; // (igual que haciamos en create product)

        // 3. INSERTAR CADA PRODUCTO EN "product_sales"
        for (const productId of products) {
            await SaleModels.insertIntoProductSales(productId, saleId);
        }
        
        res.status(201).json({
            message: "Venta registrada con exito"
        });


    } catch (error) {
        console.log("Error creando venta: ", error);

        res.status(500).json({
            message: "Error interno del servidor al crear un producto"
        });
    }
}