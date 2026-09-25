# Introduccion a object wrappers
Claro. Para entender el objeto `String` en JavaScript conviene separar dos conceptos que al principio suelen confundirse: **los strings** y el **objeto `String`**.

## 1\. Un string es un valor de texto

Cuando escribes:

```
let nombre = "Juan";
```

`"Juan"` es un **string**, es decir, un valor primitivo de JavaScript.

También puedes usar comillas simples o backticks:

```
let a = "Hola";
let b = 'Hola';
let c = `Hola`;
```

Los tres contienen un string.

---

## 2\. Entonces, ¿qué es `String`?

`String` es un **objeto incorporado (built-in object)** de JavaScript que proporciona métodos y funcionalidades relacionadas con los strings.

Por ejemplo:

```
let nombre = "Juan";

console.log(nombre.length);       // 4
console.log(nombre.toUpperCase()); // "JUAN"
console.log(nombre.includes("u")); // true
```

Aunque `nombre` es un valor primitivo, JavaScript permite utilizar métodos como `.toUpperCase()`.

Esto puede parecer extraño:

```
"hola".toUpperCase();
```

Si `"hola"` no es un objeto, ¿cómo puede tener un método?

JavaScript hace internamente algo parecido a:

```
new String("hola")
```

durante la operación y luego obtiene el resultado. Este comportamiento se conoce como **autoboxing**.

No necesitas hacerlo manualmente.

---

# 3\. `String` tiene métodos muy útiles

Por ejemplo:

```
let texto = "Hola Mundo";
```

### `length`

Obtiene la cantidad de caracteres:

```
console.log(texto.length);
// 10
```

### `toUpperCase()`

Convierte a mayúsculas:

```
console.log(texto.toUpperCase());
// "HOLA MUNDO"
```

### `toLowerCase()`

Convierte a minúsculas:

```
console.log(texto.toLowerCase());
// "hola mundo"
```

### `includes()`

Comprueba si contiene un texto:

```
console.log(texto.includes("Mundo"));
// true
```

### `startsWith()`

Comprueba si comienza con algo:

```
console.log(texto.startsWith("Hola"));
// true
```

### `endsWith()`

Comprueba si termina con algo:

```
console.log(texto.endsWith("Mundo"));
// true
```

### `indexOf()`

Busca la posición donde aparece un texto:

```
console.log(texto.indexOf("Mundo"));
// 5
```

Recuerda que los índices empiezan en `0`:

```
H o l a   M u n d o
0 1 2 3 4 5 6 7 8 9
```

---

# 4\. Los strings son inmutables

Esto es **muy importante**.

Cuando haces:

```
let texto = "hola";

texto.toUpperCase();

console.log(texto);
```

obtienes:

```
hola
```

¿Por qué?

Porque `toUpperCase()` **no modifica el string original**. Devuelve un nuevo string:

```
let texto = "hola";

let resultado = texto.toUpperCase();

console.log(texto);     // "hola"
console.log(resultado); // "HOLA"
```

Los strings en JavaScript son **inmutables**.

Por eso tampoco puedes hacer:

```
let texto = "hola";

texto[0] = "H";

console.log(texto);
```

No puedes modificar directamente un carácter de un string.

---

# 5\. `String` también tiene `charAt()` y `at()`

Puedes acceder a caracteres individuales:

```
let palabra = "JavaScript";

console.log(palabra.charAt(0));
// "J"

console.log(palabra.at(0));
// "J"
```

Y aquí aparece algo relacionado con tu pregunta anterior sobre los arrays:

```
console.log(palabra.at(-1));
// "t"
```

`at()` permite utilizar índices negativos también en strings.

```
palabra.at(-1); // "t"
palabra.at(-2); // "p"
palabra.at(-3); // "i"
```

---

# 6\. `slice()`

Permite obtener una parte del string:

```
let texto = "JavaScript";

console.log(texto.slice(0, 4));
// "Java"
```

También acepta índices negativos:

```
console.log(texto.slice(-6));
// "Script"
```

Esto es bastante útil.

---

# 7\. `split()`: convertir un string en un array

Este método es especialmente importante.

```
let frutas = "manzana,pera,banana";

let resultado = frutas.split(",");

console.log(resultado);
```

Resultado:

```
["manzana", "pera", "banana"]
```

Es decir:

```
String
↓
split()
↓
Array
```

También puedes hacer:

```
let palabra = "hola";

console.log(palabra.split(""));
```

Resultado:

```
["h", "o", "l", "a"]
```

---

# 8\. `trim()`

Elimina espacios al principio y al final:

```
let nombre = "   Juan   ";

console.log(nombre.trim());
// "Juan"
```

También existen:

```
trimStart()
trimEnd()
```

---

# 9\. Concatenación

Puedes unir strings con `+`:

```
let nombre = "Juan";
let apellido = "Pérez";

let completo = nombre + " " + apellido;

console.log(completo);
// "Juan Pérez"
```

