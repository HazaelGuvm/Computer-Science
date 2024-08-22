class Persona{
constructor(name,age,nacionalidad,trabajo,isIntrovertido){

            this.name = name
            this.age = age
            this.nacionalidad = nacionalidad
            this.trabajo = trabajo
            this.isIntrovertido = isIntrovertido

}
   eat(){
    console.log('eat')
   }
}
class Panadero extends Persona{
    constructor(name,age,nacionalidad,trabajo,isIntrovertido,isComerciante,hasEspatula){
        super(name,age,nacionalidad,trabajo,isIntrovertido)
        console.log('this')

            this.isComerciante = isComerciante
            this.hasEspatula = hasEspatula  

    }
cook(){
    console.log('cook')
}
}
class Superhero extends Persona{
    constructor(name,age,nacionalidad,trabajo,isIntrovertido,superpoder,secretName, alias){
        super(name,age,nacionalidad,trabajo,isIntrovertido)
        console.log('this')
        this.superpoder = superpoder
        this.secretName = secretName
        this.alias = alias

    }
fly(){
    console.log('fly')
}

}

class car{
    constructor(model){
        this.model = model
    }

}
        
const tintan = new Panadero('tintan',25,'mexicana','actor',false, true)
const spiderman = new Superhero('peter parker',22, 'estadounidense','clarin',true,'superfuerza','peterparkr')
const ironMan = new Superhero('tony stark',45,'estadounidense','100tfiko',false,'raiolazer','tonstark')

console.log('class')
console.log('spiderman',spiderman)
console.log('ironman',ironMan)
console.log('tintan',tintan)


