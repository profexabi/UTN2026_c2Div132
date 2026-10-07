/*=======================
    Bucle for
=========================

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    - Ventajas: Maximo control y velocidad, podemos usar break y continue
    - Desventajas: Mas verboso (mas dificil de leer)
*/

// Sumando elementos con un bucle for clasico
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma); // 15


// Buscar elemento que comience por "ban" y terminar con la iteracion
const frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        console.log(frutas[i]); // banana
        break;
    }
}


// Filtrar precios caros > 150000
const productos = [
    { id: 1, nombre: "Mouse", precio: 5000 },
    { id: 2, nombre: "Teclado", precio: 15000 },
    { id: 3, nombre: "Laptop", precio: 500000 },
    { id: 4, nombre: "Monitor", precio: 200000 },
    { id: 5, nombre: "Tarjeta grafica", precio: 800000 },
    { id: 6, nombre: "Mousepad", precio: 2500 },
];

let productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 150000) {
        productosCaros.push(productos[i]);
    }
}

console.table(productosCaros);
/*[
    {
        "id": 3,
        "nombre": "Laptop",
        "precio": 500000
    },
    {
        "id": 4,
        "nombre": "Monitor",
        "precio": 200000
    },
    {
        "id": 5,
        "nombre": "Tarjeta grafica",
        "precio": 800000
    }
]*/


/*=======================
    forEach()
=========================

    array.forEach((elemento, indice, arrayOriginal) => {
        console.log(elemento, indice)    
    })

    - Ventajas: Sintaxis limpia, no necesita contador
    - Desventajas: No se puede romper el bucle (break o continue)
*/

// Imprimir elementos
const colores = ["rojo", "celeste", "azulgrana"];
colores.forEach(color => console.log(color));
// rojo
// celeste
// azulgrana

/* La misma funcion de arriba
colores.forEach(function(color) {
    console.log(color);
});
*/

// Nuevo array con los valores duplicados
// const numeros = [1, 2, 3, 4, 5];
const duplicados = [];
numeros.forEach(n => duplicados.push(n * 2));
console.log(duplicados); // [2, 4, 6, 8, 10]


// Actualizar propiedades agregando la propiedad aprobado dependiendo de si la nota es superior a 6
const estudiantes = [
    { nombre: "Fabrizio", nota: 9 },
    { nombre: "Gonza", nota: 8 },
    { nombre: "Agustin", nota: 4 },
    { nombre: "Aaron", nota: 2 },
    { nombre: "Franco", nota: 10 },
];

estudiantes.forEach(e => {
    e.aprobado = e.nota >= 6
});

console.table(estudiantes);
/*
[
    {
        "nombre": "Fabrizio",
        "nota": 9,
        "aprobado": true
    },
    {
        "nombre": "Gonza",
        "nota": 8,
        "aprobado": true
    },
    {
        "nombre": "Agustin",
        "nota": 4,
        "aprobado": false
    },
    {
        "nombre": "Aaron",
        "nota": 2,
        "aprobado": false
    },
    {
        "nombre": "Franco",
        "nota": 10,
        "aprobado": true
    }
]
*/


////////////////////////
// Metodos funcionales ES5


/*=======================
    map()
=========================

    const nuevosValores = array.map(elemento => elemento * 2);

    - Proposito: Transformar cada elemento
    - Retorna: Nuevo array con los resultados
*/

// Creamos nuevo array de cuadrados
// const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// Transformar las edades en un "Hola, tengo x años!"
const edades = [25, 30, 19, 48];
const edadesMsg = edades.map(edad => `Hola, tengo ${edad} años!`);
console.log(edadesMsg);
// ['Hola, tengo 25 años!', 'Hola, tengo 30 años!', 'Hola, tengo 19 años!', 'Hola, tengo 48 años!']

// Extraemos los nombres de los estudiantes
const nombresEstudiantes = estudiantes.map(e => e.nombre);
console.log(nombresEstudiantes); // ['Fabrizio', 'Gonza', 'Agustin', 'Aaron', 'Franco']


/*=======================
    filter()
=========================

    const filtrados = array.filter(elemento => elemento > 10);

    - Proposito: Seleccionar cada elemento que cumpla una condicion
    - Retorna: Nuevo array con los elementos filtrados
*/

