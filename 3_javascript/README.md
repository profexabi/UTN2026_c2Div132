# JavaScript

### *Como ejecuta las instrucciones JavaScript internamente?*
**JavaScript internamente “lee” el código antes de ejecutarlo**, realizando un proceso en dos fases:

**1. Fase de compilación** (o creación del contexto)

Antes de ejecutar línea por línea, el motor de JavaScript analiza todo el código. En esta etapa:

- Registra variables y funciones.
- Determina el alcance (scope).
- Prepara el entorno de ejecución.

**2. Fase de ejecución**

Recién después ejecuta el código en orden.


---


### Ejercicios sugeridos de JS III
- Crear una funcion tradicional que reciba dos numeros y devuelva la suma de ambos
- Convertir la funcion anterior en una funcion flecha
- Crear una funcion que reciba un nombre y una edad con un prompt y devuelva en una funcion flecha un mensaje personalizado


---

## JavaScript III / Scope y ambito, funciones y tipos de funciones

```js
/*===============================
 Function Scope vs Block Scope
=================================

    - Function scope: Las variables declaradas con var tienen ambito de funcion. Esto significa que si se declaran dentro de una funcion NO son accesibles fuera de esa funcion, pero no estan limitadas por bloques

    - Block scope: Las variables declaradas con let y const estan limitadas por el bloque en que se declaran
*/

// Declaramos ARRIBA una variable afuera de cualquier funcion o bloque {}
let variableGlobal = "Soy una variable global";

function mostrarGlobal() {
    console.log(variableGlobal);
}

mostrarGlobal();
console.log(variableGlobal);


/*
2. Local Scope o Ambito local / Ambito de funcion
    
    - Las variables declaradas dentro de una funcion SOLO son accesibles dentro de esa funcion

    - Para variables var
*/

function mostrarLocal() {
    var localVar = "Soy una var local";
    console.log(localVar);
}

mostrarLocal(); // Soy una var local
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


/*
3. Block Scope o Ambito de bloque
    
    - A partir de ES6 (JavaScript 2015), las variables declaradas con let y const tienen alcance de bloque, por lo que solo son accesibles dentro del bloque (de las {}) en las que se declararon 

    - Por ejemplo, dentro de las llaves {} de un if, un for, etc

    - Para variables let y const
*/

// Condicion que siempre se cumple
if (true) {
    let bloqueVar = "Soy una variable de bloque";
    console.log(bloqueVar);
}

// console.log(bloqueVar); // ReferenceError: bloqueVar is not defined



/*===============================
 Function Scope vs Block Scope
=================================

    - Function scope: Las variables declaradas con var tienen ambito de funcion. Esto significa que si se declaran dentro de una funcion NO son accesibles fuera de esa funcion, pero no estan limitadas por bloques

    - Block scope: Las variables declaradas con let y const estan limitadas por el bloque en que se declaran
*/

// Function Scope o Local Scope
function scopeFunction() {
    if (true) {
        var funcionVar = "Soy una variable var de funcion";
    }
    console.log(funcionVar);
}

scopeFunction();


// Block Scope
function scopeBloque() {
    // Las variables let y const no pueden salir de este bloque
    if (true) {
        let bloqueLet = "Soy una let de bloque";
        const bloqueConst = "Soy una const de bloque";

        console.log(bloqueLet); // Soy una let de bloque
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque();



/*===============================
    Hoisting o elevacion
=================================

Las declaraciones de variables y funciones en JavaScript se mueven "hacia arriba" de su contexto de ejecucion (scope).
Solo las declaraciones son elevadas, no las inicializaciones

    - Variables con var: Se elevan y se INICIALIZAN con undefined

    - Variables con let y const: Se elevan pero NO SE INICIALIZAN, lo que lleva a un error si se accede antes de la declaracion
*/
console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar);

// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);


/*===============================
    var vs let vs const
=================================

    - var: Tiene ambito de funcion o local. Permite la redeclaracion y la reasignacion

    - let: Tiene ambito de bloque. NO permite la redeclaracion pero SI la reasignacion

    - const: Tiene ambito de bloque, NO permite la redeclaracion, TAMPOCO la reasignacion


Cosas extra

    - let y const se introdujeron en ES6 (2015) para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables

    - Tanto let como const no permiten la elevacion mientras que var si
    
    - Tecnicamente tanto let como const SI "tienen" hoisting pero estan en la Temporal Dead Zone (TDZ) hasta su inicializacion

    - const: asegura que el valor de la variable permanece CONSTante mientras que let permite la reasignacion. Aunque objetos y arrays si pueden modificarse (porque internamente alterar sus valores no modifica su posicion en memoria)
*/

//////////////////////////////
// Quilombo de Redeclaracion (volver a declarar una nueva variable)
var coso = "algo";
coso = "alguito"; // Reasignacion (colocar un nuevo valor a la variable ya existente)
console.log(coso); // alguito

var coso = "otra cosa"; // Redeclaracion (var lo permite, crear una nueva variable que se llama igual)
console.log(coso); // "otra cosa"


////////////////
// Reasignacion, podemos con let pero no con const
let x = 10;
console.log(x); // 10
x = 20; // Reasignacion (asigno un nuevo valor a let)
console.log(x); // 20

// Redeclarar (ni let ni const lo permiten)
// let x = 30; // Uncaught SyntaxError: Identifier 'x' has already been declared

const obj = { nombre: "Franco" };
obj.nombre = "Matias";
console.log(obj); // Matias

// obj = {}; // Uncaught TypeError: Assignment to constant variable. (Aca se modifica la posicion en memoria)

/* Resumen

    var
        - De ambito global o de ambito de funcion -> function() {}
        - Puede ser redeclarado y reasignado
        - Se eleva y se inicializa como undefined

    let
        - De ambito global o de ambito de bloque {}
        - Se puede volver a reasignar (asignar nuevo valor), pero NO a redeclarar (volver a declarar una variable con el mismo nombre)
        - Tiene elevacion a nivel de bloque, por lo que NO es accesible antes de la declaracion

    const
        - De ambito global o de ambito de bloque {}
        - No se puede volver a declarar ni reasignar
        - Tiene elevacion a nivel de bloque, por lo que NO es accesible antes de la declaracion


    - Cual usaremos principalmente? Hay distintas escuelas

    - Podemos usar let principalmente y guardar const para variables que no vayan a cambiar su valor (constantes, objetos inmutables, ble)

    - Podemos usar const principalmente y guardar let para variables que sepamos que van a reasignarse

- https://stackoverflow.com/questions/22308071/what-is-the-difference-between-let-and-const-ecmascript-2015-es6

    let
        • Utiliza el ámbito de bloque en la programación.
        • Cada bloque «let» crea su propio ámbito nuevo, al que no se puede acceder desde fuera de ese bloque.
        • El valor se puede modificar tantas veces como se desee.
        • «let» resulta extremadamente útil en la gran mayoría de los casos. Puede mejorar considerablemente la legibilidad del código y reducir la probabilidad de que se produzcan errores de programación.

    const
        • Permite que las variables sean inmutables.
        • El uso de «const» es una buena práctica tanto para la legibilidad como para el mantenimiento, y evita el uso de literales mágicos, p. ej.
        • Las declaraciones «const» deben inicializarse.
*/



/*===================================
    Introduccion a las funciones
=====================================

Una funcion es un bloque de codigo reutilizable que se puede ejecutar cuando se llama por su nombre

Las funciones son fundamentales para la modularidad y la reutilizacion del codigo

    - Facilitan la organizacion del codigo
    - Permiten la reutilizacion
    - Mejora la legibilidad y el mantenimiento
*/



// Declaracion de funciones: Sintaxis de una funcion declarada
function saludar() { // La forma mas comun de declarar una funcion en JavaScript es usando la palabra clave function
    console.log("Holis");
}

saludar();
saludar();
saludar();


// Ejemplo basico de una suma
function sumaBasica() {
    let resultado = 5 + 3;
    console.log("El resultado es ", resultado);
}

sumaBasica(); // El resultado es  8

// Para no tener que hacer infinidad de funciones por cada suma, agregamos PARAMETROS
// Los PARAMETROS son variables que definimos en las funciones que aceptan valores cuando se les llama, en este caso, a y b
function sumar(a, b) { 
    let resultado = a + b;
    console.log("El resultado es: ", resultado);
}

// Los ARGUMENTOS son los valores que le pasamos a la funcion cuando la llamamos
sumar(5, 3);  // El resultado es  8
sumar(7, 3); // El resultado es  10
sumar(8, 9); // El resultado es  17


// Las funciones tambien pueden retornar una valor usando la palabra clave (keyword) return
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(5, 6);
console.log(resultado); // 30


function saludar(nombre) { // nombre es el PARAMETRO
    console.log(`Holi ${nombre}`);
}

// "Miguel" es el ARGUMENTO 
saludar("Miguel"); // Holi Miguel


/*========================================
    Tipos de funciones en JavaScript
==========================================

1. Funcion declarada o Named function / Basic Function

    Es la declaracion basica de JavaScript, usa la keyword funcion
    
    Se recomienda para funciones con nombre o cuando se necesite hositing. Las funciones declaradas con funcion se pueden elevar a la parte superior de su ambito, es decir, del scope que las contiene. Esto permite llamar a la funcion antes de ser declarada
*/

// Invoco la funcion antes de declararla
test(); // test


// Declaro una funcion declarada (valga la redundancia)
function test() {
    console.log("test");
}


/*
2. Funcion expresada / Function expression

    Es la funcion que esta dentro de una variable.
    Es especialmente util para cuando va a ser usada como argumento para otra funcion
*/

const funcionExpresada = function () {
    console.log("Hola mundo desde una funcion expresada");
}

funcionExpresada(); // Hola mundo desde una funcion expresada


/*
3. Funcion anonima / Anonymous function

    No tiene nombre y se usan como callbacks generalmente (JavaScript VII)
*/

setTimeout(function() {
    console.log("Hola mundo dentro de 2 segundos");
}, 2000); // Hola mundo dentro de 2 segundos


/*
4. Funcion flecha / Arrow function

    Especialmente util para escribir funciones de una linea
    No tienen su propio this y siempre son anonimas
*/

const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(5, 3)); // 8



/*
5. Funcion de metodos / Method funcion

    Son las funciones definidas dentro de un objeto o clase
*/

const persona = {
    nombre: "Franco",
    saludar() {
        console.log(`Hola! Me llamo ${this.nombre}`);
    }
}

persona.saludar(); // Hola! Me llamo Franco


/*
6. Funcion de Constructor / Constructor function

    Se usan para crear objetos, se invocan usando la keyword new
*/

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

const gonzalo = new Usuario("Gonzalo", 12345);
console.log(gonzalo.id);


/*
7. IIFE - Immediately Invoked Function Expressions / Expresion de funcion ejecutada inmediatamente

    Las IIFE son funciones que se ejecutan despues de haberse definido
*/

(function() {
    console.log("Soy una IIFE que me invoco al toque! Pah re rápida chabón!!")
})(); // Soy una IIFE que me invoco al toque! Pah re rápida chabón!!


/*
8. Funcion generadora o Generadores / Generator function

    Son un tipo especial de funciones que sirven como una fabrica de iteradores. Pausan su ejecucion y continuan mas mtarde

    Se definen con la expresion function*
*/



/*
9. Funcion de orden superior / High Order Function

    (Las vemos en JavaScript V y JavaScript VII)
    Las HOF nos permiten usar otras funciones como parametros o devolver funciones como resultados

    Ejemplos de estas funciones son map(), filter(), reduce(), forEach(), every(), some()
*/


/*
10. Funcion asincronica / Async funcion

    (Las vemos en JavaScript VIII)
    Las funciones asincronicas se declaran con la keyword async y devuelven un objeto Promise que representa la terminacion o el fracaso de una operacion asincrona

    Se usa el operador await para esperar a la operacion asincronica
*/


/*==================================
    6 tipos de funciones flecha
==================================*/

// 1. Sin parametros: Si la funcion no lleva parametros, se pueden usar parentesis vacias
const saludame = () => console.log("Holis!");
saludame(); // Holis!


// 2. Un solo parametro: Si hay un solo parametro, las parentesis son opcionales
const cuadrado = x => x * x; // en una sola linea, el return esta implicito (return x * x)
console.log(cuadrado(4)); // 16


// 3. Mas de un parametro
const sumaFlecha = (a, b) => a + b; // return a + b
console.log(sumaFlecha(2, 3)); // 5


// 4. Mas de una instruccion en la funcion: Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos {} y usar return si queremos retornar una valor
const saludarFlecha = nombre => {
    const saludo = `Holis, ${nombre}! Como va che?`;
    return saludo;
}

console.log(saludarFlecha("Martino")); // Holis, Martino! Como va che?


// 5. Devolviendo un objeto: Para devolver un objeto literal, debe estar envuelto en parentesis para que no se confunda con el cuerpo de la funcion
const creaPersona = (nombre, edad) => ({nombre: nombre, edad: edad});
console.log(creaPersona("Antxon Subeldia", 30));


// 6. Funciones de orden superior y callbacks: Las funciones de flecha son especialmente populares cuando se usan como callbacks (JavaScript VII)
const numeros = [1, 2, 3, 4, 5];
const duplicar = numeros.map(num => num * 2);
console.log(duplicar); // [2, 4, 6, 8, 10]
```



