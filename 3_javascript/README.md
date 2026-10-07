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

## JavaScript VI
- [Ejercicios de manipulacion del DOM](https://drive.google.com/file/d/1JGimlE_LlHeoIGgAZgC1njTZV62vyViB/view)



---

## JavaScript V / Objetos globales y almacenamiento persistente. Iteracion en arrays, objetos y arrays de objetos
- [Ejercicios de strings y arrays](https://drive.google.com/file/d/1zYIAvu8xh2GUHgIkesW3faZxzNYpMp-o/view)

### Objetos globales en JavaScript
En JavaScript, los objetos globales son aquellos que estan disponibles en todo el entorno de ejecucion (navegador y Node.js) sin necesidad de importarlos o declararlos explicitamente.

Varian depende del entorno de ejecucion pero **su proposito es facilitar el acceso a ciertas funciones y valores predeterminados**

### Objetos globales en el navegador
En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript, como `Array`, `String`, `Object`, etc. *Estos objetos son la explicacion de por que JavaScript provee de metodos como `.length` a tipos de datos primitivos. Este funcionamiento en JavaScript se llama "object wrapper" donde JavaScript envuelve en un objeto a este tipo de datos primitivos proporcionandole metodos.*

Asi como objetos especificos para la interaccion con la pagina web y su entorno.

#### `window` 
El objeto global principal en el entorno del navegador es `window`. Este objeto representa la ventana del navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web. Todos los objetos, variables y funciones definidos en el ambito global estan automaticamente disponibles como propiedades del objeto `window`. *Ojo! Solamente las variables `var` se anexan a window*

#### Objetos y metodos importantes del objeto `window`
- `document`: Representa el [DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp) de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML
```js
document.getElementById("miElemento");
```

- `alert()`, `prompt()`, `confirm()`: Metodos que permiten mostrar dialogos al usuario
```js
alert("Mensaje de alerta");
```

- `setTimeout()`, `setInterval()`: Metodos para programar la ejecucion de codigo despues de un tiempo, o en intervalos regulares

- `location`: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL
```js
console.log(window.location.href); // URL actual
```

- `navigator`: Contiene informacion sobre el navegador como la version, el agente de usuario y la geolocalizacion
```js
console.log(navigator.userAgent); //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36
```

- `console`: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion
```js
console.log("Mensaje en la consola");
console.log(console); // Podremos ver el objeto console en el navegador y ver que metodos provee
```

- `localStorage` y `sessionStorage`: Permiten almacenar datos en el navegador de manera persistente o temporal
```js
localStorage.setItem("nombre", "Matias");
console.log(localStorage.getItem("nombre")); // El valor matias en la clave nombre quedara almacenado permanentemente en mi navegador
```

- `history`: Proporciona acceso al historial de navegacion del navegador
```js
history.back(); // Va a la pagina anterior
```

### Almacenamiento de datos en JavaScript
En JavaScript, almacenar datos implica elegir la estructura adecuada de acuerdo con el tipo de informacion que se quiere guardar y como se desea manipular. JavaScript proporciona varios tipos de estructuras para almacenar datos:

- **Variables simples**: Para valores unicos como numeros, strings, etc
- **Objetos**: Para representar datos complejos con propiedades
- **Arrays**: Para almacenar una lista de elementos, idealmente del mismo tipo
- **Arrays de objetos**: Para manejar listas de elementos complejos que contienen multiples propiedades


#### Objetos
Un objeto en JavaScript es una coleccion de propiedades donde cada propiedad tiene un nombre clave o "key" y un valor. Los objetos son ideales para representar una unica entidad o elemneto que tiene varias propiedades o atributos

```js
let persona = {
    nombre: "Aaron",
    edad: 21,
    ocupacion: "Ingeniero"
}
```

En este caso, `persona` es un objeto que almacena varias propiedades de una persona. Usamos este tipo de almacanmiento cuando queremos acceder a atributos especificos de una unica entidad. Es muy util para representar conceptso unicos en la aplicacion como un usuario, un producto en particular o una configuracion de sistema.

**Cuando usar objetos?**
- Cuando deseamos representar una unica entidad con multiples atributos
- Cuando sabemos que no habra multiples instancias o copias de esos datos en la aplicacion
- Cuando necesitamos acceder a propiedades especificas mediante sus nombres


#### Almacenamiento de multiples elementos similares: Arrays de objetos
**Si necesitamos almacenar varias instancias del mismo tipo de entidad (listas de personas, productos, pedidos, ble), lo comun es usar un array de objetos**.

Un array de objetos es una estructura que permite almacenar multiples objetos, donde cada objeto tiene la misma estructura o contiene atributos similares

```js
let personas = [
    { nombre: "Jonathan", edad: 21, ocupacion: "Programador fullstack" },
    { nombre: "Miguel", edad: 24, ocupacion: "Ciberseguridad" },
    { nombre: "Matias", edad: 25, ocupacion: "Devops" },
    { nombre: "Valentino", edad: 20, ocupacion: "Project Manager" },
]
```

`personas` es un array de objetos que almacena multiples elementos (cada uno representando una persona con sus propiedades). 

**Cuando usar arrays de objetos?**
- Cuando necesitamos almacenar multiples instancias de una misma entidad o estructura de datos
- Cuando planeamos realizar operaciones sobre una lista de elementos como iteraciones, filtrados o agrupaciones
- Si necesitamos aplicar metodos de los arrays como `map`, `filter`, `find`, `reduce`
- Ej: Listado de usuarios registrados en una plataforma. Inventario de productos en una tienda. Historial de transacciones o registros. Etc


---

#### Cuando usar un objeto, un array o un array de objetos?
La decision de cual estructura utilizar dependende de las necesidades del proyecto y el tipo de manipulacion de datos que planeas realizar

- **Un objeto simple**: Si solo tenemos una entidad (como config de usuario) o un unico elemento que contiene datos con varias propiedades, un objeto es la mejor opcion. Acceder a propiades individuales de un objeto es rapido y sencillo

- **Un array simple**: Para una lista ordenada de elementos individuales (lista de nombres o identificadores), donde cada elemento no requiere atributos adicionales, un array simple (de valores primitivos) es suficiente. Esto permite manipular la lista con metodos de array (sort, reverse, push, etc)

- **Un array de objetos**: Cuando tenemos una lista de entidades complejas, cada una con multiples propiedades, un array de objetos es la estructura ideal. Esta configuracion es la que permite realizar operaciones en lote y mantener una coleccion de elementos relacionados de forma organizada


#### Resumen
- Un objeto simple para una unica entidad
- Array de valores para listas sencillas de datos primitivos
- Array de objetos para colecciones de entidades complejas, ideales para trabajar en conjunto y aplicar transformaciones

```js
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
```

---


## JavaScript IV / Introduccion a arrays, metodos de strings y arrays

- [Ejercicios de JavaScript IV](https://drive.google.com/file/d/13xWRPLHdRHNJS0zh_GpAW8czpd073ZXD/view)

En JavaScript, los arrays y objetos son estructuras de datos fundamentales.

- Los arrays se utilizan para almacenar una lista ordenada de elementos
- Los objetos son ideales para almacenar datos con propiedades clave-valor

```js
/*=========================
    Arrays en JavaScript
*==========================

Un array es una lista ordenada de elementos, donde cada uno tiene una posicion o indice. Los arrays en JS son muy flexibles: puedne contener cualquier tipo de datos (numeros, cadenas, booleanos, otros arrays, objetos, funciones, etc) y los elementos no tienen necesariamente que ser del mismo tipo
*/

let colores = ["rojo", "verde", "azul"];
console.log(colores[0]);
console.log(colores[2]);

// Accediendo al ultimo elemento
console.log(colores[-1]); // undefined -> apuntesJS.md
console.log(colores[colores.length -1]); // azul (colores[2])
console.log(colores.at(-1)); // azul



/*=========================
    Objetos en JavaScript
*==========================

Un objeto en JS es una coleccion de pares clave-valor. 
Las claves son strings que identifican a cada valor, lo que permite un acceso rapido y estructurado a los datos. 

Los objetos son utiles cuando deseas representar una entidad con multiples propiedades
*/

let persona = {
    nombre: "Gonzalo",
    edad: 20,
    ciudad: "Quilmes"
};

// Podemos acceder a las propiedades de un objeto a traves de la notacion de punto y la notacion de corchete

// Notacion de punto
console.log(persona.ciudad); // Quilmes

// Notacion de corchete
console.log(persona["nombre"]); // Gonzalo

// Agregar una propiedad
persona.pais = "Argentina";

// Eliminar una propiedad
delete persona.edad;

console.log(persona); // {nombre: 'Gonzalo', ciudad: 'Quilmes', pais: 'Argentina'}


// Los objetos tambien pueden tener metodos, que son funciones almacenadas en una propiedad
let gato = {
    nombre: "Pedro",
    maullar: function() {
        console.log("Miau!");
    }
};

gato.maullar(); // Miau!


// Usaremos arrays cuando necesitemos almacenar una lista ordenada de elementos (idealmente del mismo tipo, como una lista de nombres)

// Usaremos objetos cuando tengamos datos estructurados que puedan agruparse en propiedades clave-valor (como los atributos de una persona o las especificaciones de un producto)


/*=============================
    Metodos de strings en JS
=============================*/

// 1. length: Devuelve la longitud del string
console.log("Hola".length); // 4

// 2. charAt(index): Devuelve el caracter en la posicion indicada
console.log("Hola".charAt(1)); // o

// 3. concat(str1, str2, ...): Concatena strings
console.log("Hola".concat(" ", "mundo")); // Hola mundo

// 4. includes(substring): Devuelve true si el substring esta en el string
console.log("JavaScript".includes("Script")); // true

// 5. startsWith(substring): Comprueba si el string comienza con el substring 
// endsWith(substring): Comprueba si el string termina con el substring
console.log("Hola mundo".startsWith("Hola")); // true

// 6. indexOf(substring): Devuelve el indice de la primera aparicion del substring
console.log("banana".indexOf("a")); // 1

// 7. lastIndexOf(substring): Indice de la ultima aparicion de substring
console.log("banana".lastIndexOf("a")); // 5

// 8. replace(searchValue, newValue): Reemplaza una parte del string
console.log("Hola mundo".replace("mundo", "JavaScript")); // Hola JavaScript

// 9. replaceAll(searchValue, newValue): Reemplaza todas las apariciones
console.log("1, 2, 3, 4, 5".replaceAll(", ", ";")); // 1;2;3;4;5

// 10. toLowerCase(): Convierte a minusculas
console.log("JAVASCRIPT".toLowerCase()); // javascript

// 11. toUpperCase(): Convierte a mayusculas
console.log("holi como estas".toUpperCase()); // HOLI COMO ESTAS

// 12. trim(): Elimina espacios en blanco al inicio y al final. Tambien tenemos trimStart() y trimEnd()
console.log("     Hola    ".trim()); //  Hola

// 13. slice(start, end): Extrae parte del string
console.log("JavaScript".slice(0, 4)); // Java
console.log("JavaScript".slice(-6)); // Script

// 14. substring(start, end): Similar a slice, pero no acepta negativos
console.log("JavaScript".substring(4, 10)); // Script

// 15. split(separator): Divide el string en un array
console.log("Hola".split("")); // ['H', 'o', 'l', 'a']
console.log("rojo, verde, azul".split(", ")); // ['rojo', 'verde', 'azul']

// 16. repeat(count): Repite el string
console.log("Ji".repeat(3)); // JiJiJi

// 17. match(regex): Devuelve coincidencias con una expresion regular
console.log("abc123".match(/\d+/g)); // ['123']



/*=============================
    Metodos de arrays en JS
=============================*/

// 1. length: Devuelve la longitud del array
console.log([1, 2, 3].length); // 3

// 2. push(element): AGREGA un elemento al FINAL del array
let arr = [1, 2];
arr.push(3)
console.log(arr); // [1, 2, 3]

// 3. pop(): ELIMINA un elemento al FINAL del array y lo devuelve
console.log(arr.pop()); // 3
console.log(arr); // [1, 2]

// 4. unshift(element): AGREGA un elemento al PRINCIPIO del array
arr.unshift(0);
console.log(arr); // [0, 1, 2]

// 5. shift(element): ELIMINA el PRIMER elemento y lo devuelve
console.log(arr.shift()); // 0
console.log(arr); // [1, 2]

// 6. concat(array): Concatena arrays
console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 7. join(separator): Une los elementos en un string
console.log([1, 2, 3].join("-")); // 1-2-3

// 8. slice(start, end): Extrae una copia parcial del array
console.log([1, 2, 3, 4, 5, 6].slice(1, 3)); // [2, 3]

// 9. splice(start, deleteCount, ...items): Modifica el array in situ. Puede borrar y agregar
let nuevoArr = [1, 2, 3, 4, 5, 6];
nuevoArr.splice(1, 2, "dos", "tres");
console.log(nuevoArr); // [1, 'dos', 'tres', 4, 5, 6]

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.splice(4, 2, "cinco", "seis"); 
// console.log(numeros.splice(4, 2, "cinco", "seis")); // Retorna los valores eliminados [5, 6]
console.log(numeros); //[1, 2, 3, 4, 'cinco', 'seis', 7, 8, 9, 10]

// 10. indexOf(element): Devuelve la primera posicion del elemento o -1 (si no se encontro)
console.log([1, 2, 3].indexOf(2)); // 1

// 11. lastIndexOf(element): Devuelve la ultima posicion del elemento o -1
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// 12. includes(element): Devuelve true si el elemento existe
console.log([1, 2, 3].includes(2)); // true
```


---

## JavaScript III / Scope y ambito, funciones y tipos de funciones

### Ejercicios sugeridos de JS III
- Crear una funcion tradicional que reciba dos numeros y devuelva la suma de ambos
- Convertir la funcion anterior en una funcion flecha
- Crear una funcion que reciba un nombre y una edad con un prompt y devuelva en una funcion flecha un mensaje personalizado


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

