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