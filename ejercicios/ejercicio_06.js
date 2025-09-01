// 6️⃣ Manipulación de Arrays
// Archivo: src/ejercicio6.js
// Crea un array inicial [1, 2, 3, 4, 5] y demuestra: - push() y pop() 
// - agregar y quitar del final - shift() y unshift() 
// - agregar y quitar del inicio - splice() - 
// insertar elementos en posición específica - slice()
//  - extraer porción sin modificar original

// Array inicial
let arr = [1, 2, 3, 4, 5];
console.log("Array inicial:", arr);

// push() - agregar al final
arr.push(6);
console.log("Después de push(6):", arr);

// pop() - quitar del final
let eliminadoFinal = arr.pop();
console.log("Después de pop():", arr, "Elemento eliminado:", eliminadoFinal);

// unshift() - agregar al inicio
arr.unshift(0);
console.log("Después de unshift(0):", arr);

// shift() - quitar del inicio
let eliminadoInicio = arr.shift();
console.log("Después de shift():", arr, "Elemento eliminado:", eliminadoInicio);

// splice() - insertar en posición específica (agregar 99 en posición 2)
arr.splice(2, 0, 99);
console.log("Después de splice(2, 0, 99):", arr);

// splice() - eliminar en posición específica (eliminar el elemento en posición 2)
let eliminadoSplice = arr.splice(2, 1);
console.log("Después de splice(2, 1):", arr, "Elemento eliminado:", eliminadoSplice);

// slice() - extraer porción sin modificar el original (del índice 1 al 3)
let porcion = arr.slice(1, 4);
console.log("Porción extraída con slice(1, 4):", porcion);
console.log("Array final:", arr);