---



## JavaScript II / Control de Flujo, Estructuras de Control, Condicionales y Bucles I

- [HTC como instruccion](https://es.wikipedia.org/wiki/Halt_and_Catch_Fire)
- [HTC como serie](https://es.wikipedia.org/wiki/Halt_and_Catch_Fire_(serie_de_televisi%C3%B3n))
```js
/* ==========================
    Control de Flujo
=============================

El control de flujo en JavaScript determina como se ejecutan las instruccione s de un programa.

Al diseñar un programa, es importante establecer que partes del codigo se ejecutan y bajo que condiciones. 

En JS, esto se logra mediante estructuras de control que permiten ejecutar secuencias de codigo basadas en decisiones, repeticiones o condiciones especificas. Existen varios tipos de estructuras de control de flujo en JS

    1. Condicionales
        - if, else if, else
        - Operadores logicos: &&, ||, !
        - Operadores ternarios

    2. Bucles
        - for
        - while
        - do...white

    3. Control de flujo avanzado
        - break
        - continue
        - switch
*/



/* ==========================
    if, else, else if
=============================

- if: Se usa para ejecutar un bloque de codigo si una condicion es vedadera

- else: Proporciona un bloque de codigo alternativo si la condicion es false

- else if: Permite manejar multiples condiciones
*/

// Comprobar numero positivo
let num = 0;

if (num > 0) { // esta sentencia deberia dar true para ejecutar el codigo de abajo
    console.log("El numero es positivo");
} else if (num < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}

// Comprobar mayoria de edad
let edad = 25;
// let edad = parseInt(prompt("Que edad tenes?")); // Un prompt saca una ventanita flotante para introducir informacion, como un miniformulario

console.log(edad); // 25
console.log(typeof edad); // number

// == Compara valor (realiza parseo si fuera necesario)
// === Compara valor y tipo

if (edad >= 18) { // Comprueba si se cumple la condiciones
    console.log("Sos mayor de edad, ya podes comprar birra");

} else if (edad < 18 && edad > 0) { // Comprueba la condicion opuesta
    console.log("Sos menor de edad, no podes tomar birra");

} else { // Comprueba tipo de edad valido
    console.log("Edad invalida");
} 



/* ==========================
    Operadores logicos
=============================

- AND (&&): Ambas condiciones deben ser verdaderas

- OR (||): Al menos una condicion debe ser verdadera

- NOT (!): Niega el valor de una condicion. Es el operador de negacion logica
*/

// Comprobar si puede manejar un auto
let edad2 = 25;
let tieneLicencia = true;

// Verificamos que existe una mayoria de edad y tiene licencia
if (tieneLicencia && edad2 >= 18) {
    console.log("Puede manejar! Wiii me voy a Chascomus");
}

// Verificar que con que alguna de true, se descarte
if (!tieneLicencia || edad2 < 18) {
    console.log("No podes manejar, habra que ir en bici");
}


// Ejemplo de negacion logica basica (!): El operador ! invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa

// Ejemplo de "toggle" o conmutador
let estado = true;

function alternarEstado() {

    // Invertimos el valor de estado
    estado = !estado; // Estado es igual a su contrario (true -> false y viceversa)

    console.log("Nuevo estado: ", estado);
}

alternarEstado(); // Nuevo estado:  false
alternarEstado(); // Nuevo estado:  true
alternarEstado(); // Nuevo estado:  false



/* ============================
    Valores Truthy y Falsy
===============================

En JavaScript, los valores "falsy" son aquellos que, en un contexto booleano, ej:
     if (x > y)
    
resultan en false. Algunos ejemplos son false, 0, "", null, undefined y NaN

Los valores falsy son exclusivamente los siguientes
    false
    0
    -0
    0n
    ""
    null
    undefined
    NaN

Todos los demas valores son truthy

(Mas apuntes en apuntesJS.md)
*/

let valor1 = 0; // 0 en un contexto booleano es falsy
let valor2 = "Holis"; // Una cadena no vacia es un valor truthy

// El operador ! me permite verificar si una variable es falsy
console.log(!valor1); // true porque 0 es falsy asi que se convierte en true
console.log(!valor2); // false porque una cadena no vacia es truthy



/* ============================
    Operador ternario
===============================

El operador ternario es una forma mas compacta de escribir una condicion if...else */

// Ejemplo con mayoria de edad
let edad3 = 17;

let mensaje = (edad3 >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje); // Sos menor de edad

// Nos ahorramos minimo 5 lineas de codigo

// Hace calor si estamos arriba de los 25 grados
let temperatura = 11;
let mensajeTiempo = (temperatura > 25) ? "Hace calor" : "Hace un chiflete de la gran flauta! Brrrrr";


// Nos ahorra escribir
if (temperatura > 25) {
    mensajeTiempo = "Hace calor";    
} else {
    mensajeTiempo = "Hace un chiflete de la gran flauta! Brrrrr";
}

console.log(mensajeTiempo); // Hace un chiflete de la gran flauta! Brrrrr



/* ============================
    Bucle for clasico
===============================

Se usa cuando se conoce de antemano el numero de iteraciones

    for (inicializacion; condicion; incremento) {
        // Codigo a ejecuta en cada iteracion
    }
*/

// Ejemplo basico
for (let i = 0; i < 5; i++) {
    console.log("Iteracion: ", i);
}
/*
    Iteracion:  0
    Iteracion:  1
    Iteracion:  2
    Iteracion:  3
    Iteracion:  4
*/

// Crear una tabla de multiplicar del 1 al 3
for (let i = 1; i < 4; i++) { // Hasta que i no valga 4 no sale de aca

    // Conjunto de instrucciones en cada iteracion
    console.log(`Tabla del ${i}`);

    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    //
    /* 
        - Al terminar este conjunto de instrucciones de arriba
        - Se incrementa y se comprueba con la condicional
    */
}

/* Output deseado

    "Tabla del 1"
    1 x 1 = 1
    1 x 2 = 2
    1 x 3 = 3

    "Tabla del 2"
    (...)
    3 x 3 = 9
*/

// EJERCICIO SUGERIDO: Hacer la tabla de multiplicar completa del 10 (a mano)



/* ============================
    Bucle while
===============================

Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while (condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera
    }
*/

let i = 0; // Inicializacion
while (i < 5) { // Condicion
    console.log(`Iteracion: ${i}`);
    i++; // Incremento
}



/* ============================
    Bucle do while
===============================

Similar al whilte, pero la condicion se evalua despues de ejecutar el bloque de codigo, lo que garantiza que el codigo se ejecutara al menos una vez

    do {
        // Codigo a ejecutar 
    }
    while (condicion);
*/

let j = 0; // Inicializacion
do {
    console.log("Iteracion do while", j);
    j++; // Incremento
} while (j < 5); // Condicion



/* ============================
    Control de flujo avanzado
===============================

- break: Se usa para salir inmediatamente de un bucle o estructura de control

- continue: Salta a la siguiente iteracion del bucle omitiendo el codigo restante para esa iteracion

- switch: Otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide
*/

// Ejemplo de break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }

    console.log("Iteracion: ", i);
}

// Ejemplo de continue, saltar todas las iteraciones pares
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta las iteraciones en las que i es par
    }

    console.log(`Numero impar: ${i}`);
}


/* ============================
    switch
===============================

switch es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

    switch (expresion) {
        case valor1: 
            // Codigo que se ejecuta si la expresion es igual a valor1
            break;

        case valor2: 
            // Codigo que se ejecuta si la expresion es igual a valor2
            break;

        default: 
            // Codigo que se ejecuta si ninguno de los casos coincide
    }
*/

// Mostrar que dia de la semana es acorde al numero
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 1:
        console.log("Miercoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana")
}

// EJERCICIO SUGERIDO: Hacer este ejercicio con los meses pidiendo el mes con el prompt()
```


---



## JavaScript I / Conceptos elementales, sintaxis basica, variables, tipos de datos y operadores

### [Introduccion a JavaScript Wikipedia](https://es.wikipedia.org/wiki/JavaScript)

### [JavaScript `let` o `const`?](https://stackoverflow.com/questions/22308071/what-is-the-difference-between-let-and-const-ecmascript-2015-es6)

```js
/* ==========================
     Consola del navegador
=============================

- Usaremos console.log para mostrar mensajes por consola

- La consola de JS es una herramienta de depuracion en nuestro navegador web. Permite ejecutar comandos en JavaScript, ver mensajes de registro y errores y hacer pruebas interactivas de codigo */

console.log("Hola mundo!"); // Nuestro primer Hola Mundo en JavaScript



/*==========================
    Variables en JS
============================

Las variables almacenan datos que pueden ser reutilizados y modificados. Tenemos var, let y const

    - var: (No recomendado) Usado historicamente para declarar variables pero con algunas limitaciones que veremos mas adelante

    - let: Introducido en ECMAScript 2015 (ES6). Permite reclarar variables que pueden cambiar y tiene un alcance de bloque, lo que mejora el control sobre donde y cuando se puede acceder a una variable

    - const: Tambien introducido en ES6. Se utiliza para declarar variables que no se deben reasignar. El valor en un const puede ser modificado si es un objeto o un array, pero la referencia no puede cambiar
*/

// Declaracion vieja, no recomendada / Alcance global o de funcion, no tiene bloque
var nombre = "Juan";

// Declaracion moderna / Alcance de bloque
let edad = 25;

// Declaracion moderna / Declara constantes cuyo valor no puede cambiar una vez asignado
const pi = 3.1416;

console.log(nombre); // Juan
console.log(edad); // 25
console.log(pi); // 3.1416



/*==============================
    Tipos de datos primitivos
================================

- Numeros: Valores numericos
- Cadenas: Strings, texto encerrado entre comillas simples o dobles
- Booleanos: true o false
- null: Representa un valor intencionalmente vacio
- undefined: Una variable declara pero que no tiene valor

Referencia memistica
https://imgur.com/a/b2R4rW6
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero); // 42
console.log(texto); // "Hola"
console.log(verdadero); // true
console.log(vacio); // null
console.log(indefinido); // undefined



/*==============================
    Operadores en JavaScript
================================

Los operadores son simbolos especiales en JS que nos permiten realizar operaciones sobre valores o variables. Pueden ser aritmeticos, de comparacion, logicos, de asignacion, etc

- Aritmeticos: Para realizar operaciones matematicas sobre valores numericos

- De asignacion: Asignan valores a las variables. El operador mas comun es el "="

- De comparacion: Se usan para comparar valores y devuelven un resultado booleano (true o false)

- Logicos: Se usan para combinar expresiones booleanas
*/

// Operadores aritmeticos: https://www.w3schools.com/js/js_arithmetic.asp
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
console.log(a ** b); // 1000



// Operadores de asignacion: https://www.w3schools.com/js/js_assignment.asp
let x = 10;
x += 5; // 15 -> x = x + 5
x -= 2; // 13 -> x = x - 2



/* Operadores de comparacion: https://www.w3schools.com/js/js_comparisons.asp

    ==          Igual a                 x == y
    !=          No igual a              x != y
    ===         Estrictamente igual     x === y
    !==         Estrictamente no igual  x !== y
    >           Mayor que               x > y
    <           Menor que               x < y
    >=          Mayor o igual que       x >= y
    <=          Menor o igual que       x <= y



La diferencia entre == y ===

    == compara Valor (despues de hacer una conversion de tipo si es necesario)

    == Compara Valor Y Tipo (sin hacer conversiones)
*/


/* Operadores logicos

- &&    AND logico
- ||    OR logico
- !     NOT logico
*/

let verdad = true;
let falso = false;

console.log(verdad && falso); // false (ambos deben ser true)
console.log(verdad || falso); // true (al menos uno es true)
console.log(!verdad); // false (invierte el valor de true)


// Operador de tipo: Veriifican el tipo de un valor
console.log(typeof 42); // number
console.log(typeof "Holis"); // string
```

