function calculoRapidinho(n){
    return Promise.resolve((n*(n+1))/2)
}

calculoRapidinho


function f (n){
    return new Promise ((resolve, reject) => {
    res = n*(n+1)/2
    resolve(res)
    })
}





// // 1 + 2 + 3 ..... + n-1 + n

// function calculoDemorado (n){
//     let p = new Promise ((resolve, reject) => {
//         if (n<0){
//             reject("Somente valores positivos")
//         }
//         else        
//         {for(let i=1; i<=0; i++)
//             res += 1
//         resolve(res)}
//     })
//     return p
// }

// const resultadoFuturo = calculoDemorado(10)
// resultadoFuturo.then ((res) => console.log(res))



// function exemplo (){
//     let p = new Promise(function(resolve, reject){
//         resolve(1)
//     })
//     return p
// }

// const resultadoFuturo = exemplo()
// resultadoFuturo.then((resultado) => console.log(resultado))


// function exemplo (){
//     return 1
// }

// const resultado = exemplo()
// console.log(resultado)




// const fs = require('fs')

// const abrirArquivo = function (nomeArquivo){

//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log ("Deu erro: " + erro)
//         }
//         else{
//             console.log(conteudo.toString())

//             const dobro = 2 * +conteudo.toString()
//             const finalizar = function (erro){
//                 if (erro){
//                     console.log ("Deu erro " + erro)
//                 }
//                 else{
//                     console.log ("Salvou o dobro com sucesso")
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }

// abrirArquivo('arquivo.txt')

// const nome ="jose"
// //nao pode atribuir outro valor a variavel

// let a = 2 
// let b = "abc"
// a = true
// //js não é estaticamente tipado, tem um tipo de estilos, mas não é estatico

// var c = 2 + 4

// var linguagem = "Java"
// console.log ('aprendento' + linguagem)
// var linguagem = "Java"  
// console.log ('aprendento ${linguagem}')

// var idade = 18 
// console.log ("oi" + nome)
// if (idade >=18){
//     var nome = "Jose"
//     //içamento/hoist (pucada para fora do if)
//     console.log     ("parabens" + nome + ", voce pode dirigir")
// }
// console.log ("ate " + nome)

// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log (n3)

// const n4 = n1 + Number(n2)

// console.log ([]=== false)
// console.log (1=="1")//sim pois a coerção
// console.log (1 === "1")//sem coerção

// v1[3]= 3
// v1[0]= "abc"
// v1[1]=true

// for(let i=0; i<v1.length; i++){
//     console.log(v1[i])
// }


// const nome = [0,1]
// nome[0]=1 //pode
// console.log(nome)
// nome[0]="nome" //n pode

// const nomes = ["ana", "maria", "jorge", "atila", "ramires"]

// // const resultante =  nomes.filter((n) => {
// //     return n.startsWith("")
// // })

// const res = nomes.map((nome) => nome.length)
// console.log(res)

// // console.log(resultante)


// function hello (){
//     console.log("oi")
// }

// function hello (){
//     console.log("hello, " + nome) 
// }

// hello ("jõao")
// function soma (a, b){
//     return a+b
// }

// const dobro = function (n){
//     return 2 * n
// }

// const triplo = function (n=1){
//     return n * 3
// }

//arrow functions

// const hello = () => console.log("Hello")

// const dobro = (n) => n * 2

// console.log(soma(0,0))

//JSON

// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log (pessoa.nome)
// console.log (pessoa['idade'])

// let pessoaComEndereco = {
//     nome: "Matria",
//     idade: 22,
//     endereco:{
//         logradouro: "Rua B",
//         numero: 12
//     }, 
//     veiculos: [
//         {
//             marca: 'ford',
//             modelo: 'ka',
//             ano: 2012,
//             revisoes: [
//                 {
//                     data:'12/02/2013',
//                     consiltor: 'andre'
//                 }
//             ]
//         },
//         {
//             marca: 'volks',
//             modelo: 'Nivus',
//             ano: 2020,
//             revisoes: [
//                 {
//                     data:'12/02/2013',
//                     consiltor: 'jorge'
//                 }
//             ]
//         },
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             ano: 2021,
//             revisoes: [
//                 {
//                     data:'12/02/2013',
//                     consiltor: 'pedro'
//                 }
//             ]
//         }
//     ]
// }

// let calc = {
//     soma: (a, b) => a + b,
//     subtracao: function (a, b){
//         return a - b
//     }
// }
// console.log (calc.soma(2, 3))
// console.log (coal.subtracao (5, 4))


