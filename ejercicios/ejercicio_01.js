// 1️⃣ Gestión de Inventario Básico

// Crea un array de objetos que represente un inventario de productos. 
// Cada producto debe tener: id, nombre, precio, categoria, stock.
// Declara al menos 5 productos y muestra: - Todos los productos - 
// Total de productos en inventario - Valor total del inventario
// Solución:

// Crear el inventario como un array de objetos
const inventario = [
  { id: 1, nombre: "Laptop", precio: 2500, categoria: "Electrónica", stock: 5 },
  { id: 2, nombre: "Teléfono", precio: 1200, categoria: "Electrónica", stock: 10 },
  { id: 3, nombre: "Silla Gamer", precio: 800, categoria: "Muebles", stock: 3 },
  { id: 4, nombre: "Auriculares", precio: 300, categoria: "Accesorios", stock: 15 },
  { id: 5, nombre: "Mochila", precio: 150, categoria: "Accesorios", stock: 8 }
];

//  Mostrar todos los productos
console.log("=== Inventario de Productos ===");
inventario.forEach(producto => {
  console.log(
    `ID: ${producto.id} | ${producto.nombre} | $${producto.precio} | ${producto.categoria} | Stock: ${producto.stock}`
  );
});

// Calcular total de productos en inventario (suma de stock)
const totalProductos = inventario.reduce((acum, producto) => acum + producto.stock, 0);
console.log("\nTotal de productos en inventario:", totalProductos);

// Calcular valor total del inventario (precio * stock de cada producto)
const valorTotal = inventario.reduce((acum, producto) => acum + (producto.precio * producto.stock), 0);
console.log("Valor total del inventario: $", valorTotal);