// Filtramos numeros pares
// const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // [2, 4]

console.log("5" == 5); // true (igualdad simple realiza parseo si es necesario)
console.log("5" === 5); // false (igualdad estricta iguala valor y tipo)


// Filtrar strings largos (palabras > 5 caracteres)
const palabras = ["hola", "chau", "merequetengue", "ndeaahhh", "tuki", "chupete"];
const palabrasLargas = palabras.filter(p => p.length > 5);
console.log(palabrasLargas); // ['merequetengue', 'ndeaahhh', 'chupete']


// Filtrar estudiantes > 8 nota
const eleg1d0s = estudiantes.filter(e => e.nota > 8);
console.table(eleg1d0s);



/*=======================
    reduce()
=========================

    const sumaTotal = array.reduce((total, elemento) => total + elemento, 0)

    - Proposito: Reducir el array a un valor unico
    - Retorna: Valor acumulado
*/

// Sumamos los valores
const decenas = [10, 20, 30, 40];
const sumaDecenas = decenas.reduce((total, num) => total + num , 0);
console.log(sumaDecenas);


// Sumamos las ventas (precio x cantidad)
const ventas = [
    { producto: "Camisa", cantidad: 3, precio: 25 },
    { producto: "Pantalon", cantidad: 2, precio: 40 },
    { producto: "Zapatos", cantidad: 1, precio: 80 },
];

const totalVentas = ventas.reduce((suma, p) => {
    return suma + (p.precio * p.cantidad);
}, 0);

console.log(totalVentas); // 235



/*=======================
    find() y findIndex()
=========================

    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

    - Proposito: Buscar el primer elemento que cumpla una condicion
    - Retorna: Elemento o indice (o undefined/-1 si no lo encuentra)
    - Es como el filter pero solo busca el primer elemento
*/

const numerosRandom = [5, 12, 8, 130, 44];

// Buscar el primer elemento superior a 10
const encontrado = numerosRandom.find(num => num > 10);
console.log(encontrado);

// Busco el indice del elemento superior a 100
const indice = numerosRandom.findIndex(num => num > 100);
console.log(indice); // 3



/*=======================
    some() y every()
=========================

    const algunoCumple = array.some(elemento => elemento > 0);
    const todosCumplen = array.every(elemento => elemento > 0);

    - Proposito: Verificar si alguno/todos cumplen una condicion
    - Retorna: Booleano
*/

const listaNums = [1, 3, 5, 7, 8];

// Verificamos si hay numeros pares
const hayPares = listaNums.some(num => num % 2 === 0);
console.log(hayPares); // true

// Comprobar si todos son positivos
const todosPositivos = listaNums.every(num => num > 0);
console.log(todosPositivos); // true


/*=======================
    for...of
=========================

    for (const elemento of array) {
        console.log(elemento);
        if (elemento === "algo") break;
    }

    - Ventajas: Sintaxis limpia, permite break y continue
    - Desventajas: No provee indice automatico
*/

const simbolos = ['€', '$', '¥', '£'];
// Detendremos el bucle al llegar al ¥
for (const simb of simbolos) {
    if (simb === "¥") break;
    console.log(simb);
}


// Vamos a buscar el primer estudiante con menos de un 6 de nota y romper el bucle
for (const est of estudiantes) {
    if (est.nota < 6) {
        console.log(`${est.nombre} reprobo con un ${est.nota}`);
        break;
    }
}

// Agustin reprobo con un 4


/*=======================
    Iteracion en objetos
=========================

    - for...in
    - Object.keys()
    - Object.values()
    - Object.entries()
*/



/*================================
    Comparacion de rendimiento
==================================

    1. Bucles clasicos (for, while) son los mas rapidos para iteraciones simples
    2. Metodos funcionales (map, filter, etc) son mas lentos pero mas expresivos (faciles de leer)
    3. for...of ofrece un buen equilibrio entre rendimiento y legibilidad


Recomendaciones de uso

    - Transformar un array:     map()
    - Filtrar elementos:        filter()
    - Reducir a un valor:       reduce()
    - Buscar elemento:          find(), findIndex()
    - Iteracion facil leer:     forEach()
    - Necesito romper bucle:    for y for...of
    - Verificar condiciones:    some(), every()
*/