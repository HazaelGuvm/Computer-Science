const array = [100, 90, 110, 101, 12, 70]


// array.forEach(function(){

    
// })

//for each: imprimir todos los numeros del arreglo
const newaForEachArray = array.forEach((element, i)=>{
//array.foreach((numero, posiciondelnumero))
    console.log(`arr [${i}] = ${element}`)
if (element>100){
    return element
    //no funciona el return
}
})


//maps
console.log( `====================== `)
const newMapArray = array.map((element,i)=>{
console.log ( `array [${i}]= ${element} `)
if (element>100){
    return element
}
})

console.log(`for each result`, newMapArray)
console.log(`for each result`, newaForEachArray)