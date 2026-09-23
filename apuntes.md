# Atajos VSCode / VSCodium
## [Atajos de VSCode para Linux](https://docs.google.com/viewer?url=https%3A%2F%2Fraw.githubusercontent.com%2FLautaroSantiago%2FProgramacion_III%2Fmaster%2FMaterial%2Fkeyboard-shortcuts-linux.pdf&authuser=2)
## 40 atajos comunes de VS Code

 > Para **Windows/Linux**. En macOS, normalmente `Ctrl` → `Cmd` y `Alt` → `Option`.

 | # | Atajo | Acción |
| --- | --- | --- |
| 1 | `Ctrl + P` | Buscar y abrir archivos |
| 2 | `Ctrl + Shift + P` | Abrir la paleta de comandos |
| 3 | `Ctrl + S` | Guardar archivo |
| 4 | `Ctrl + W` | Cerrar pestaña |
| 5 | `Ctrl + Shift + T` | Reabrir pestaña cerrada |
| 6 | `Ctrl + Tab` | Cambiar entre pestañas |
| 7 | `Ctrl + F` | Buscar en el archivo |
| 8 | `Ctrl + H` | Buscar y reemplazar |
| 9 | `Ctrl + G` | Ir a una línea |
| 10 | `Ctrl + /` | Comentar/descomentar línea |
| 11 | `Shift + Alt + F` | Formatear documento |
| 12 | `Ctrl + D` | Seleccionar siguiente coincidencia |
| 13 | `Ctrl + Shift + L` | Seleccionar todas las coincidencias |
| 14 | `Ctrl + L` | Seleccionar línea |
| 15 | `Shift + Alt + ↓` | Duplicar línea hacia abajo |
| 16 | `Shift + Alt + ↑` | Duplicar línea hacia arriba |
| 17 | `Alt + ↑` | Mover línea hacia arriba |
| 18 | `Alt + ↓` | Mover línea hacia abajo |
| 19 | `Shift + Alt + ↓` | Copiar línea hacia abajo |
| 20 | `Shift + Alt + ↑` | Copiar línea hacia arriba |
| 21 | `Ctrl + Shift + K` | Eliminar línea |
| 22 | `Ctrl + Enter` | Insertar línea debajo |
| 23 | `Ctrl + Shift + Enter` | Insertar línea encima |
| 24 | `Home` | Ir al inicio de la línea |
| 25 | `End` | Ir al final de la línea |
| 26 | `Ctrl + Home` | Ir al inicio del archivo |
| 27 | `Ctrl + End` | Ir al final del archivo |
| 28 | `Ctrl + ← / →` | Saltar entre palabras |
| 29 | `Shift + Alt + →` | Expandir selección |
| 30 | `Shift + Alt + ←` | Reducir selección |
| 31 | `Ctrl + Z` | Deshacer |
| 32 | `Ctrl + Y` | Rehacer |
| 33 | `Ctrl + X` | Cortar |
| 34 | `Ctrl + C` | Copiar |
| 35 | `Ctrl + V` | Pegar |
| 36 | `Ctrl + B` | Mostrar/ocultar barra lateral |
| 37 | ``Ctrl + ` `` | Abrir/cerrar terminal |
| 38 | `Ctrl + Shift + E` | Mostrar explorador de archivos |
| 39 | `Ctrl + Shift + F` | Buscar en todo el proyecto |
| 40 | `Ctrl + Shift + G` | Abrir control de código fuente (Git) |

### ⭐ Los 10 que conviene memorizar primero

 1. `Ctrl + P` — abrir archivos rápidamente.
2. `Ctrl + Shift + P` — buscar cualquier comando.
3. `Ctrl + /` — comentar código.
4. `Ctrl + D` — seleccionar coincidencias.
5. `Alt + ↑ / ↓` — mover líneas.
6. `Shift + Alt + ↓` — duplicar líneas.
7. `Ctrl + Shift + K` — eliminar línea.
8. `Shift + Alt + F` — formatear código.
9. `Ctrl + Shift + F` — buscar en todo el proyecto.
10. ``Ctrl + ` `` — abrir la terminal.

---

# Diferencia entre `shell`, `bash` y `zsh`
La diferencia clave es que **“shell” es el concepto general**, mientras que **Bash y Zsh son shells concretos**.

 ### 🐚 Shell

 Una **shell** es un programa que interpreta los comandos que escribís y los ejecuta en el sistema operativo.

 Por ejemplo:

```
ls
cd documentos
mkdir proyecto
```

 Hay diferentes shells: **Bash, Zsh, Fish, Dash, Ksh**, etc.

 Podés pensarlo como:

 > **Shell = categoría de programas que sirven para interactuar con el sistema mediante comandos.**

 ### 🐚 Bash

 **Bash** significa **Bourne Again SHell**.

 Es una de las shells más utilizadas, especialmente en Linux. Es compatible con gran cantidad de scripts existentes y suele ser la opción estándar en muchos servidores.

 Ejemplo:

```
#!/bin/bash

nombre="Juan"
echo "Hola $nombre"
```

 Características importantes:

 - Muy extendido.
- Excelente compatibilidad con scripts existentes.
- Muy utilizado en servidores y administración de sistemas.
- Tiene scripting bastante potente.
- Es descendiente de la shell `sh`.

 ### 🐚 Zsh

 **Zsh (Z shell)** es otra shell, similar a Bash pero con características adicionales orientadas especialmente a la interacción diaria en la terminal.

 Ejemplo:

```
nombre="Juan"
echo "Hola $nombre"
```

 Algunas ventajas:

 - Autocompletado más avanzado.
- Mejor manejo de historial.
- Glob patterns más potentes.
- Muchas posibilidades de personalización.
- Ecosistema de plugins muy popular.
- Es la shell predeterminada de macOS desde Catalina.

 Por ejemplo, muchos usuarios utilizan Zsh junto con **Oh My Zsh** para personalizar el prompt y agregar plugins.

 ### 🔥 Entonces, ¿cuál es la diferencia?

 | Concepto | Qué es |
| --- | --- |
| **Shell** | Categoría/concepto general |
| **Bash** | Una shell concreta |
| **Zsh** | Otra shell concreta |

Una analogía:

 > **Shell** es como "lenguaje de programación".\
>  **Bash** y **Zsh** serían dos lenguajes concretos dentro de esa categoría.

 Aunque Bash y Zsh son muy parecidos, **no son exactamente el mismo lenguaje** y algunos scripts/comandos pueden comportarse diferente.

 ### ¿Y la terminal?

 Esto suele generar otra confusión:

 **Terminal ≠ Shell.**

 Por ejemplo, podés tener:

```
Terminal
   ↓
Zsh
   ↓
Sistema operativo
```

 La **terminal** es la aplicación/interfaz que te permite interactuar con la shell. La **shell** es la que interpreta lo que escribís.

 En macOS podrías tener:

```
Terminal.app → Zsh
iTerm2       → Zsh
```

 Las dos aplicaciones son terminales, pero ambas pueden ejecutar la misma shell: Zsh.

 Si estás aprendiendo Linux/Unix, una buena forma de entenderlo es también diferenciar **`sh`, Bash, Zsh y Fish**, porque ahí aparece la cuestión de **compatibilidad de scripts**.