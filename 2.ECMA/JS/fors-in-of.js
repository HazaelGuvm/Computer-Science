//arrays: Conjunto de datos o lista de cosas
//objetos: Son la agrupacion de caracteristicas de la misma cosa.

const colors =['red','blue','green']
//colors[1]//blue
const senseiMontoya = {
    name: 'Jose',
    students: ['Gabriel','Luis']
}
//senseiMontoya.name//jose

const fruits = [
    { name: 'apple', price: 22, isStock: true, temporada: 'spring', stores: ['buelmer', 'badiga eurrira', 'chedraui'] },
    { name: 'mangoo', price: 32, isStock: false, temporada: 'summer', stores: ['buelmer', 'chedraui'] },
    { name: 'strawberry', price: 50, isStock: true, temporada: 'spring', stores: [ 'buelmer'] },
    { name: 'grape', price: 20, isStock: true, temporada: 'spring', stores: ['badiga eurrira', 'chedraui'] },
];

//ES5
//mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock"

for(let i=0; i<fruits.length; i++){
    const fruit = fruits[i]
    //console.log(fruit.name fruit.price fruit.isStock)

    //operador ternario
    //condicion ? resultadocondiciontrue : resultadocondicionfalse
    const finalText = fruit.isStock? 'esta en stock':'no esta en stock'
    // let finalText = ''
    // if(fruit.isStock){
    //     finalText = 'esta en stock'
    // }else{
    //     finalText ='no esta en stock'
    // }
console.log(`La ${fruit.name} cuesta ${fruit.price} y ${finalText}`)
}

//ES6 FOR OF es para iterar arreglos

// for(const fruit of fruits){
//     const fruit = fruits[i]    
//     const finalText = fruit.isStock? 'esta en stock':'no esta en stock'
//     console.log(`La ${fruit.name} cuesta ${fruit.price} y ${finalText}`)

// ES6: FOR IN
// Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"
for (let fruit of fruits) {
    // Mostrar el mensaje "La NAME cuesta PRICE y SI/NO esta en stock y lo venden en TIENDA1, TIENDA2, ... TIENDAN"
    const message = fruit.isStock ? 'si' : 'no'
    let storesMessage = '';
    for (let prop in fruit) {
        if (prop === 'stores') {
            // console.log(fruit[prop]); // stores: ['buelmer', 'badiga eurrira', 'chadreui'] => 'buelmer', 'badiga eurrira', 'chadreui'
            for (let store of fruit[prop]) {
                storesMessage += `${store}`;
                //  storesMessage += fruit[prop].length - 1 === i ? '.' : ',' como obtener la i?????
            }
        }
    }
    console.log(`La ${fruit.name} cuesta ${fruit.price} y ${message} esta en stock y lo venden en ${storesMessage}`);
}
