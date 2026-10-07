/*============================
    Seleccion de elementos
==============================

getElementById()

    - Este metodo selecciona un unico elemento por su id, si no lo encuentra, devuelve null
    - Solo selecciona el primer elemento que coincida con el ID


querySelector()
querySelectorAll()
    
    - querySelector(): Seleccionamos el primer elemento que coincida con un selector CSS (por clase, ID, nombre de etiqueta)

    - querySelectorAll(): Seleccionamos todos los elementos que coincidan con un selector CSS (por clase, ID, nombre de etiqueta)
*/


// Seleccionamos el titulo con getElementById()
const titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">132 JavaScript</h1>
console.log(titulo.textContent); // 132 JavaScript

// Seleccionamos el primer parrafo con la clase mensaje
const mensaje = document.querySelector(".mensaje");
console.log(mensaje.textContent); // Primer parrafo

// Seleccionamos todos los parrafos con la clase mensaje
const parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos); // Array de nodos o NodeList (tipo de array del DOM)

parrafos.forEach(p => console.log(p.textContent)); 
// Primer parrafo
// Segundo parrafo


/*===================================
    Modificar contenido y atributos
=====================================

Una vez que seleccionamos un elemento, podremos modificar su contenido, atributos o estilos

    - textContent: Modificamos el texto dentro de un elemento
    - innerHTML: Modificar el contenido HTML dentro de un elemento
    - setAttribute: Modificar los atributos de un elemento
    - style: Cambiar el estilo CSS en linea de un elemento


    - textContent es mas eficiente (y mas seguro) ya que solo manipula texto plano
    - innerHTML es mas lento porque el navegador tiene que parsear, crear nodos y renderizar HTML, lo que implica mas trabajo interno y el riesgo de insercion de scripts maliciosos
*/

// Modificamos dinamicamente el contenido del texto del primer parrafo
mensaje.textContent = "Nuevo contenido dinamico desde JavaScript";

// Modificamos el HTML dentro del segundo parrafo
const ultimoParrafo = document.getElementById("ultimo-parrafo");
ultimoParrafo.innerHTML = "<strong>Nuevo HTML dinamico creado con JS</strong>";


const boton = document.getElementById("boton");

// Cambiamos el atributo id 
boton.setAttribute("id", "nuevoId");

// Cambiamos el estilo
boton.style.backgroundColor = "#00ff41";
boton.style.padding = "10px";
boton.style.border = "2px solid";
boton.style.borderRadius = "5px";



/*===================================
        Eventos
=====================================

los eventos permiten a los desarrolladores detectar interacciones del usuario con la pagina web, como hacer click en un boton, mover el mouse, escribir en un campo input. Son fundamentales para hacer que una pagina web sea interactiva

Un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento, como un click o una pulsacion de tecla. JavaSCript permite escuchar estos eventos y ejecutar funciones especificas cuando ocurren.

    - Eventos de mouse: click, dblclick, mouseover, mouseout, mousemove
    - Eventos de teclado: keydown, keyup
    - Eventos de formulario: submit, change, input, focus
    - Eventos de ventana: resize, scroll, load, unload


====================
    event
====================

El objeto event lo incorporamos como parametro en la funcion manejadora y nos proporciona informacion sobre el evento que fue disparado

    - Cuando usamos addEventListener, el navegador llama a nuestra funcion manejadora y le pasa como argumento un objeto de tipo Event (MouseEvent, KeyboardEvent, etc segun el tipo de evento)

    - Este objeto contiene TODOS los datos del evento: que tecla se presiono, que boton hizo clic, coordenadas del mouse, etc
*/

// Le vamos a añadir al boton un escuchador de eventos, un addEventListener
boton.addEventListener("click", () => alert("Hiciste click! Wiiiiiiiii"));

// Selecciono el elemento input
const texto = document.getElementById("texto");

function mensajeConsola() {
    console.log("Hola mundo")
}

// Le asigno un evento keydown al input
// texto.addEventListener("keydown", mensajeConsola); // Paso la funcion en el parametro

texto.addEventListener("keydown", function(event) {
    console.log(`Caracter presionado ${event.key}`); // Caracter presionado 1
    console.log(`Tecla codigo: ${event.code}`); // Tecla codigo: Numpad1
});

/* keyup lo usamos mas para cuando queremos leer el campo del valor de un input, porque es cuando terminamos de escribir
texto.addEventListener("keyup", function(event) {
    console.log(texto.value);
});
*/



/*============================
    Propagacion de eventos
==============================

Cuando ocurre un evento, ese se propaga a traves del DOM en dos fases

    - Fase de captura (de arriba hacia abajo)
    - Fase de burbuja (de abajo hacia arriba)

Podemos detener la propagacion de evnetos usando event.stopPropagation()

    <div id="padre">
        <button id="hijo">Boton</button>
    </div>

Con el metodo event.preventDefault() evito los comportamientos por defecto como el envio de informacion de un <form>

*/

const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");

// Escuchamos el click en el elemento padre
padre.addEventListener("click", () => console.log("Se hizo click en el div padre"));

// Escucho el click en el boton hijo
hijo.addEventListener("click", event => {
    event.stopPropagation(); // Detengo la propagacion de eventos
    console.log("Se hizo click en el boton hijo");
});


// Con el event.preventDefault() evito que el formulario se envie
const miFormulario = document.getElementById("miFormulario");

miFormulario.addEventListener("submit", event => {
    event.preventDefault(); // Evito el envio automatico de formularios html
    
    alert("Formulario no enviado!");
    
    console.log("Puedo hacer operaciones en JavaScript como limpieza de datos de un form");
    
    console.log("Envio los datos con la API fetch");
})