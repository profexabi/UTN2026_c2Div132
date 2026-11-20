# TP Integrador Front

## Imprimir tickets y crear ventas
```js
// Imprimir ticket PDF /////////////////////////////
boton_imprimir.addEventListener("click", imprimirTicket);


function imprimirTicket() {
    /*  https://github.com/parallax/jsPDF
        https://parallax.github.io/jsPDF/docs/
    
    Recordemos introducir el CDN en el <head> de esta pagian
    <!-- CDN para usar jsPDF -->
    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>*/

    // Para crear las ventas a posteriori, necesitamos guardar los ids de los productos del carrito
    const idProductos = [];

    // Gracias a este CDN, extraemos la clase jspdf del objeto global iwndow
    const { jsPDF } = window.jspdf;

    // Creamos una nueva instancia del document pdf usando la clase jsPDF
    const doc = new jsPDF(); // doc contendra todos los metodos para poder crear un ticket

    // Igual que con pygame, a la hora de programar con graficos, basicamente jugaremos con las coordenadas "x" e "y"

    let y = 20; // Controlamos el eje vertical estableciendo una separacion de 20px en el eje vertical

    doc.setFontSize(20); // Establecemos el tamaño de fuente del titulo

    doc.text("Llama-ticket de compra:", 20, y ); // Definimos el titulo del ticket, 20px eje x, 20px eje y

    y += 20; // Aumentamos 20 pax para dejar espacio despues del titulo

    doc.setFontSize(14); // Reducimos el tamaño de fuente para imprimir los productos del ticket

    // Iteramos el carrito e imprimimos nombre y precio
    carrito.forEach(producto => {

        idProductos.push(producto.id); // Llenamos el array de ids de productos (necesario para crear la venta despues)

        doc.text(`${producto.name} - ${producto.price}`, 20, y); // 20px derecha y valor del eje y

        // Al terminar la primer iteracion, incrementamos la posicion vertical para evitar solapamiento
        y += 10;
    });

    // Calculamos el valor total del ticket usando reduce
    const precioTotal = carrito.reduce((acumulador, producto) => acumulador + parseInt(producto.price), 0);

    // Separamos verticalmente los productos del total
    y += 10

    doc.text(`TOTAL: $${precioTotal}`, 20, y);

    const fecha = new Date();
    const nombreTicket = `${nombreUsuario}_${fecha.toISOString()}`;

    // Imprimimos ticket de venta
    doc.save(`ticket-${nombreTicket}.pdf`);

    // Llamaremos a la funcion para registrar ventas
    registrarVenta(precioTotal, idProductos);
}



async function registrarVenta(precioTotal, idProductos) {
    try {
        // Mi tabla necesitara nombreUsuario, precioTotal y fecha
        const fecha = new Date();

        // El ISOString trae la hora de UTC, tenemos que pasarla a hora Argentina
        const fechaArgentinaISO = new Intl.DateTimeFormat("sv-SE", {
            timeZone: "America/Argentina/Buenos_Aires",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h23"
        }).format(fecha);

        console.log(fechaArgentinaISO);
        
        // Tendremos que corregir el formato de fecha que acepte mysql
        const fechaFormato = fechaArgentinaISO.slice(0, 19);

        console.log(fechaFormato);
        
        // Definimos lo que le vamos a mandar al endpoint /api/sales
        const data = {
            date: fechaFormato,
            total_price: precioTotal,
            user_name: nombreUsuario,
            products: idProductos // Array de ids de producto
        }

        const response = await fetch(`${urlBase}/api/sales`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        // Filtramos el resultado de la respuesta del servidor
        if(response.ok) { // Dentro del rango de 2** OK
            console.log("Venta registrada: ", result.message);
            alert("Venta registrada: ", result.message);

            // Hecho esto, eliminamos el item del sessionStorage y redirigimos a la pantalla de bienvenida
            sessionStorage.removeItem("nombreUsuario");

            window.location.href = "index.html";
        
        } else {
            console.error(result);
            alert("Error en la venta: ", result.message);
        }
        

    } catch (error) {
        console.error("Error al enviar los datos: ", error);
        alert("Error al procesar la solicitud")
    }
}
```