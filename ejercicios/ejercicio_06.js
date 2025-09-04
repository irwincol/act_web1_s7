// 6️⃣ Manipulación de Arrays
// Archivo: src/ejercicio6.js
// Crea un array inicial [1, 2, 3, 4, 5] y demuestra: - push() y pop() 
// - agregar y quitar del final - shift() y unshift() 
// - agregar y quitar del inicio - splice() - 
// insertar elementos en posición específica - slice()
//  - extraer porción sin modificar original

// Array inicial
let arrayNumeros = [1, 2, 3, 4, 5];
console.log("Array inicial:", arrayNumeros);

// push() - agregar al final
arrayNumeros.push(6);
console.log("Después de push(6):", arrayNumeros);

// pop() - quitar del final
let eliminadoFinal = arrayNumeros.pop();
console.log("Después de pop():", arrayNumeros, "numero eliminado:", eliminadoFinal);

// unshift() - agregar al inicio
arrayNumeros.unshift(0);
console.log("Después de agregar al inicio unshift(0):", arrayNumeros);

// shift() - quitar del inicio
let eliminadoInicio = arrayNumeros.shift();
console.log("Después de shift():", arrayNumeros, "Elemento eliminado:", eliminadoInicio);

// splice() - insertar en posición específica (agregar 99 en posición 2)
arrayNumeros.splice(2, 0, 99);
console.log("Después de splice(2, 0, 99):", arrayNumeros);

// splice() - eliminar en posición específica (eliminar el elemento en posición 2)
let eliminadoSplice = arrayNumeros.splice(2, 1);
console.log("Después de splice(2, 1):", arrayNumeros, "Elemento eliminado:", eliminadoSplice);

// slice() - extraer porción sin modificar el original (del índice 1 al 3)
let porcion = arrayNumeros.slice(1, 4);
console.log("Porción extraída con slice(1, 4):", porcion);
console.log("Array final:", arrayNumeros);