Pero normalmente en JavaScript moderno se utilizan **template literals**:

```
let nombre = "Juan";
let edad = 25;

console.log(`Me llamo ${nombre} y tengo ${edad} años.`);
```

Resultado:

```
Me llamo Juan y tengo 25 años.
```

---

# 10\. Una diferencia importante: `String` vs `new String()`

Aquí hay una cosa que puede resultar confusa:

```
let a = "hola";

let b = new String("hola");
```

No son exactamente lo mismo.

```
console.log(typeof a);
// "string"

console.log(typeof b);
// "object"
```

`a` es un **string primitivo**.

`b` es un **objeto `String`**.

Por eso, normalmente **no debes hacer**:

```
new String("hola")
```

En código normal simplemente haces:

```
let texto = "hola";
```

JavaScript se encarga de permitirte utilizar los métodos de `String` sobre ese valor primitivo.

---

## La idea fundamental

Puedes pensar en esta jerarquía:

```
"Hola"
│
│ es un
▼
string primitivo
│
│ JavaScript permite usar
│ métodos de String
▼
"Hola".toUpperCase()
"Hola".includes("H")
"Hola".slice(0, 2)
"Hola".at(-1)
```

Y `String` es el **constructor/objeto incorporado que define gran parte de la funcionalidad de los strings**.

Si estás aprendiendo JavaScript después de Python, una buena siguiente distinción para estudiar es **`String` vs `Array` vs `Object` vs `Map`**, porque ahí empiezan a aparecer muchas de las diferencias importantes entre ambos lenguajes.



---


# Como se produce la conversion de tipos primitivos a objetos?
Sí, **conceptualmente ocurre durante la ejecución del código**, pero hay un matiz importante: no es que JavaScript convierta permanentemente el primitivo en un objeto. El motor realiza un **boxing temporal** cuando necesitas acceder a propiedades o métodos.

Por ejemplo:

```
let nombre = "Juan";

console.log(nombre.toUpperCase());
```

`nombre` sigue siendo un primitivo:

```
typeof nombre; // "string"
```

Cuando ejecutas:

```
nombre.toUpperCase()
```

el motor puede comportarse conceptualmente como si hiciera:

```
new String(nombre).toUpperCase()
```

y luego descarta ese objeto temporal.

### El proceso simplificado

Podríamos imaginar:

```
"Juan"
│
│ acceso a .toUpperCase()
▼
String wrapper temporal
│
│ ejecuta toUpperCase()
▼
"JUAN"
```

Pero **no debes entenderlo como que el motor literalmente ejecuta `new String()` cada vez**. Es una forma conceptual de explicar el mecanismo definido por JavaScript.

Por ejemplo:

```
let x = "hola";

console.log(x.length);
```

Conceptualmente:

```
// Aproximadamente:
let temporal = Object(x);
temporal.length;
```

El resultado es `4`, pero:

```
console.log(typeof x);
// "string"
```

`x` **nunca deja de ser un primitivo**.

### ¿Dónde ocurre exactamente?

En el **motor de JavaScript**, como parte de la evaluación de las operaciones del lenguaje. El entorno de ejecución (runtime) proporciona el motor y sus objetos incorporados (`String`, `Number`, `Boolean`, etc.), pero no debes imaginar una función de usuario o una capa de JavaScript que haga explícitamente la conversión.

Además, el comportamiento está especificado por **ECMAScript**. Por ejemplo, cuando accedes a una propiedad de un primitivo, entran en juego operaciones abstractas como `ToObject`.

Esto también explica algo interesante:

```
let x = "hola";

x.nombre = "Juan";

console.log(x.nombre);
```

Obtendrás:

```
undefined
```

Porque el objeto wrapper utilizado para esa operación era **temporal**. No modificaste el string primitivo.

En cambio:

```
let x = new String("hola");

x.nombre = "Juan";

console.log(x.nombre);
```

sí funciona porque `x` es realmente un **objeto `String` persistente**.

La distinción clave es:

```
"hola"                  → primitivo
new String("hola")      → objeto wrapper
```

Y el **autoboxing** permite que el primero se comporte temporalmente como el segundo cuando accedes a sus propiedades o métodos.


---


# Que es el boxing temporal y el autoboxing?
Sí. Son dos conceptos muy relacionados, y la clave es entender **qué problema resuelven**.

## 1\. Primero: primitivos vs objetos

JavaScript tiene valores primitivos como:

```
let nombre = "Juan";  // string primitivo
let edad = 25;       // number primitivo
let activo = true;   // boolean primitivo
```

Pero también existen objetos wrapper:

```
new String("Juan")
new Number(25)
new Boolean(true)
```

Por ejemplo:

```
typeof "Juan";              // "string"
typeof new String("Juan");  // "object"
```

Entonces tenemos:

```
"Juan"                → primitivo
new String("Juan")    → objeto
```

---

## 2\. ¿Qué es el boxing?

