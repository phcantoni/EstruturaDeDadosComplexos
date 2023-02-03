let itens = ["carne", "carvão", "cerveja", "gelo", "samba"]
console.log (itens)

// -------------------------

itens.unshift ("pão de alho")
console.log (itens)

// -------------------------

itens.pop ()
console.log (itens)

// -------------------------

itens.push ("linguiça", "queijo coalho")
console.log (itens)

// -------------------------

itens.shift ()
console.log (itens)

// -------------------------

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort ()
console.log (numbers)

// -------------------------

let aboutMe = {
    name: "Paulo",
    age: 27,
    team: ["Fluzão", "Inter"]
}
console.log (aboutMe) 

// -------------------------

aboutMe.city = "Rio de Janeiro"
console.log (aboutMe)

// -------------------------

delete aboutMe.age
console.log (aboutMe)

// -------------------------

console.log (aboutMe.team[1])
// Esse não tava no desafio mas quis testar

// -------------------------

let cadastro = [{
    nome: "Abebe Bikila",
    idade: 33,
    telefone: 21987654321,
    amigos: ["Sain", "Djonga", "Don L", "Froid"],
},
{
    nome: "Tião do Gás",
    idade: 57,
    telefone: 2140028922,
    amigos: ["Tonhão", "Zé", "Xitão", "Kleitinho do Grau"],
},
{
    nome: "Thor",
    idade: 1505,
    telefone: 21918273645,
    amigos: ["Toni", "Rogers", "Bane", "Natasha"],
},
{
    nome: "Cris dos Prazeres",
    idade: 26,
    telefone: 21992276574,
    amigos: ["João", "Joy", "Mariana", "Dandara"],
},
{
    nome: "Dom Fredom",
    idade: 39,
    telefone: 21999999999,
    amigos: ["Conca", "Deco", "Thiago Silva", "Cano"],
}]
console.log (cadastro)

// -------------------------

console.log (cadastro[0].amigos[1])
console.log (cadastro[1].amigos[2])
console.log (cadastro[2].amigos[3])
console.log (cadastro[3].amigos[2])
console.log (cadastro[4].amigos[1])