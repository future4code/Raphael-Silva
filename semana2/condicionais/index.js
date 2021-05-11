/* 
---------------------------exercício 1

const comparaNumeros =() => {

    const primeiroNumero = Number(prompt("Digite um numero!"))
    const segundoNumero = Number(prompt("Digite outro numero!"))
    
    if(primeiroNumero === segundoNumero) {
        console.log("É igual!")
    }
}

comparaNumeros()


----------------------------exercício 2




















----------------------------Exercícios de interpretação de código

1)
a)O código testa se o número inserido dividido por dois é igual a zero; Passa no teste se for, reprova se não for igual a zero 

b)número igual a zero

c)números diferentes de zero

2)
a)serve para automatizar checagem de preço em um supermercado

b)O preço da fruta, maçã, é, 2.25, preco

c)contaria todo o resto abaixo

3)
a)
Está dando o prompt onde a pessoa deverá escrever um número

b)Esse número passou no teste. Se fosse -10 não passaria pois precisa ser maior que 0

c)Falta dizr o quer acontece se não passar, qual mensagem mostraria

*/
//---------------------------------Exercícios de escrita de código

//1)
const idadePraDirigir = Number(prompt("Qual sua idade?"))

if (idadePraDirigir >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


//2
const turnoDeAula = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)?")

if (turnoDeAula === "M") {
    console.log("Bom Dia!")
} else if (turnoDeAula === "V") {
    console.log("Boa Tarde!")
} else if (turnoDeAula === "N") {
    console.log("Boa Noite!")
} 

//3
let turnoDeAulacomSwitch
switch (turnoDeAulacomSwitch) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break    
}

//4
