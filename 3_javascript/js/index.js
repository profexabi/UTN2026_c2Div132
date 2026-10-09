/*============================
        Callbacks
==============================

Los callbacks son basicamente funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion */

// Ejemplo basico
function saludar(nombre, callback) {
    console.log(`Hola ${nombre}!`);
    // Ejecutar x operaciones y finalmente, al termino de estas, ejecutar despedirse()
    callback(); // Ejecuto la instruccion que pase por parametro
}

function despedirse() {
    console.log("Chau!");
}

// despedirse es un callback, una funcion pasada como argumento a otra funcion y que se ejecuta en el orden que querramos
saludar("Matias", despedirse);
// Hola Matias!
// Chau!

/*=========================================
    Caracteristicas principales de JS
===========================================

En JavaScript, las funciones son muy importantes, son tratadas como ciudadanas de primer clase o "first class citizens", esto significa que pueden ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

/////////////////////////
// 1. Asignar funcion a variable

const miMensajeCB = function () {
    console.log("Callback ejecutado!");
}

// Pasamos como argumento
function ejecutarCallback(callback) {
    callback();
}

ejecutarCallback(miMensajeCB);
// Callback ejecutado!


/////////////////////////
// 2. Sincronia y Asincronia

// Ejemplo de sincronia
function procesoPesado(callback) {
    console.log("Iniciando proceso pesado sincronico...");

    // Simulamos un procesamiento que tarde unos segundos en correr
    for (let i = 0; i < 3000; i++) {
        console.log("<- Numero de iteraciones");
    }

    callback(); // Cuando termine este proceso lento de arriba, llamara al callback    
}

// Definimos el callback aca adentro
// procesoPesado(() => console.log("Proceso completado"));
// console.log("Todo el codigo posterior se esta demorando");


// Ejemplo de asincronia
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono..."); // 2o mensaje

    // Nuestro callback sera llamado dentro de una funcion asincrona (en este caso un temporizador)
    setTimeout(function () { // EL CALLBACK CORRE EN OTRO HILO PARALELO AL SER ASINCRONICO
        callback(); // 4o mensaje Proceso asincrono completado 
    }, 2000); // Nuestro temporizador tiene un primer parametro (funcion) y un segundo parametro (numero) -> milisegundos
}

console.log("Mensaje antes de la llamada a procesoAsincrono"); // 1er mensaje

procesoAsincrono(function () {
    console.log("Proceso asincrono completado");
})

console.log("Mensaje por consola que se ejecuta inmediatamente"); // 3er mensaje

// Mensaje antes de la llamada a procesoAsincrono
// Iniciando proceso asincrono...
// Mensaje por consola que se ejecuta inmediatamente
// (a los 2 segs) Proceso asincrono completado


/*=========================================
    Casos de uso comunes de callbacks
=========================================*/

// 1. Temporizadores (timers): setTimeout (se ejecuta 1 vez), setInterval(se ejecuta en intervalos de x segundos)
setTimeout(() => console.log("Esto se ejecuta despues de 3 segundos"), 3000);
console.log("Mensaje que no espera al temporizador");

// 2. Eventos del DOM
const boton = document.getElementById("boton");
boton.addEventListener("click", function (event) {
    console.log(`Boton clickeado ${event.target}`);
});

// 3. Metodos funcionales
const numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function (numero, indice) {
    console.log(`Indice: ${indice}, Valor: ${numero}`);
});

// map
const duplicados = numeros.map(num => num * 2);

// 4. Peticiones HTTP (JavaScript VIII)

// 5. Lectura de archivos con Node.js (Mas adelante)


