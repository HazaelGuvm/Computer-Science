
/*¨*
VAR es la forma mas antigua de declarar variables en JS 
tiene alcance global
puede ser redeclarada o reasignada
*/

var nombre = "Juan";
console.log("Nombre inicio ",nombre);

if(true){
    var nombre = "Jose"
    console.log("Nombre en if ",nombre);
}
console.log("Nombre final ",nombre);

/* 
LET 
introdujo ES
Alcance es de bloque (scope se limita {})
limitar alcance y usarlo para variables que cambien el flujo del programa
*/
let age = 20;
console.log("age inicio ",age);

if(true){
    let age = 30
        console.log("age en if ",age);
}
console.log("age final ",age);

/* 
CONS 
introdujo ES
Alcance es de bloque (scope se limita {})
limitar alcance y usarlo para valores que no necesitan cambiar (ser reasignados)
*/
const peso = "mxn"
const pi = 3.1416
const day = ['monday','tuesday']

console.log(peso, pi, day)

day.push('wednesday')
console.log(peso, pi, day)
