//9. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.
console.log("-------------------------------------")

let cont = prompt("Digite um número para ir até 0")

while (cont >= 0) {
    console.log(cont)
    cont -= 1
}