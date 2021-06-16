// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = prompt('Insira a altura do retângulo: ')
   const largura = prompt('Insira a largura do retângulo: ')

   console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoAtual = prompt('Em que ano estamos?')
   const anoDeNascimento = prompt('Qual seu ano de nascimento?')

   console.log(anoAtual - anoDeNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   prompt('Qual seu peso?')
   prompt("Qua sua altura?")

   return peso / (altura * altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt('Digite seu nome')
   const idade = prompt('Digite sua idade')
   const email = prompt('Digite seu email')

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
 const coresFavoritas = []
 const cor1 = prompt('Insira sua primeira cor favorita')
 const cor2 = prompt('Insira sua segunda cor favorita')
 const cor3 = prompt('Insira sua terceira cor favorita')
 
 coresFavoritas.push(cor1)
 coresFavoritas.push(cor2)
 coresFavoritas.push(cor3)


 return console.log(coresFavoritas)
}  

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   const text = string
   return text.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   
}



// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu()   {
   // implemente sua lógica aqui
}