/*=========================================
    Ventajas y desventajas de callbacks
===========================================

    Ventajas
        - Simplicidad: Faciles de entender para operaciones simples
        - Universalidad: Compatibles con todos los navegadores
        - Flexibilidad: Permiten crear codigo reutilizable

    Desventajas
        - Callback Hell: Anidamiento excesivo que dificulta la lectura
        https://www.reddit.com/r/ProgrammerHumor/comments/27yykv/indent_hadouken/#lightbox

        - Manejo de errores: Complicado con callbacks anidados

        - Flujo de control: Dificil de seguir con operaciones complejas


// Ejemplo de Callback Hell (Pyramid of Doom)

function procesoCompleto(callback) {
    paso1(function (error, resultado1) {
        if (error) return callback(error);
        paso2(resultado1, function (error, resultado2) {
            if (error) return callback(error);
            paso3(resultado2, function (error, resultado3) {
                if (error) return callback(error);
                paso4(resultado3, function (error, resultadoFinal) {
                    if (error) return callback(error);
                    callback(null, resultadoFinal);
                });
            });
        });
    });
}


// Alternativas modernas al callback hell

    - Promesas: .then().catch()
    - Async/Await: Sintaxis mas limpia y legible para trabajar con promesas

// Mismo ejemplo con Async/Await
async function procesoCompleto() {
    try {
        const resultado1 = await paso1();
        const resultado2 = await paso2(resultado1);
        const resultado3 = await paso3(resultado2);
        const resultadoFinal = await paso4(resultado3);
        return resultadoFinal;

    } catch (error) {
        console.error('Error:', error);
    }
}


Los callbacks son clave para poder trabajar con JavaScript y se utilizan ampliamente para:

    - Manejar eventos del usuario
    - Operaciones asincronas
    - Temporizadores
    - Procesamiento de datos
    - Comunicacion con servidores

Aunque las promesa y async/await ofrecen alternativas mas modernas, entender los callbacks es fundamental
*/

/*=========================================
    Callbacks y High Order Functions
===========================================

Un callback es simplemente una funcion que pasamos como argumento a otra funcion
Y que sera llamada en algun momento dentro de esa funcion

Es el USO CONCRETO de pasar una funcion como parametro


Una High Order Function (HOF) / Funcion de alto nivel es una funcion que cumple al menos una de estas dos condiciones o ambas

    1. Recibe una o mas funciones como argumentos (ej: map, filter, reduce)
    2. Devuelve una funcion como resultado


En resumen
    - Callback es la funcion pasada como argumento
    - HOF o Funcion de alto nivel
*/

// Caso 1: Recibe una funcion
// const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num); // map() recibe una funcion como argumento
// map es una HOF porque recibe un callback como argumento

// Caso 2: Devuelve una funcion
function multiplicador(factor) {
    return function(x) { // Retorna una funcion
        return x * factor
    }
}
// Multiplicador es una HOF porque devuelve una funcion

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);
console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15


/*==================
    Destructuring
====================

El destructuring o "desestructuracion" es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlos a variables de forma concisa.

Es basicamente una forma de "descomponer" estructuras de datos como arrays y objetos en variables individuales sin tener que acceder manualmente a cada elemento o propiedad

    - Mejora la legibilidad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas para obtener lo mismo)
*/

// const numeros = [1, 2, 3, 4, 5];
// Ejemplo sin destructuring con arrays
const prim = numeros[0];
const seg = numeros[1];
console.log(prim, seg); // 1 2

// Con destructuring
const [uno, dos] = numeros;
console.log(uno, dos); // 1 2


// Ejemplo sin destructuring con objetos
const persona = { nombre: "Fabrizio", edad: 24 };
const nom = persona.nombre;
const eda = persona.edad;

// Con destructuring
/*
const { nombre, edad } = persona;
console.log(nombre, edad); // Fabrizio 24
*/

const { nombre: n, edad: e } = persona; // Podemos asignar tambien nuevas variables
console.log(n, e); // Fabrizio 24


// Destructuring de arrays con valores omitidos
const [primero, ,tercero] = [10, 20, 30];
console.log(primero, tercero); // 10 30


// Rest operator con destructuring
// En arrays
const [a, ...resto] = [1, 2, 3, 4];
console.log(a); // 1
console.log(resto); // [2, 3, 4]

// En objetos
const {nombre, ...otros} = { nombre: "Martino", edad: 30, pais: "Argentina"};
console.log(nombre); // Martino
console.log(otros); // { edad: 30, pais: "Argentina"}


