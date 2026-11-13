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
        return mostrarError("Ingresa un id valido");
    }

    try {
        const response = await fetch(`${urlBase}/api/products/${idProd}`);
        console.log(response);

        const data = await response.json();

        // Optimizacion 2: Para capturar errores 400 o 500, filtramos con !response.ok
        if (!response.ok) {
            mostrarError(data.message);
            return;
        }


        const producto = data.payload[0];
        renderizarProducto(producto);

    } catch (error) {
        console.error("Error al obtener producto: ", error.message);
        mostrarError("Error de conexion con el servidor")
    }
});


function renderizarProducto(producto) {
    console.table(producto);

    let htmlProducto = `
        <ul class="lista-container">
            <li class="lista-producto">
                <img src="${producto.image}" alt="${producto.name}" class="lista-producto_img">
                <p>Id: ${producto.id} / Nombre: ${producto.name} / <strong>Precio: $${producto.price}</strong></p>
            </li>
        </ul>
    `;

    contenedorProductos.innerHTML = htmlProducto
}


// Optimizacion 3: mostramos visualmente el error para que sea mas claro e intuitivo
function mostrarError(string) {
    contenedorProductos.innerHTML = `
        <p class="mensaje error">${string}</p>
    `;
}
