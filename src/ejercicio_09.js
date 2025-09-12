// 9️⃣ Desestructuración de Objetos
// Archivo: src/ejercicio9.js
// Crea un objeto persona con propiedades anidadas (dirección, contacto).

// Demuestra: - Desestructuración básica - 
// Renombrado de variables 
// - Valores por defecto
//  - Desestructuración anidada 
// - Rest operator en objetos

// Crear objeto persona con propiedades anidadas
const persona = {
    nombre: "Irwin",
    apellido: "Colmenarez",
    edad: 33,
    direccion: {
        calle: "Av. Principal",
        ciudad: "Barquisimeto",
        estado: "Lara",
        codigoPostal: "3001"
    },
    contacto: {
        email: "irwin@ejemplo.com",
        telefono: "555-1234",
        redesSociales: {
            twitter: "@irwin",
            instagram: "@irwin.col"
        }
    },
    habilidades: ["JavaScript", "HTML", "CSS", "React"]
};

// 1. Desestructuración básica
const { nombre, apellido, edad } = persona;
console.log("Desestructuración básica:");
console.log(nombre, apellido, edad);

// 2. Renombrado de variables
const { nombre: firstName, apellido: lastName } = persona;
console.log("\nRenombrado de variables:");
console.log(firstName, lastName);

// 3. Valores por defecto
const { profesion = "Desarrollador", experiencia = 5 } = persona;
console.log("\nValores por defecto:");
console.log(profesion, experiencia); // Desarrollador 5 (valores por defecto)

// 4. Desestructuración anidada
const { 
    direccion: { ciudad, estado },
    contacto: { 
        email, 
        redesSociales: { twitter, instagram } 
    } 
} = persona;

console.log("\nDesestructuración anidada:");
console.log(ciudad, estado); // Barquisimeto Lara
console.log(email, twitter, instagram); // irwin@ejemplo.com @irwin @irwin.col

// 5. Rest operator en objetos
const { nombre: n, edad: e, ...restoInfo } = persona;
console.log("\nRest operator en objetos:");
console.log(n, e); // Irwin 33
console.log(restoInfo); // Contiene todo lo demás (apellido, dirección, contacto, habilidades)