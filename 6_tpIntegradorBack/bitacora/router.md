# Que es `Router`?
En Express.js, `Router` es una herramienta que permite organizar las rutas de una aplicación en diferentes módulos, separándolas según su funcionalidad.

En otras palabras, te permite agrupar rutas relacionadas para mantener tu código ordenado y reutilizable.

## 1. ¿Para qué sirve Router?

Imaginá que estás desarrollando una API para una tienda online. Tenés diferentes rutas:

- `/usuarios`
- `/productos`
- `/pedidos`

En lugar de definir todas las rutas en un único archivo, podés separarlas usando `Router`.

## 2. Ejemplo práctico

Paso 1. Crear un router para usuarios

Archivo: `routes/usuarios.js`

javascript

```javascript
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

router.get('/:id', (req, res) => {
    res.send(`Usuario ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('Crear usuario');
});

module.exports = router;
```

Paso 2. Utilizar el router en la aplicación principal

Archivo: `app.js`

javascript

```javascript
const express = require('express');

const app = express();

const usuariosRouter = require('./routes/usuarios');

app.use('/usuarios', usuariosRouter);

app.listen(3000, () => {
    console.log('Servidor funcionando');
});
```

## 3. ¿Qué significa `app.use('/usuarios', usuariosRouter)`?

Esta línea es muy importante:

javascript

```javascript
app.use('/usuarios', usuariosRouter);
```

Significa que todas las rutas definidas dentro de `usuariosRouter` van a comenzar con `/usuarios`.

Por ejemplo:

| Ruta del router | Ruta completa |
| --- | --- |
| `router.get('/')` | `/usuarios` |
| `router.get('/:id')` | `/usuarios/:id` |
| `router.post('/')` | `/usuarios` |

## 4. ¿Por qué se dice que Router es un middleware?

Porque un Router funciona como un middleware de Express: se puede montar dentro de la aplicación mediante `app.use()` y participa en el procesamiento de las solicitudes HTTP.

Además, puede tener sus propios middlewares:

javascript

```javascript
const router = express.Router();

router.use((req, res, next) => {
    console.log('Pasó por el router de usuarios');
    next();
});
```

En este caso:

- `router.use()` ejecuta un middleware para las rutas de ese router.
- `next()` permite continuar con el siguiente middleware o ruta.

## 5. Diferencia entre `app` y `Router`

| `app` | `Router` |
| --- | --- |
| Es la aplicación principal de Express. | Es un enrutador modular. |
| Configura el servidor. | Organiza rutas específicas. |
| Utiliza `app.listen()`. | No tiene `listen()`. |
| Puede montar routers. | Puede contener rutas y middlewares. |

En resumen: `express.Router()` permite dividir las rutas de tu aplicación en archivos independientes, organizarlas por funcionalidades y aplicar middlewares específicos a cada grupo de rutas.

Una buena forma de recordarlo es: `app` es la aplicación principal y `Router` es una sección de esa aplicación que administra sus propias rutas.


---

# Dejar las `/` o borrarlas?
Te conviene dejar la `/`. Es la convención habitual cuando trabajás con `express.Router()`.

En tu caso:

index.js

javascript

```javascript
app.use("/api/products", productRoutes);
```

products.routes.js

javascript

```javascript
router.get("/", async (req, res) => {
    // Obtener todos los productos
});

router.get("/:id", validateId, async (req, res) => {
    // Obtener un producto por ID
});
```

Las rutas resultantes son:

| Definición en Router | Endpoint final |
| --- | --- |
| `router.get("/")` | `GET /api/products` |
| `router.get("/:id")` | `GET /api/products/:id` |

### ¿Qué pasa si sacás la `/`?

Si escribís:

javascript

```javascript
router.get("", async (req, res) => {
```

Puede funcionar, pero no es la convención recomendada y puede generar confusión al definir rutas.

### Mi recomendación

Mantené esta estructura:

- `router.get("/")`: obtener todos los productos.
- `router.get("/:id")`: obtener un producto específico.
- `router.post("/")`: crear un producto.
- `router.put("/:id")`: actualizar un producto.
- `router.delete("/:id")`: eliminar un producto.

Es una estructura REST bastante estándar y fácil de mantener.