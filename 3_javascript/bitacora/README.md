# Diferencias entre objetos en JS y diccionarios en Python
Se parecen **muchísimo** en el uso cotidiano, pero conceptualmente son cosas diferentes.

 ### La comparación básica

 En Python:

```
persona = {
    "nombre": "Juan",
    "edad": 25
}

print(persona["nombre"])
```

 En JavaScript:

```
let persona = {
    nombre: "Juan",
    edad: 25
};

console.log(persona["nombre"]);
console.log(persona.nombre);
```

 En ambos casos tienes una estructura de **clave → valor**.

 ## La diferencia principal

 Un **diccionario de Python** está diseñado específicamente para almacenar pares clave-valor.

 Un **objeto de JavaScript** es una estructura más general: además de almacenar datos, forma parte del sistema de objetos de JavaScript y tiene **prototipos, propiedades y métodos**.

 Por ejemplo:

```
let persona = {
    nombre: "Juan",
    edad: 25,

    saludar() {
        console.log("Hola");
    }
};

persona.saludar();
```

 El objeto puede tener comportamiento mediante métodos.

 En Python también puedes tener métodos, pero normalmente hablamos de una instancia de una **clase**, no de un diccionario:

```
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print("Hola")

persona = Persona("Juan")
persona.saludar()
```

 ### Otra diferencia importante: las claves

 En un diccionario de Python, las claves pueden ser diferentes tipos de valores siempre que sean _hashable_:

```
diccionario = {
    "nombre": "Juan",
    42: "respuesta",
    (1, 2): "coordenada"
}
```

 En un objeto normal de JavaScript, las propiedades son esencialmente **strings o symbols**:

```
let objeto = {
    nombre: "Juan",
    42: "respuesta"
};

console.log(objeto[42]); // "respuesta"
```

 Ese `42` termina siendo tratado como la propiedad `"42"`.

 Si necesitas en JavaScript claves de cualquier tipo, existe `Map`:

```
let mapa = new Map();

mapa.set("nombre", "Juan");
mapa.set(42, "respuesta");
mapa.set([1, 2], "coordenada");
```

 ## Una forma útil de pensarlo

 | Python | JavaScript |
| --- | --- |
| `dict` | `Object` |
| `diccionario["nombre"]` | `objeto["nombre"]` |
| — | `objeto.nombre` |
| `dict.keys()` | `Object.keys(objeto)` |
| `dict.values()` | `Object.values(objeto)` |
| `dict.items()` | `Object.entries(objeto)` |
| `dict.get("nombre")` | `objeto.nombre` / `objeto["nombre"]` |
| — | `Map` |

### ¿Entonces `Object` = `dict`?

 Para aprender JavaScript, **puedes pensar inicialmente que un objeto es parecido a un diccionario de Python**:

```
const usuario = {
    nombre: "Ana",
    edad: 30
};
```

 es conceptualmente parecido a:

```
usuario = {
    "nombre": "Ana",
    "edad": 30
}
```

 Pero cuando profundices en JavaScript, conviene separar los conceptos:

 - **`Object`** → objetos con propiedades y prototipos.
- **`Array`** → colecciones ordenadas.
- **`Map`** → estructura específicamente diseñada para pares clave-valor.
- **`Set`** → colección de valores únicos.

 Una diferencia especialmente importante para alguien que viene de Python es que **`Object` no es exactamente el equivalente de `dict`; `Map` es más cercano a la idea de un diccionario general-purpose**.


---


# Accediendo al ultimo valor en un array
En JavaScript los arrays **no interpretan índices negativos como “desde el final”**.

 En tu ejemplo:

```js
let colores = ["rojo", "verde", "azul"];

console.log(colores[0]);  // "rojo"
console.log(colores[2]);  // "azul"
console.log(colores.length -1); // undefined
```

 Cuando haces `colores[-1]`, JavaScript no piensa “dame el último elemento”. Lo trata como una **propiedad llamada `"-1"`** del array. Como esa propiedad no existe, devuelve `undefined`.

 ### ¿Cómo obtener el último elemento?

 La forma tradicional:

```
console.log(colores[colores.length - 1]);
// "azul"
```

 También existe una forma moderna y mucho más cómoda:

```
console.log(colores.at(-1));
// "azul"
```

 Y `.at()` permite recorrer desde el final:

