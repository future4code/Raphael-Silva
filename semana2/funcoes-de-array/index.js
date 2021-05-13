// console.log("olá mundo")
//Exercícios da aula

//1)-----------------------------
// const verificarImpar = (numero, funcaoQueImprime) => {
//     if (numero % 2 !==0) {
//         funcaoQueImprime()
//     }
// }
// const mandaMensagem = () => {
//     console.log('É IMPAR!!!')
// }

// verificarImpar(3, mandaMensagem)

// //callback
// verificaImpar(901, ()=> {
//     console.log('É IMPAR!!!!!')
// })

//2)--------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })    

//Exercicios de interpretação de código
//1)
//{nome: "Amanda Rangel", apelido: "Mandi"}
//apelido: "Mandi"
//nome: "Amanda Rangel"
//(3) [{…}, {…}, {…}]
//0: {nome: "Amanda Rangel", apelido: "Mandi"}
// 1: {nome: "Laís Petra", apelido: "Laura"}
// 2: {nome: "Letícia Chijo", apelido: "Chijo"}
// length: 3__
// proto__: Array(0)
 
//2)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//  ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
// 0: "Amanda Rangel"
// 1: "Laís Petra"
// 2: "Letícia Chijo"
// length: 3

//3)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//   (2) [{…}, {…}]
// 0: {nome: "Amanda Rangel", apelido: "Mandi"}
// 1: {nome: "Laís Petra", apelido: "Laura"}
// length: 2
// __proto__: Array(0)


//Exercícios de escrita de código
//1)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


//a)
const listaDeNomes = pets.map( (pet) => {
    console.log(pet.nome)
})



//b 
 const petSalsicha = pets.filter((pets) => {
     return pets.raca === "Salsicha"
 })

 console.log("Salsicha", petSalsicha)

//c


//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)
const arrayNomes = protudos.map((item, index, array) => {
//     return item.nome
})
console.log(arrayNomes)
//b)
const arrayNomes = produtos.map((produto, index, array) => {
    let desconto = produto.preco * 00.5
    produto.preco = produto.preco - desconto

    return {
        nome: produto.nome
        preco: produto.preco.toFixed(2)
    };
})
console.log(arrayNomePreceDesconto)