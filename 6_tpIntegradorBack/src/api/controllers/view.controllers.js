/*===============================
	Controladores de producto
===============================*/

import ProductModels from "../models/product.models.js";


///////////////////
// Vista eliminar
export const vistaProductos = async (req, res) => {

    // Le solicitamos al modelo de productos los productos activos
    const [rows] = await ProductModels.selectAllProducts();

	res.render("index", {
		title: "Dashboard principal",
        listaProductos: rows // Le pasamos a la vista el array de objetos de productos activos
	});
}


///////////////////
// Vista consultar
export const vistaConsultar = (req, res) => {
	res.render("get", {
		title: "Consultar producto"
	});
}


///////////////////
// Vista crear
export const vistaCrear = (req, res) => {
    res.render("post", {
        title: "Crear producto",
        about: "Crear nuevo producto"
    })
}


///////////////////
// Vista modificar
export const vistaModificar =  (req, res) => {
    res.render("put", {
        title: "Modificar producto",
    })
}


///////////////////
// Vista eliminar
export const vistaEliminar = (req, res) => {
    res.render("delete", {
        title: "Eliminar producto"
    })
}