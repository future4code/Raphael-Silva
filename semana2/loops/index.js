//------------exercícios de interpretação de código
//1)
//for substitui while se a condição de continuação for numero, isso simplifica as coisas. i vale 0 e a
//cada testagem se adiciona +1. Quando chega em 10, termina a testagem. 

//2)
//a)
//Será impresso todos os números da lista que forem maior que 18

//b)

//3) resultado seria:
// *
// ** 
// ***
// ****

//--------------exercício de escrita de código
//1)
let array = []
const bichinhosDeEstimação = Number(prompt('Quantos pets você tem?'))
if (bichinhosDeEstimação === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else if (bichinhosDeEstimação > 0) {
    for (i = 0; bichinhosDeEstimação > i; i++) {
        let nomeBichinhos = prompt('Qual o nome do seu bichinho?')
        array.push(nomeBichinhos)
    }
}
console.log(array)
