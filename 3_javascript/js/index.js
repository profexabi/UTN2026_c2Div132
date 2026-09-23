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