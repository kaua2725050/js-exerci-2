//8. Faça um programa que receba a idade do usuário, enquanto a
//resposta do usuário for menor que 18 anos continue a solicitar a
//idade e mostre uma mensagem quando a idade do usuário for
//maior que 18.
console.log("-------------------------------------")

let idade = prompt("Diga sua idade:")

while (idade <=18) {
    console.log("Não pode entrar")
    idade = prompt("Deve ser maior de 18")
}
    console.log("Você é maior de idade.")