// 5️⃣ Búsqueda y Verificación
// Archivo: src/ejercicio5.js
// Crea un array de usuarios con id, nombre, email, activo.
// Implementa búsquedas usando: - find() para buscar usuario por email 
// - findIndex() para obtener posición de usuario por id
//  - some() para verificar si hay usuarios inactivos 
// - every() para verificar si todos tienen email válido (contiene @)

const usuarios = [
    { id: 1, nombre: "irwin", email:"irwincolmenarez@gmail.com", estado: "activo"},
    { id: 2, nombre: "said", email:"saidcolmenarez@gmail.com" , estado:"inactivo"},
    { id: 3, nombre: "samira", email:"samiracolmenarezgmail.com", estado: "activo"},
    { id: 4, nombre: "albany", email:"albanycolmenarez@gmail.com", estado:"inactivo"},

]

// buscar usuario samira por correo

 console.log("Busqueda al usuario samira  usando su correo ");
 
const usuarioEmail = usuarios.find(function busqueda(usuario) {
    return usuario.email === "samiracolmenarez@gmail.com";
});

console.log(usuarioEmail);


// busqueda de posicion en el array del  usuarios por id

console.log("Busqueda de posicion del usuario en el array");


const busquedaId = usuarios.findIndex(function buscar (usuario){
    return usuario.id === 4;
});
console.log(busquedaId); 


// Verificar estado

console.log("Determinar si hay usuarios inactivos");


const estado = usuarios.some(usuario => usuario.estado === "inactivo")
console.log("¿Hay usuarios inactivos?", estado);


// Verificar si todos los usuarios tienen email válido
const todosEmailValidos = usuarios.every(usuario => usuario.email.includes("@"));
console.log("¿Todos los usuarios tienen email válido?", todosEmailValidos);



