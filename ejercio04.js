/* Tu tarea es escribir un programa que recorra los números del 1 al n. Para cada número:

Si el número es divisible por 3, debes imprimir "Fizz".
Si el número es divisible por 5, debes imprimir "Buzz".
Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual

Para lograrlo debes implementar una función llamada fizzBuzz(n), que tome como
parámetro un número entero n y ejecute el juego FizzBuzz. */

const fizzBuzz = (numero) => {
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            //Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
            console.log(i + " fizzbuzz");
        } else if (i % 3 === 0) {
            //Si el número es divisible por 3, debes imprimir "Fizz".
            console.log(i + " fizz");
        } else if (i % 5 === 0) {
            //Si el número es divisible por 5, debes imprimir "Buzz".
            console.log(i + " buzz");
        } else {
            //Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual
            console.log(i);
        }
    }
};

fizzBuzz(20);