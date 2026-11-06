# Se puede usar `export *`?
¡Sí\! En JavaScript existen varias formas de exportar el contenido de un módulo. Pero hay una distinción importante: no existe un `export all` que exporte automáticamente todas las variables y funciones declaradas en un archivo.

Te explico las alternativas.

## 1. Exportaciones nombradas (`export`)

Podés exportar varias funciones y variables:

javascript

```javascript
export const PORT = 3000;

export function getProducts() {
    // ...
}

export function createProduct() {
    // ...
}
```

Y después importarlas:

javascript

```javascript
import { PORT, getProducts, createProduct } from './products.js';
```

## 2. Exportar todo junto al final

También podés declarar todo normalmente y exportarlo al final:

javascript

```javascript
const PORT = 3000;

function getProducts() {
    // ...
}

function createProduct() {
    // ...
}

export {
    PORT,
    getProducts,
    createProduct
};
```

## 3. Exportación por defecto (`export default`)

Permite exportar un único valor principal por módulo:

javascript

```javascript
function getProducts() {
    // ...
}

export default getProducts;
```

Importación:

javascript

```javascript
import getProducts from './products.js';
```

No necesitás utilizar llaves `{}`.

## 4. Exportar todo un módulo desde otro archivo

Existe una sintaxis que quizás es lo que estás buscando:

javascript

```javascript
export * from './products.js';
```

Esto reexporta todas las exportaciones nombradas de `products.js`.

Por ejemplo:

products.js

javascript

```javascript
export const PORT = 3000;

export function getProducts() {}

export function createProduct() {}
```

index.js

javascript

```javascript
export * from './products.js';
```

Ahora podés importar desde `index.js`:

javascript

```javascript
import { PORT, getProducts, createProduct } from './index.js';
```

Ojo: `export *` no reexporta la exportación `default`.

## Resumen

| Sintaxis | Funcionalidad |
| --- | --- |
| `export const` | Exporta una variable. |
| `export function` | Exporta una función. |
| `export default` | Exporta un valor principal. |
| `export { a, b }` | Exporta varios elementos juntos. |
| `export * from './archivo.js'` | Reexporta todas las exportaciones nombradas de otro módulo. |

Mi recomendación: si estás organizando tu API de Express, utilizá exportaciones nombradas para controladores, middlewares y funciones auxiliares. Te permite importar exactamente lo que necesitás y mantener una estructura clara.