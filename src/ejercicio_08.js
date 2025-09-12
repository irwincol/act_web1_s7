// 8️⃣ Desestructuración de Arrays
// Archivo: src/ejercicio8.js
// Dado el array ['JavaScript', 'Python', 'Java', 'C++', 'Go']:
// - Extrae los primeros 3 lenguajes - 
// Extrae el primero y el último
//  - Usa rest operator para separar el primero del resto 
//  - Intercambia dos variables usando desestructuración

const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];

// Extraer los primeros 3 lenguajes
const [l1, l2, l3] = lenguajes;
console.log('Primeros 3 lenguajes:', l1, l2, l3)

// Extraer el primero y el último
const [primero, , , , ultimo] = lenguajes;
console.log('Primero:', primero, 'Último:', ultimo);

// Usar rest operator para separar el primero del resto
const [primerLenguaje, ...restoLenguajes] = lenguajes;
console.log('Primer lenguaje:', primerLenguaje);
console.log('Resto de lenguajes:', restoLenguajes);

// Intercambiar dos variables usando desestructuración
let a = 'uno';
let b = 'dos';
console.log('Antes del intercambio:', a, b);
[a, b] = [b, a];
console.log('Después del intercambio:', a, b);