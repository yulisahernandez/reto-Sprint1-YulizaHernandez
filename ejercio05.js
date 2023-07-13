// Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). La
// X debe tener un tamaño variable según el número ingresado.
// Debes implementar una función llamada drawX(tamano), donde el parámetro
// tamano es un número entero y dibuje la X correspondiente.

const drawX1 = (numero) => {
    if (numero % 4 === 0) {
        numero++;
    }
    for (let index = 0; index < numero; index++) {
        let linea = "";

        for (let asterist = 0; asterist <= numero; asterist++) {
            if (asterist === index || asterist === numero - 1 - index) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
};

drawX1(13);