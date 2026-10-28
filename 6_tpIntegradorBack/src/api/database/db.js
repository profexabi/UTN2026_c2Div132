// Importamos el modulo mysql2 en modo promesas para poder hacer peticiones asincronas a la BBDD
import mysql2 from "mysql2/promise";

// Importamos de environments la info de la conexion a la BBDD
import environments from "../config/environments.js";

// Usamos el destructuring para extraer el objeto database
const { database } = environments;


// Creamos la conexion a la BBDD (crear un grupo de conexiones o pool)
const connection = mysql2.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

// Exportamos el pool de conexiones para que pueda ser usado en otros archivos
export default connection;

/*
Un pool de conexiones es un conjunto de conexiones activas y reutilizables a la BBDD, el pool:

    - Mantiene abiertas varias conexiones
    - Las reutiliza para distintas consultas
    - Mejora el rendimiento y la eficiencia del servidor
    - Controla cuantas conexiones pueden usarse al mismo tiempo

    - Evita crear y destruir conexiones constantemente
    - Reduce la carga en la BBDD
    - Mejora la velocidad y capacidad de respuesta de la app

*/