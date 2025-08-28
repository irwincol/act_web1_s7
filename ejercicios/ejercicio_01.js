// 1️⃣ Gestión de Inventario Básico

// Crea un array de objetos que represente un inventario de productos. 
// Cada producto debe tener: id, nombre, precio, categoria, stock.
// Declara al menos 5 productos y muestra: - Todos los productos - 
// Total de productos en inventario - Valor total del inventario
// Solución:
// const inventario = [
//     { id: 1, nombre: "Laptop", precio: 12000, categoria: "Electrónica", stock: 5 },
//     { id: 2, nombre: "Mouse", precio: 250, categoria: "Accesorios", stock: 20 },
//     { id: 3, nombre: "Teclado", precio: 600, categoria: "Accesorios", stock: 15 },
//     { id: 4, nombre: "Monitor", precio: 3500, categoria: "Electrónica", stock: 7 },
//     { id: 5, nombre: "Silla", precio: 1800, categoria: "Muebles", stock: 10 }
// ];

// // Mostrar todos los productos
// console.log("Inventario de productos:");
// inventario.forEach(producto => {
//     console.log(producto);
// });

// // Total de productos en inventario (sumar stock)
// const totalProductos = inventario.reduce((acum, prod) => acum + prod.stock, 0);
// console.log("Total de productos en inventario:", totalProductos);

// // Valor total del inventario (precio * stock de cada producto)
// const valorTotal = inventario.reduce((acum, prod) => acum + (prod.precio * prod.stock), 0);
// console.log("Valor total del inventario:", valorTotal);

// *************************************************************************************************************

// src/ejercicio1.js

// 1️⃣ Crear el inventario como un array de objetos
const inventario = [
  { id: 1, nombre: "Laptop", precio: 2500, categoria: "Electrónica", stock: 5 },
  { id: 2, nombre: "Teléfono", precio: 1200, categoria: "Electrónica", stock: 10 },
  { id: 3, nombre: "Silla Gamer", precio: 800, categoria: "Muebles", stock: 3 },
  { id: 4, nombre: "Auriculares", precio: 300, categoria: "Accesorios", stock: 15 },
  { id: 5, nombre: "Mochila", precio: 150, categoria: "Accesorios", stock: 8 }
];

// 2️⃣ Mostrar todos los productos
console.log("=== Inventario de Productos ===");
inventario.forEach(producto => {
  console.log(
    `ID: ${producto.id} | ${producto.nombre} | $${producto.precio} | ${producto.categoria} | Stock: ${producto.stock}`
  );
});

// 3️⃣ Calcular total de productos en inventario (suma de stock)
const totalProductos = inventario.reduce((acum, producto) => acum + producto.stock, 0);
console.log("\nTotal de productos en inventario:", totalProductos);

// 4️⃣ Calcular valor total del inventario (precio * stock de cada producto)
const valorTotal = inventario.reduce((acum, producto) => acum + (producto.precio * producto.stock), 0);
console.log("Valor total del inventario: $", valorTotal);



