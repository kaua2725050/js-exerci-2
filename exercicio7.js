//7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
//while.
console.log("-------------------------------------")

let numero = 1
let soma = 0

while (numero <=100) {
    console.log(numero)
    soma += numero
    numero ++;
}

console.log("essa é a soma dos números de 1 a 100: " + soma)