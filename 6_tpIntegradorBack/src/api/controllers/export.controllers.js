/*===============================
	Controladores de exportacion
===============================*/
import ExcelJS from "exceljs"; // Importamos ExcelJS
import ProductModels from "../models/product.models.js"; // Importamos los modelos

// https://www.npmjs.com/package/exceljs
// npm i exceljs

export const excelProducts = async (req, res) => {
    try {
        // Obtenemos todos los productos
        const [rows] = await ProductModels.selectAllProducts();

        // Creamos un libro de excel y una hoja
        const workbook = new ExcelJS.Workbook(); // Crea un nuevo archivo de Excel en memoria "un libro"
        const worksheet = workbook.addWorksheet("Productos")

        // Encabezados
        worksheet.columns = [ // Definimos las columnas de las hojas
            { header: "ID", key: "id", width: 10 },
            { header: "Nombre", key: "name", width: 50 },
            { header: "Precio", key: "price", width: 20 },
        ];

        // Agregamos los datos, inserta cada registro como un nueva fila en la hoj
        rows.forEach(row => worksheet.addRow(row)); // Recorremos todos los registros que nos provee la BBDD

        // Configuramos la respuesta HTTP para la descarga
        res.setHeader( // Definimos las cabeceras HTTP para que el navegador sepa que la respuesta es un archivo de excel
            "Content-Type", // Tipo MIME oficial para archivos ".xlsx"
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        // Enviamos el archivo y esperamos a que escriba el contenido del libro excel en la respuesta HTTP
        await workbook.xlsx.write(res); // Esperamos a que se complete la escritura antes de continuar

        res.end(); // Cerramos la conexion HTTP, proporcionando una respuesta

    } catch (error) {
        console.log("Error descargando excel de productos: ", error);

        res.status(500).json({
            message: "Error interno del servidor al obtener productos activos"
        });
    }
}