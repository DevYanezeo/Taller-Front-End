Array

const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];


/**
 * Metodo para filtrar los productos que tienen un descuento mayor a 0.
 * Filtra el array de productos y devuelve los productos cuyo descuento es mayor que 0.
 * 
 * @returns {Array} - Un array de productos con descuento.
 */
const productsWithDiscount = products.filter(product => product.discount > 0);

/**
 * Metodo para calcular el precio final de los productos que tienen un descuento aplicado.
 * Calcula el precio con el descuento aplicado y crea un nuevo objeto con el precio después del descuento.
 * 
 * @returns {Array} - Un array de productos con la propiedad `priceAfterDiscount` añadida.
 */
const productsWithFinalPrice = productsWithDiscount.map(product => {
  const priceAfterDiscount = product.price * (1 - product.discount / 100);
  return { ...product, priceAfterDiscount };
});

/**
 * Metodo para identificar los productos con un stock bajo.
 * Filtra el array de productos y devuelve aquellos cuyo stock es menor a 5 unidades.
 * 
 * @returns {Array} - Un array de productos con stock bajo.
 */
const productsWithLowStock = products.filter(product => product.stock < 5);

/**
 * Metodo para actualizar el stock de un producto.
 * Busca un producto por su nombre y, si lo encuentra, incrementa su cantidad en inventario.
 * Si no se encuentra el producto, lanza un error.
 * 
 * @param {String} nombreProducto - El nombre del producto cuyo stock se quiere actualizar.
 * @param {Number} cantidad - La cantidad que se va a añadir al stock del producto.
 */
function actualizarStock(nombreProducto, cantidad) {
  try {
    const producto = products.find(product => product.name === nombreProducto);
    if (!producto) {
      throw new Error("Producto no encontrado.");
    }
    producto.stock += cantidad;
    console.log(`\nStock actualizado para ${nombreProducto}. Nuevo stock: ${producto.stock}`);
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Metodo para obtener un resumen de la cantidad de productos por categoría.
 * Recorre todos los productos y cuenta cuántos hay en cada categoría, 
 * devolviendo un objeto con la cantidad de productos por cada categoría.
 * 
 * @returns {Object} - Un objeto que contiene la cantidad de productos por categoría.
 */
function resumenPorCategorias() {
  const resumen = {};
  for (let producto of products) {
    if (resumen[producto.category]) {
      resumen[producto.category] += 1;
    } else {
      resumen[producto.category] = 1;
    }
  }
  return resumen;
}

// Mostrar resultados
console.log("### Productos con Descuento ###");
console.table(productsWithDiscount); 

console.log("\n### Productos con Precio Final ###");
console.table(productsWithFinalPrice); 

console.log("\n### Productos con Stock Bajo ###");
console.table(productsWithLowStock);

actualizarStock("Televisor", 5); 
actualizarStock("Cámara", 10);    

//  resumen por categorías
console.log("\n### Resumen por Categorías ###");
const resumen = resumenPorCategorias();
console.table(resumen); 