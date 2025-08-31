// 3️⃣ Transformación de Datos con map()
// Archivo: src/ejercicio3.js
// Crea un array de estudiantes con nombre, edad, notas (array de números).
// Usa map() para: - Crear un nuevo array con solo los nombres 
// - Crear un array con el promedio de cada estudiante 
//  - Agregar una propiedad estado 
// ("Aprobado" si promedio >= 70, "Reprobado" si < 70)


const estudiantes = [
    {nombre: "irwin", edad:33 , notas:[70, 100, 50] },
    {nombre: "Said", edad:33 , notas: [75, 60, 60] },
    {nombre: "Albany", edad:33 , notas:[75,75,70] },
];

console.log("*****Lista de nombres de estudiantes***");

const nombreEstudiantes = estudiantes.map(nombre => nombre.nombre)
console.log(nombreEstudiantes);

// PROMEDIO ESTUDIANTES

console.log("*********Promedio Estudiante******");



const promedioEstudiantes = estudiantes.map( estudiante => {
    const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0)
    const promedio = sumaNotas / estudiante.notas.length;
    return {
        nombre: estudiante.nombre , 
        promedio: (promedio.toFixed(2))
    } 
});
console.log(promedioEstudiantes);

// // Propiedad Estado

console.log("Estado de Estudiantes");


const estudiantesConEstado = estudiantes.map(estudiante => {
    const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    const estado = promedio >= 70 ? "Aprobado" : "Reprobado";
    return {
        ...estudiante,
        promedio:(promedio.toFixed(2)),
        estado: estado
    };
});
console.log(estudiantesConEstado);



