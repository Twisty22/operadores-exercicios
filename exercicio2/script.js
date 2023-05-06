const primeiroNumero = Number(prompt("Digite um numero"))
const segundoNumero = Number(prompt("Digite outro numero"))

const comparacao1 = primeiroNumero > segundoNumero
const comparacao2 = segundoNumero === primeiroNumero
const comparacao3 = (primeiroNumero % segundoNumero) === 0
const comparacao4 = (segundoNumero % primeiroNumero) === 0

console.log("O primeiro numero é maior que o segundo", comparacao1)
console.log("O primeiro numero é igual ao segundo?", comparacao2)
console.log("O primeiro numero é divisível pelo segundo?", comparacao3)
console.log("O segundo numero é divisível pelo primeiro?", comparacao4)