//5. Imprimir os primeiros 10 números da sequência de Fibonacci.
console.log("--------------------------------------------------------")

let fib1 = 0
let fib2 = 1

console.log("Os 10 numeros da frequencia de fibonacci são: ")
console.log(fib1)
console.log(fib2)

for (let i = 2; i < 10; i++) {
    let nextFib = fib1 + fib2
    console.log(nextFib)

    fib1 = fib2
    fib2 = nextFib
}