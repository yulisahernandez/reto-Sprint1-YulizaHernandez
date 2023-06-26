// Escribe una función que acepte un array con 10 números enteros positivos
// (entre 0 y 9) y devuelva una cadena de texto con esos números en forma de
// número de teléfono

// Crear un número de teléfono
// createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-7890"

const createPhoneNumber = (numeros) => {
    if (numeros.length !== 10) {
        return console.log("Deden de ser 10 numeros exactos");
    }

    const unirNumeros = numeros.join("");
    const primeraParte = unirNumeros.slice(0, 3);
    const segundaParte = unirNumeros.slice(3, 6);
    const terceraParte = unirNumeros.slice(6, 10);

    console.log(`(${primeraParte}) ${segundaParte} - ${terceraParte}`);
};
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// const createPhoneNumber1 = (numeros) => {
//     if (numeros.length !== 10) {
//         return console.log("Deden de ser 10 numeros exactos");
//     } else {
//         const unirNumeros = numeros.join("");
//         const primeraParte = unirNumeros.slice(0, 3);
//         const segundaParte = unirNumeros.slice(3, 6);
//         const terceraParte = unirNumeros.slice(6, 10);

//         return `(${primeraParte}) ${segundaParte} - ${terceraParte}`;
//     }
// };

// const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const telfono1 = createPhoneNumber1(numeros1);
// console.log(telfono1);