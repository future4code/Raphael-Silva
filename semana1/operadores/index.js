/*console.log('Olá!')

const primeiroValor = 10
const segundoValor = 20
const terceiroValor = 40
const quartoValor = 80

let resultado;

resultado = primeiroValor + segundoValor
console.log('Soma', resultado)

resultado = terceiroValor - quartoValor
console.log('subtração', resultado)

resultado = segundoValor * primeiroValor
console.log('Multiplicação', resultado)

resultado = quartoValor / terceiroValor
console.log('Divisão', resultado)

resultado = 17 % 6
console.log('Resto', resultado)


let saldo = 100
const deposito = 200

saldo = saldo + deposito

console.log('Saldo', saldo)

------------------------------------exercício 1

//1
const soma = 3 + 4
console.log('Soma', soma)
//2
const resultado = 3 * 5 / 2
console.log('Resultado', resultado)
//3
const resultado2 = (4 - 5) * -1
console.log('Resultado 2', resultado2)
//4 
const resto = 234 % 5
console.log('Resto', resto)

*/

// COMPARADORES

/*const saoIguais = 'amanda' === 'amanda'
console.log('São iguais?', saoIguais)

const saoDiferentes = '2' !== 2
console.log('São diferentes', saoDiferentes)

console.log('O primeiro numero é maior?', 5 > 4)
console.log('O primeiro numero é maior?', 5 > 5)
console.log('O primeiro numero é maior?', 5 >= 5)

console.log('O primeiro numero é menor?', 4 < 3)
console.log('O primeiro numero é menor?', 4 > 4)
console.log('O primeiro numero é menor?', 4 <= 4)
*/
//-------------------------------------------------exercício 2

/*
const primeiroNumero = 30
const segundoNumero = 50

console.log('O primeiro numero é igual ao segundo numero?', primeiroNumero === segundoNumero)

console.log('O primeiro numero é diferente do segundo numero?',  primeiroNumero !== segundoNumero)

console.log('O primeiro numero é maior que o segundo numero?',  primeiroNumero > segundoNumero)

console.log('O primeiro numero é menor que o segundo numero?',  primeiroNumero < segundoNumero)
*/


// OPERADORES LÓGICOS

/*
const fazSol = true
const estaCalor = false
const temPraia = false

let vouParaPraia = fazSol && estaCalor && temPraia //se e somente se ambas afirmações forem verdadeiras

console.log('Vou para a praia?', vouParaPraia)
*/

//---------------------------------------------exercício 3

/*
const a = true
const b = false
const c = true

console.log('1', a && b)        // false
console.log('2', b && c)        // false
console.log('3', a && c)        // true
console.log('4', a && b && c)   // false
*/

/*
const estouComFome = false
const estouEmCasa = false
const estouTriste = false

let comerChocolate = estouComFome || estouEmCasa || estouTriste // o resultado só será falso se e somente se todos os valores forem falsos

console.log('Vou comer chocolate?', comerChocolate)
*/


//---------------------------------------------exercício 4

/*
const a = true 
const b = false
const c = true

console.log('1', a || b) //true
console.log('2', b || c)  //true
console.log('3', a || c)  //true
console.log('4', a || b || c)  //true
*/

//------------------------------------------Exercício 5

/*
const nome = prompt('insira o seu nome')
const anoNascimento = prompt('insira o ano de seu nascimento')
const anoAtual = prompt('insira o ano em que estamos')

console.log('Olá', nome)


const idade = Number(anoAtual) - Number(anoNascimento)
console.log('idade', idade)


const idadeFuturo = 2050 - anoNascimento
console.log('Em 2050 terei:', idadeFuturo)

*/


// Aula 04 Operadores e Lógica da Programação - Exercícios de escrita

//1

const suaIdade = prompt('Qual sua idade?') //30
const idadeDoMelhorAmigo = prompt ('Qual a idade de seu melhor amigo?') //31

console.log('Sua idade é: ', suaIdade)
console.log('A idade de seu melhor amigo é: ', idadeDoMelhorAmigo)
console.log('Sua idade é maior do que a do seu melhor amigo?', suaIdade > idadeDoMelhorAmigo) 


resultado = suaIdade - idadeDoMelhorAmigo
console.log('subtração', resultado)

//2
