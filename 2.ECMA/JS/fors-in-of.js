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
    console.log(fruits[i].name)
}