**Boxing** significa envolver temporalmente un valor primitivo dentro de un objeto wrapper.

Imagina:

```
let nombre = "Juan";
```

`nombre` es un primitivo.

Pero haces:

```
nombre.toUpperCase();
```

¿Cómo puede un primitivo tener un método?

Conceptualmente, JavaScript puede hacer algo parecido a:

```
let temporal = new String(nombre);
temporal.toUpperCase();
```

Visualmente:

```
"Juan"
↓
┌─────────────────┐
│ String object   │
│                 │
│ "Juan"          │
│ .toUpperCase()  │
│ .length         │
└─────────────────┘
↓
"JUAN"
```

Ese objeto es **temporal**.

Después de realizar la operación, no tienes un objeto `String` guardado en `nombre`.

```
let nombre = "Juan";

nombre.toUpperCase();

console.log(typeof nombre);
// "string"
```

Por eso hablamos de **boxing temporal**.

---

# 3\. ¿Qué es autoboxing?

**Autoboxing** es el proceso automático mediante el cual JavaScript realiza ese boxing cuando es necesario.

Es decir, tú escribes:

```
let nombre = "Juan";

nombre.toUpperCase();
```

y **no necesitas decirle a JavaScript**:

```
new String(nombre)
```

El lenguaje se encarga automáticamente.

Por eso:

> **Boxing** = envolver un primitivo en un objeto wrapper.

> **Autoboxing** = JavaScript realiza ese proceso automáticamente cuando hace falta.

---

# 4\. Un ejemplo muy claro

Mira esto:

```
let texto = "Hola";

console.log(texto.length);
```

`texto` es un primitivo:

```
typeof texto;
// "string"
```

Pero `.length` es una propiedad asociada a objetos `String`.

Conceptualmente puedes imaginar:

```
let texto = "Hola";

let wrapperTemporal = new String(texto);

console.log(wrapperTemporal.length);
```

Pero **no significa que JavaScript realmente ejecute literalmente ese código cada vez**. Es el modelo conceptual que nos ayuda a entender el comportamiento.

---

# 5\. ¿Por qué se llama "wrapper"?

Porque el objeto **envuelve** al valor:

```
        objeto String
    ┌───────────────┐
    │               │
    │    "Hola"     │
    │               │
    └───────────────┘
```

Por eso se habla de **wrapper objects**:

- `String` → envuelve strings
- `Number` → envuelve números
- `Boolean` → envuelve booleanos
- `BigInt` y `Symbol` también tienen objetos wrapper asociados, aunque tienen algunas particularidades.

---

# 6\. ¿El boxing ocurre siempre?

No.

Por ejemplo:

```
let nombre = "Juan";
```

No necesitas un objeto para almacenar `"Juan"`.

El boxing aparece cuando realizas operaciones que requieren acceder a propiedades o métodos.

Por ejemplo:

```
nombre.length
nombre.toUpperCase()
nombre.includes("a")
```

Ahí el comportamiento del lenguaje permite tratar temporalmente el primitivo como un objeto.

---

# 7\. Esto explica algo que parece extraño

Mira:

```
let nombre = "Juan";

nombre.apellido = "Pérez";

console.log(nombre.apellido);
```

Resultado:

```
undefined
```

¿Por qué?

Porque conceptualmente ocurrió algo parecido a:

```
"Juan"
↓
wrapper temporal
↓
se agrega .apellido
↓
el wrapper desaparece
```

No modificaste `"Juan"`.

En cambio:

```
let nombre = new String("Juan");

nombre.apellido = "Pérez";

console.log(nombre.apellido);
// "Pérez"
```

Aquí sí tienes un objeto real y persistente:

```
nombre
↓
┌────────────────────┐
│ String object      │
│                    │
│ valor: "Juan"      │
│ apellido: "Pérez"  │
└────────────────────┘
```

---

## 8\. La idea que conviene recordar

Cuando estés aprendiendo JavaScript, piensa en esto:

```
PRIMITIVO
│
│ necesito acceder a una propiedad/método
↓
AUTOBOXING
↓
WRAPPER TEMPORAL
↓
se realiza la operación
↓
resultado
```

Por ejemplo:

```
"hola".toUpperCase()
```

Conceptualmente:

```
"hola"
↓
String wrapper temporal
↓
.toUpperCase()
↓
"Hola"
```

Y lo importante es que **el valor original sigue siendo un primitivo**.

```
let x = "hola";

x.toUpperCase();

typeof x;
// "string"
```

### Una precisión importante

En JavaScript moderno, es mejor pensar en **"el lenguaje trata el primitivo como un objeto para realizar la operación"** que imaginar que el motor necesariamente crea físicamente un objeto `new String()` en memoria cada vez. Los motores pueden optimizar esto completamente.

Así que **`new String()` es un modelo conceptual del boxing, no una descripción de lo que necesariamente ocurre físicamente en memoria**.