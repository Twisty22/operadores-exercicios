//parte 1
const operacao1 = 5 > 20 && 5 < 2 // false
const operacao2 = 5 === 5 || 5 === "5" //true
const operacao3 = 20 >! 50 // true 
const operacao4 = 20 >! 50 || 50 >! 60 // true
// parte 2
let salario = 2000
const numeroFilhos = 2
const porcentagemComissao = 0.1
const porcentagemInss = 0.05
salario = salario + (numeroFilhos * 45.50)
console.log(salario)

const janeiro = 5784.50
let comissaoJaneiro = janeiro * porcentagemComissao
let inssJaneiro = (salario + comissaoJaneiro) * porcentagemInss
let salarioJaneiro = (salario + comissaoJaneiro - inssJaneiro) 
console.log(salarioJaneiro)

const fevereiro = 3418.41
let comissaoFevereiro = fevereiro * porcentagemComissao
let inssFevereiro = (salario + comissaoFevereiro) * porcentagemInss
let salarioFevereiro = (salario + comissaoFevereiro - inssFevereiro) 
console.log(salarioFevereiro)

const marco = 4121.10
let comissaoMarco = marco * porcentagemComissao
let inssMarco = (salario + comissaoMarco) * porcentagemInss
let salarioMarco = (salario + comissaoMarco - inssMarco) 
console.log(salarioMarco)

const abril = 1874
let comissaoAbril = abril * porcentagemComissao
let inssAbril = (salario + comissaoAbril) * porcentagemInss
let salarioAbril = (salario + comissaoAbril - inssAbril) 
console.log(salarioAbril)

const maio = 7000
let comissaoMaio = maio * porcentagemComissao
let inssMaio = (salario + comissaoMaio) * porcentagemInss
let salarioMaio = (salario + comissaoMaio - inssMaio) 
console.log(salarioMaio)

const junho = 9450
let comissaoJunho = junho * porcentagemComissao
let inssJunho = (salario + comissaoJunho) * porcentagemInss
let salarioJunho = (salario + comissaoJunho - inssJunho) 
console.log(salarioJunho)

let media = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho)/6
console.log(media)