// Importamos el modulo para poder cargar y exportar las variables de entorno
import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Exportamos anonimamente el valor de las variables del .env
export default {
    port: process.env.PORT,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}