/*====================
    Spread Operator
======================

El spread operator, "..." es una sintaxis introducida en ES6 (2015) que permite descomponer elementos iterables como arrays, strings y objetos en elementos individuales. Su principal funcion es copiar, combinar o expandir estructuras de datos de forma eficiente

El spread operator trabaja a nivel de valores individuales, extrayendo cada elemento de un iterable y colocandolos ene l contexto donde se usa. Como lo interpreta JavaScript?

    1. Convierte el iterable en una sencuencia de valores individuales
    2. Propaga (spread) esos valores en el nuevo contexto (array, objeto, llamada a funcion, etc)
    3. No modifica el original 


El spread operator nos simplifica
    - Manipulacion de arrays (copiar, concatenar)
    - Combinacion de objetos (mezzcla propiedades)
    - Paso de argumentos a funciones
*/

// Copia superficial (Shallow copy)
const arrayOriginal = [1, 2, 3];
const arrayCopia = [...arrayOriginal];

console.log(arrayCopia); // [1, 2, 3]
// Los cambios que hagamos en copia no afectan al original
// Si hay OBJETOS anidados, estos SI se referencian

arrayCopia[0] = 10;
console.log(arrayOriginal); // [1, 2, 3]
console.log(arrayCopia); // [10, 2, 3]

const objetoOriginal = [
    { nombre: "Cosme" }
];

const objetoCopia = [...objetoOriginal];

console.log(objetoOriginal[0].nombre); // Cosme
console.log(objetoCopia[0].nombre); // Cosme

objetoCopia[0].nombre = "Fulanito"; // Ahora cambio el nombre en la copia

console.log(objetoOriginal[0].nombre); // Fulanito
console.log(objetoCopia[0].nombre); // Fulanito

// Que copie solo un nivel significa que copia el array externo pero NO copia los objetos ni los arrays internos. A esto nos referimos con una copia superficial (shallow copy)


// Concatenacion de arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const arrCombinado = [...arr1, ...arr2]; // Reemplaza al concat y es mas eficiente!
console.log(arrCombinado); // [1, 2, 3, 4]


// Concatenacion de strings
const str = "Holis";
const chars = [...str]; 
console.log(chars); // ['H', 'o', 'l', 'i', 's']
//  Reemplaza a split() al concertir strings en arrays


// Combinacion de objetos
const defaults = { theme: "dark", fontSize: 16};
const userSettings = { fontSize: 18 };
const finalConfig = {...defaults, ...userSettings }; // Las propiedades posteriores sobreescriben las anteriores
console.log(finalConfig); // {theme: 'dark', fontSize: 18}



// Spread operator en funciones
// Pasar argumentos desde un array
function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];

console.log(sum(...nums)); // 6

// Recoger argumentos restantes (Rest Parameters)
function logArgs(first, ...rest) { // Rest operador 
    console.log(first); // a
    console.log(rest); // ["b", "c"]
}

logArgs("a", "b", "c");
// ...rest agrupa los argumentos sobrantes en un array


/*========================
    Funciones anidadas
==========================

En JavaScript, una funcion anidada es simplemente una funcion definida dentro de otra funcion.

Una funcion interna que vive en el ambito lexico (scope) de una funcion externa. Una funcion anidada es una funcion que:

    - Se declara DENTRO de otra funcion
    - Tiene acceso a todas las variables y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar la logica o crear closures

Ojota!
    - Las funciones anidadas NO estan disponibles fuera del scope donde se definen
    - Recordemos la genkidama! Demasiadas funciones anidadas pueden dificultar la legibilidad si no estan bien organizadas
*/

function saludar(nombre) {
    function construirMensaje() { // funcion anidada dentro de saludar()
        // Tiene acceso a nombre, aunque no se defina aca
        return `Holis! ${nombre}, como te va?`; // Ej scope lexico
    }

    return construirMensaje();
}

console.log(saludar("Gonzalo"));

// Usos comunes:
// 1. Organizacion de codigo: En lugar de escribir una gran funcion, podemos definir sub-funciones internas para modularizar la logica

function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    const limpio = limpiar(texto);
    return contarPalabras(limpio);
}

console.log(procesarTexto("Aguante la genkidama vieja, no me importa nada ndeah")); // 9

// 2. Funciones helper privadas: Las funciones internas no son accesibles desde fuera, lo cual nos permite privacidad
function crearUsuario(nombre) {

    function validarNombre(n) {
        return typeof n === "string" && n.length > 2;
    }

    if (!validarNombre(nombre)) {
        throw new Error("Nombre no valido");
    }

    return nombre;
}