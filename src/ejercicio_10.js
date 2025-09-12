// 🔟 Métodos de Objeto
// Archivo: src/ejercicio10.js
// Crea un objeto y demuestra: - 
// Object.keys() 
// - obtener claves 
// - Object.values() - obtener valores
//  - Object.entries() - obtener pares clave-valor 
//  - Iterar sobre el objeto con forEach()

const realMadrid = {
    ligas: 34,
    champions: 15,
    apodo: "merengues",
    presidente: "florentino Perez",
    estadio: "santiago bernabeu"
}

const claves = Object.keys (realMadrid);
console.log(claves);

const valores = Object.values (realMadrid);
console.log(valores);

const valorClave = Object.entries(realMadrid);
console.log(valorClave);

Object.entries (realMadrid).forEach(([claves, valor]) => {
    console.log(`${claves}: ${valor}`);
    
}
);
