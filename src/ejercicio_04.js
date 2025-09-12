// 4️⃣ Análisis de Ventas con reduce()
// Archivo: src/ejercicio4.js
// Dado un array de ventas con producto, cantidad, precio, fecha:
// Usa reduce() para calcular: - Total de ingresos 
// - Producto más vendido (por cantidad) 
// - Promedio de venta por transacción

const ventas = [ 
    { producto: "laptod", cantidad: 10, precio: 10000, fecha: "2025-07-20"},
    { producto: "audifonos", cantidad: 20, precio: 600, fecha: "2025-08-10"},
    { producto: "cargadores", cantidad: 33, precio: 1000, fecha: "2025-08-13"},
    { producto: "pantallas", cantidad: 3, precio: 100000, fecha: "2025-03-08"}
]

// TOTAL INGRESOS

console.log("**********Total ingresos***********");
 
const totalIngresos = ventas.reduce((acum, ingresos)=> acum + ingresos.precio * ingresos.cantidad,0)
console.log(totalIngresos);

// PRODUCTO MAS VENDIDO

console.log("Producto más vendido");

const productoMasVendido = ventas.reduce((max, venta) => {
  return venta.cantidad > max.cantidad ? venta : max;
});

console.log(` ${productoMasVendido.producto}, Cantidad: ${productoMasVendido.cantidad}`);

// Promedio de venta por Transaccion

console.log("*****Promedio de Venta por Transaccion ****");

const promedioPorTransaccion = totalIngresos/ventas.length
console.log(promedioPorTransaccion);





