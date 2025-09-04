// 7️⃣ Ordenamiento y Reversión
// Archivo: src/ejercicio7.js
// Crea arrays de: - Números desordenados 
// - ordena ascendente y descendente 
// - Nombres de personas - 
// ordena alfabéticamente 
// - Objetos con propiedad edad 
// - ordena por edad - Usa reverse() para invertir el orden



// ORDEN ASCENDETE NUMEROS

const arrayNumerosDesordenados = [ 3, 4,7,9,0,1,8 ];
console.log(`Array desordenado ${arrayNumerosDesordenados}`);

arrayNumerosDesordenados.sort((a,b)=> a -b);
console.log(`Array en orden ascendente ${arrayNumerosDesordenados}`);

// ORDEN DESCENDENTE NUMEROS

arrayNumerosDesordenados.reverse();
console.log(`Array en orden descendente ${arrayNumerosDesordenados}`);

// ARRAY DE NOMBRES
console.log("Ordenar array de nombres");

const nombres = [ "irwin", "albany", "said" , "samira"];

console.log(nombres);

nombres.sort();
console.log("Array en orden alfabetico:" , nombres);

// ARRAY DE OBJETOS CON PROPIEDAD EDAD
console.log("Ordenar array de objetos por edad");
const personas = [
	{ nombre: "Irwin", edad: 33 },
	{ nombre: "Albany", edad: 25 },
	{ nombre: "Said", edad: 40 },
	{ nombre: "Samira", edad: 29 }
];

console.log("Array original:", personas);

// Ordenar por edad ascendente
personas.sort((a, b) => a.edad - b.edad);
console.log("Personas ordenadas por edad ascendente:", personas);

// Ordenar por edad descendente usando reverse
personas.reverse();
console.log("Personas ordenadas por edad descendente:", personas);










// const numeros = [3, 1, 4, 1, 5, 9, 2, 6];
// const palabras = ['banana', 'apple', 'cherry', 'date'];

// // sort() - Ordena elementos (modifica el arreglo original)
// numeros.sort((a, b) => a - b); // Orden ascendente
// console.log(numeros); // [1, 1, 2, 3, 4, 5, 6, 9]

// palabras.sort(); // Orden alfabético
// console.log(palabras); // ['apple', 'banana', 'cherry', 'date']

// // reverse() - Invierte el orden
// numeros.reverse();
// console.log(numeros); // [9, 6, 5, 4, 3, 2, 1, 1]