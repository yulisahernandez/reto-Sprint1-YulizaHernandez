// tipos datos primitivos  : numeber= 12121221 , string= "12121221", undefined, null ,NaN
// tipos datos obje:  {objeto}, [array]

const next_palindromo = (numero) => {
    //toString pasa un tipo number a un tipo string
    const numString = numero.toString();
    //el split divide cada digito (el cual ya se encuentra convertido en un sting) jemplo 6 8 9
    //el reverse da vuelta al numero como su nombre lo indica lo revierte
    //el join vuelve y junta los digitos
    const resultado = numString.split("").reverse().join("");
    //finalmente si el numero se lee igual de reversa entonces imprime el numero
    if (numString === resultado) {
        return numero;
    } else {
        let siguiente = numero + 1;
        return next_palindromo(siguiente);
        //de lo contrario que retorne un ciclo que siga aumentando hasta que se encuentre de nuevo un palindromo y lo imprima
    }
};
// 1 2 3     3 2 1  321
console.log(next_palindromo(31));