```
colores.at(-1); // "azul"
colores.at(-2); // "verde"
colores.at(-3); // "rojo"
```

 Así que la diferencia importante es:

```
colores[-1]    // undefined
colores.at(-1) // "azul"
```

 **`[]` usa índices normales del array; `.at()` sí admite índices negativos.**

---

# Valores truthy y falsy
En JavaScript, un valor **truthy** es aquel que se comporta como `true` cuando JavaScript lo evalúa en un contexto booleano. Un valor **falsy** se comporta como `false`.

 ## Valores falsy

 Los principales valores que JavaScript considera falsy son:

```
false
0
-0
0n
""
null
undefined
NaN
```

 Por ejemplo:

```
if (0) {
  console.log("verdadero");
} else {
  console.log("falso"); // ← se ejecuta
}
```

```
if ("") {
  console.log("verdadero");
} else {
  console.log("falso"); // ← se ejecuta
}
```

 ## Valores truthy

 **Todo lo demás es truthy**, incluso algunos valores que pueden resultar sorprendentes:

```
"hola"      // truthy
"0"         // truthy
"false"     // truthy
[]          // truthy
{}          // truthy
42          // truthy
-10         // truthy
```

 Por ejemplo:

```
if ("false") {
  console.log("Se ejecuta");
}
```

 Aunque el texto sea `"false"`, es un **string no vacío**, por lo que es truthy.

 También:

```
if ([]) {
  console.log("Se ejecuta");
}

if ({}) {
  console.log("También se ejecuta");
}
```

 Esto ocurre porque **los objetos y arrays son truthy**, aunque estén vacíos.

 ## ¿Cómo comprobarlo?

 Podés usar `Boolean()`:

```
Boolean(0)        // false
Boolean("")       // false
Boolean(null)     // false

Boolean("hola")   // true
Boolean([])       // true
Boolean({})       // true
```

 O el operador `!!`:

```
!!0        // false
!!"hola"   // true
!![]       // true
!!{}       // true
```

 ### Una regla fácil de recordar

```
if (valor) {
  // valor truthy
} else {
  // valor falsy
}
```

 👉 **Falsy:** `false`, `0`, `""`, `null`, `undefined`, `NaN` y `0n`.

 👉 **Truthy:** prácticamente cualquier otro valor, incluidos `[]` y `{}`.


---

## Que es un `toggle`?

En programación, un **toggle** (o conmutador) es un mecanismo que permite **alternar entre dos estados opuestos**, como encendido/apagado, visible/oculto o activo/inactivo. Se implementa comúnmente mediante una **variable booleana** que cambia de `true` a `false` (o viceversa) cada vez que se activa, actuando como un interruptor que mantiene su estado hasta que se pulsa nuevamente.

Los toggles se utilizan en diversos contextos:
*   **Interfaces de usuario**: Para activar funciones, cambiar temas (modo oscuro/claro) o mostrar/ocultar contenido con un solo clic.
*   **Desarrollo de software**: Los **toggles de funciones** (o *feature flags*) permiten activar o desactivar características en producción sin modificar el código fuente, facilitando pruebas A/B y despliegues graduales.
*   **Lógica básica**: Representan condiciones binarias donde la acción de alternar el estado es permanente hasta que se invoca nuevamente.


---


## Que es [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript)?

**ECMAScript** es la especificación técnica estandarizada por **Ecma International** (documento **ECMA-262**) que define el núcleo del lenguaje de scripting **JavaScript**. Fue desarrollado inicialmente por **Brendan Eich** en **Netscape** y adoptado como estándar internacional en **1997**.

La especificación garantiza que las implementaciones de JavaScript en diferentes motores (como **V8** de Chrome, **SpiderMonkey** de Firefox o **JavaScriptCore** de Safari) se comporten de manera consistente y compatible. Desde **2015**, el estándar se actualiza anualmente con nombres basados en el año de publicación (ej. **ES2015**, **ES2020**), reemplazando la antigua numeración ordinal.

*   La versión actual especificada es **ECMAScript 2026** (17ª edición).
*   Existe un borrador o referencia futura a la **ECMAScript 2027** (18ª edición).
*   Lenguajes como **JScript** y **ActionScript** también se basan en esta especificación.