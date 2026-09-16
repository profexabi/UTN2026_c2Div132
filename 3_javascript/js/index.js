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