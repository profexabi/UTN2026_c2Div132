// OJOTA! Esto es a partir de Node 22 en adelante, para ver como se hace en versiones anteriores vayan al utils de la comi 131
// https://github.com/profexabi/UTN2026_c2Div131/tree/main/6_tpIntegradorBack/src/api/utils

// Logica para trabajar con archivos y rutas de proyecto
import { join } from "path";

// Apuntar hasta la carpeta raiz del servidor -> "/"
const __dirname = join(import.meta.dirname, "../../../");

export {
    __dirname,
    join
}