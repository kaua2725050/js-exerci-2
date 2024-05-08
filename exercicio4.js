//4. Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.
console.log("-------------------------------------")

let namber = parseInt(prompt("Digite um número para tabuar: "))

for (let i = 1; i <=10; i ++) {
    console.log(namber + " X " + i + " = " + (namber*i))
}