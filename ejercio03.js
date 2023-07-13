// Dado un array de nombres, tu objetivo es crear una función que cuente cuántas veces
// se repite cada nombre y los represente con asteriscos (*).
// Debes implementar la función countNameRepetitions(names), que tomará como
// parámetro un array de nombres y devolverá un objeto con los nombres y su
// representación de asteriscos correspondiente:

// Resultado esperado
// Juan: '**',
// María: '***',
// Pedro: '*'

const countNameRepetitions = (names) => {
    let contadorNombres = {};

    for (let i = 0; i < names.length; i++) {
        let nombre = names[i];

        if (contadorNombres[nombre]) {
            contadorNombres[nombre]++;
        } else {
            contadorNombres[nombre] = 1;
        }
    }

    let resultado = {};
    for (let nombre in contadorNombres) {
        const contador = contadorNombres[nombre];
        // console.log(contadorNombres[nombre]);
        resultado[nombre] = "*".repeat(contador);
        // console.log(resultado[nombre]);
        // console.log(nombre)
        console.log(`${nombre} : ${resultado[nombre]}`);
    }
    return resultado;
};

const names = ["santi", "juliana", "alejo", "daniel", "juliana", "alice"];

countNameRepetitions(names);