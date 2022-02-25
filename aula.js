const nome ="jose"
//nao pode atribuir outro valor a variavel

let a = 2 
let b = "abc"
a = true
//js não é estaticamente tipado, tem um tipo de estilos, mas não é estatico

var c = 2 + 4

var linguagem = "Java"
console.log ('aprendento' + linguagem)
var linguagem = "Java"  
console.log ('aprendento ${linguagem}')

var idade = 18 
console.log ("oi" + nome)
if (idade >=18){
    var nome = "Jose"
    //içamento/hoist (pucada para fora do if)
    console.log     ("parabens" + nome + ", voce pode dirigir")
}
console.log ("ate " + nome)

const n1 = 2
const n2 = '3'
const n3 = n1 + n2
console.log (n3)

const n4 = n1 + Number(n2)

console.log ([]=== false)
console.log (1=="1")//sim pois a coerção
console.log (1 === "1")//sem coerção