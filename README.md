# Progra III Div132 2026 c2


## *Fecha entrega TP Integrador -> hasta el viernes 4 diciembre 08:29*

## Entendiendo el backend
- [Playlist de Programación Web de Todocode](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV)
    - Arquitectura cliente servidor
    - Protocolo HTTP
    - Que es JSON
    - Que son las APIs

- [Protocolo HTTP y Lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)


---

## Fechas importantes
- **1er parcial hasta JavaScript VI (Manipulacion del DOM)**
- 1er Parcial sincronico: 16 - 08:30
- Recuperatorio 1er parcial: 23 - 08:30 en tiempo de clase

## Proxima clase
- La tarea para la proxima clase sera tener instalado [Node.js y NPM](https://nodejs.org/es/download)

- Publicar excel de grupos para el TP Integrador



---

## Recursos
- [Se termino lo de la IA reemplazando devs](https://www.youtube.com/watch?v=KQgATAU6ztU)

# Cronograma clases


## Pendientes
- Diferencia rest operator y spread operator
- Closures
- JavaScript como lenguaje monohilo
- Event Loop
- Comprender mas en profundidad el lenguaje y el entorno de ejecucion


---

## Videos generales
- [amigoscode / se termino lo de la ia reemplazando desarrolladores](https://www.youtube.com/watch?v=KQgATAU6ztU)
- [Fuck it, make it anyway](https://www.joelotter.com/posts/2026/09/make-it-anyway/)

---

## Clase 1
- HTML hasta [Elementos en Bloque y Elementos en Linea](https://www.w3schools.com/html/html_blocks.asp)
- **Recordatorio: TODAS las etiquetas en linea iran siempre dentro de etiquetas en bloque. [Leccion W3 Schools](https://www.w3schools.com/html/html_formatting.asp)**
- Practica sugerida
    - Hacer una receta de su plato favorito usando las etiquetas HTML que vimos en clase
    - [Ej de receta](https://comedera.com/receta-de-chipa-pan-paraguayo/)

- Repasar Git

- Proxima clase, repasar dudas hasta elementos en bloque y en linea.
- Continuamos desde HTML tables, listas y contenedores

---

## Practicar con Git
- Instalar [Git Bash](https://git-scm.com/install/windows)
- Repasar para las próximas clases los [apuntes de Git](https://drive.google.com/drive/u/1/folders/1T1LEYs_H-NACabUJcdTXjodw8il6ZDsf)

### Guia rapida Git
1. Abrimos la consola de VSCode `Ctrl + j`
2. Elegimos la terminal en el menu `Git Bash`
3. Practicamos con los comandos esenciales de Git
    - (Para la primera vez) Creamos un repo en github y le damos a clone
    ```sh
    git clone https://github.com/profexabi/UTN2026_c2Div131.git
    ```

    - (Siempre antes de trabajar)
    ```sh
    # Comprobamos que no tenemos cambios sin guardar
    git status

    # Traemos los ultimos cambios
    git pull
    ```

    - Hacemos los cambios pertinentes en nuestro repo, y una vez que terminamos
    ```sh
    # Comprobamos el estado
    git status

    # Para guardar todo
    git add .

    # Registramos los cambios guardados con un mensaje
    git commit -m "Hecho cambio x, ble"

    # Ya con los cambios registrados, enviamos este codigo a nuestro repo
    git push origin main
    ```

