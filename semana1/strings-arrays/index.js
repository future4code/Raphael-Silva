/*const nome = "Raphael"
const idade = 30


const fraseTemplateString = `Oi eu sou o ${nome} e tenho ${idade}`

console.log(fraseTemplateString)
*/

//----------------------------------exercício 1
/*
const nome = prompt('Qual é o seu nome?')
const corFavorita = prompt('Qual é sua cor favorita?')

const fraseComAspas = "A cor favorita de " + nome + " é " + corFavorita
console.log(fraseComAspas)

const fraseComTemplateString = `A cor favorita de ${nome} é ${corFavorita}`
console.log(fraseComTemplateString)
*/

//------------------------------------
/*
const string = prompt('Informe uma string')
console.log('A string informada é: ', string)
console.log(`A string informada possui tamanho: ${string.length}`)
*/

//-------------------------------------
/*
const nomeDeUsuario = prompt('Digite seu nome')

console.log('Nome informado', nomeDeUsuario)
console.log('Nome em caixa baixa: ' + nomeDeUsuario.toLowerCase())
console.log(`Nome em caixa alta: ${nomeDeUsuario.toUpperCase()}`)
*/

//-------------------------------------
/*
const nome = " Raphael "
const nomeAparado = nome.trim()

console.log(nome)
console.log(nomeAparado)
*/


/*
const frase = "Hoje comi cenoura"
console.log(frase.includes("cenoura"))  //true
*/


//--------------------------------------Exercício 2
/*
const frase = prompt('Informe sua frase')
//console.log(frase.toUpperCase()) 


console.log(fraseSemE)
*/

//--------------------------------------Exercício 3
/*
const racasDeCachorro = ['Vira-lata', 'Poodle', 'Akita', 'Pitbull', 'Hotweiller']
const numero = prompt('Insira um numero de 1 a 5')

console.log(`A posição escolhida foi ${numero}, que corresponde à raça: ${racasDeCachorro[numero -1]}`)
*/

//----------------------------Exercícios de interpretação

//1

/*  
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log**('f. ', valor)
*/


//2
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

RESPOSTA: Subi num ônibus no Mirrocos

*/


//---------------------------Exercícios de escrita

//1

const nomeDoUsuario = prompt('Qual seu nome?')
const emailDoUsuario = prompt('Qual é seu email?')

const fraseComTemplateString = `O ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo, ${nomeDoUsuario}!`

console.log(fraseComTemplateString)