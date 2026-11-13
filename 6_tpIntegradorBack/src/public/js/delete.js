const contenedorProductos = document.getElementById("contenedor-productos");
const getIdProductForm = document.getElementById("getIdProductForm");
const urlBase = "http://localhost:3000";

getIdProductForm.addEventListener("submit", async event => {

    // Evitamos el envio por defecto del <form>
    event.preventDefault();

    // Extraemos el valor del campo id 
    const idProd = Number(event.target.idProd.value.trim());
    // console.log(idProd);

    // Optimizacion 1: Filtramos en el cliente en caso de que no haya un id valido
    if (!idProd || idProd <= 0) {
        return mostrarMensaje("error", "Ingresa un id valido");
    }

    try {
        const response = await fetch(`${urlBase}/api/products/${idProd}`);
        console.log(response);

        const data = await response.json();

        // Optimizacion 2: Para capturar errores 400 o 500, filtramos con !response.ok
        if (!response.ok) {
            return mostrarMensaje("error", data.message);
        }

        const producto = data.payload[0];

        renderizarProducto(producto);

    } catch (error) {
        console.error("Error al obtener producto: ", error.message);
    }
});


function renderizarProducto(producto) {
    console.table(producto);

    let htmlProducto = `
        <ul class="lista-container">
            <li class="lista-producto">
                <img src="${producto.image}" alt="${producto.name}" class="lista-producto_img">
                <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong></p>
                <p><button id="deleteProduct-button">Eliminar producto</button></p>
            </li>
        </ul>
    `;

    contenedorProductos.innerHTML = htmlProducto;

    const deleteProductButton = document.getElementById("deleteProduct-button");

    deleteProductButton.addEventListener("click", event => {

        // Evitamos la propagacion de eventos con respecto al evento de preventDefault
        // event.stopPropagation(); 

        const confirmacion = confirm("Queres eliminar este producto?");

        if(!confirmacion) {
            alert("Eliminacion cancelada")
        } else {
            eliminarProducto(producto.id);
        }
    });
}

async function eliminarProducto(id) {
    console.log(id); // El id llega correctamente a la funcion

    try {
        const response = await fetch(`${urlBase}/api/products/${id}`, {
            method: "DELETE"
        });

        console.log(response);

        const result = await response.json();
        console.log(result);

        // Optimizacion 2: Para capturar errores 400 o 500, filtramos con !response.ok
        if (!response.ok) {
            return mostrarMensaje("error", result.message);
        }

        console.log(result.message);
        mostrarMensaje("exito", result.message);



    } catch (error) {
        console.error("Error en la solicitud DELETE: ", error);
        alert("Ocurrio un error al eliminar un producto")
    }
}


// Optimizacion 3: mostramos visualmente el mensaje, error o exito para que sea mas claro e intuitivo
function mostrarMensaje(estado, mensaje) {
    contenedorProductos.innerHTML = `
        <p class="mensaje ${estado}">${mensaje}</p>
    `;
}

