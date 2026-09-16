# JavaScript


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

