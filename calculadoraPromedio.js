// Empiezo calculadoraPromedio.js

// Función para validar que las notas estén en el rango correcto
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
}

// Función para calcular el promedio
function calcularPromedio(notas) {
    let suma = notas.reduce((acumulado, notaActual) => acumulado + notaActual, 0);
    return suma / notas.length;
}

// Información del Usuario
function main() {
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");
    let materia = prompt("Ingrese la materia:");

    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i} (entre 0 y 10):`));
        if (!validarNota(nota)) {
            alert("Nota inválida. Debe estar entre 0 y 10.");
            return; // Termina el programa si la nota no es válida
        }
        notas.push(nota);
    }

    let promedio = calcularPromedio(notas);
    if (promedio >= 7) {
        alert(`${nombreAlumno}, ¡felicidades! Has aprobado ${materia} con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        alert(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase de ${materia}. El promedio obtenido es ${promedio.toFixed(2)}.`);
    }
}

// Ejecutar el programa
main();