// 2️⃣ Filtrado de Productos por Categoría
// Archivo: src/ejercicio2.js
// Usando el inventario del ejercicio anterior,
//  utiliza el método filter() para: - 
//  Mostrar solo productos de la categoría "Electrónicos" 
//  -
//   Mostrar productos con stock menor a 10 -
//  Mostrar productos con precio mayor a $500

const inventario = [
  { id: 1, nombre: "Laptop", precio: 2500, categoria: "Electrónica", stock: 5 },
  { id: 2, nombre: "Teléfono", precio: 1200, categoria: "Electrónica", stock: 10 },
  { id: 3, nombre: "Silla Gamer", precio: 800, categoria: "Muebles", stock: 3 },
  { id: 4, nombre: "Auriculares", precio: 300, categoria: "Accesorios", stock: 15 },
  { id: 5, nombre: "Mochila", precio: 150, categoria: "Accesorios", stock: 8 }
];

console.log("***** Productos electronicos*****");
const productosElectronicos = inventario.filter(prod => prod.categoria === "Electrónica" )

console.log(productosElectronicos);

// Productos electronicos menor a 10

console.log("Productos en Stock menor a 10");

let menorADiez = inventario.filter(prod => prod.stock < 10)
console.log(menorADiez);

// productos con precio mayor a 500

console.log("Productos con precio mayor a 500$");

let mayorAQuinientos = inventario.filter(prod => prod.precio > 500);
console.log(mayorAQuinientos);



