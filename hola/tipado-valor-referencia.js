// TIPADO FUERTE VS TIPADO DEBIL

// TIPADO FUERTE: que cada que definimos una variable tenemos que decir que tipo de dato
// JAVA O PYTHON 
//int numero = 10
// string senseiName = 'Montoya'

//TIPADO DEBIL: cada tipo de dato de cada variable se autointerpreta
//JAVASCRIPT
//let numero = 10
// let senseiName = 'Montoya'
// numero = ['Apple', 'Mango']

//paso valor: una variable esta asociada a un valor y si se crean nuevas variables a partir de la primera son dos variables independientes con ese valor 
//pasa con valores primitivos (int,double/float,boolean,char,string)
let baseName = 'Sin nombre'
let workName = baseName
console.log(`baseName : ${baseName}`)
console.log(`workName : ${workName}`)

workName = 'Montoya'
baseName = 'Nombre no informado'

console.log(`baseName : ${baseName}`)
console.log(`workName : ${workName}`)

console.log(`================`)




//paso referencia: Las variables se asocian al mismo valor y si una cambia la otra tambien
//pasa con valores completos(arrays, objetos)
let fruits = ['apple', 'mango']
let sensei = {name:'Montoya',age: 30}

console.log('fruits',fruits)
console.log('sensei',sensei)


// let mySuper = fruits
// mySuper[0]= 'strawberry'
// mySuper.push('orange')
// mySuper.push('melon')
let mySuper = [...fruits, 'papaya']
mySuper[0] = 'cereza'
console.log('mySuper',mySuper)
console.log('fruits',fruits)

//let newSensei = sensei 
let newSensei = {...sensei, name :'Daniel'}
newSensei.name = 'Daniel'
console.log('sensei',sensei)
console.log('newsensei',newSensei)







