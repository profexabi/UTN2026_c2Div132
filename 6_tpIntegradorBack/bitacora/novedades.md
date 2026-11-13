# `nodemon` y `node --watch`
Ambas utilidades hacen lo mismo, es un servicio que se ejecuta en segundo plano, un "daemon" y estan atentos a un cambio en nuestro proyecto para reiniciar el servidor.

Ahora cuando guardemos un cambio, no tenemos que tirar abajo el servidor y volverlo a levantar. Historicamente se usa nodemon, desde hace poco se integro esto de forma nativa en node con `node --watch`

---

# Generando el `__dirname` a mano en ESM, novedades desde Node `22.*`
Para Node.js 22 o superior, usando ESM, puedes simplificar bastante tu código aprovechando una propiedad nativa de `import.meta`: `import.meta.dirname`.

Ya no necesitas importar `fileURLToPath` ni `dirname` para obtener el directorio del módulo actual.

Además, puedes conservar `join` para construir rutas.

## Versión optimizada (Node.js 22+)

js

```js
import { join } from "node:path";

// Directorio raíz del servidor
const __dirname = join(import.meta.dirname, "../../../");

export {
    __dirname,
    join
};
```

Menos dependencias y código más limpio### ¿Qué optimizamos?

| Código anterior | Código nuevo |
| --- | --- |
| `fileURLToPath(import.meta.url)` | `import.meta.dirname` |
| `dirname(__filename)` | Ya no es necesario |
| `import { dirname, join } from "path"` | `import { join } from "node:path"` |

## Importante: versión mínima recomendada

Aunque `import.meta.dirname` existe desde Node 20.11, en Node 22 dejó de ser experimental a partir de Node 22.16.0.

Node.js v22.23.5 Documentation

+1

Por eso, mi recomendación es:

- Node 22.16+: puedes usar la versión simplificada.
- Node 22.0–22.15: utiliza la implementación anterior o una alternativa compatible.
- Node 24+: también puedes utilizarla sin problemas.

## Una mejora adicional

Si quieres evitar incluso `join`, puedes utilizar `resolve` para expresar mejor que estás construyendo una ruta absoluta:

js

```js
import { resolve, join } from "node:path";

const ROOT_DIR = resolve(import.meta.dirname, "../../../");

export {
    ROOT_DIR,
    join
};
```

Personalmente, prefiero esta última versión por tres motivos:

1. `ROOT_DIR` comunica claramente qué representa la constante.
2. `resolve()` expresa explícitamente la intención de obtener una ruta absoluta.
3. `node:path` utiliza el esquema moderno de importación de módulos nativos.

Mi elección: Node.js 24 LTS + ESM + `import.meta.dirname` + `resolve()`.

Una última consideración: si `utils/api/src` es la estructura real de tu proyecto, los tres niveles de retroceso deben llevar efectivamente a la raíz. `resolve()` no cambia esa lógica, solamente normaliza la ruta.
