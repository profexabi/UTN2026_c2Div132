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