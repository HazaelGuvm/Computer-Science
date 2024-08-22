function createPersona(name,age,nacionalidad,trabajo,isIntrovertido){
        this.name = name
        this.age = age
        this.nacionalidad = nacionalidad
        this.trabajo = trabajo
        this.isIntrovertido = isIntrovertido
        this.eat =()=>{
            console.log('eat')
        }
}


function createPanadero(name,age,nacionalidad,trabajo,isIntrovertido,isComerciante,hasEspatula){

        this.__proto__=new createPersona(name,age,nacionalidad,trabajo,isIntrovertido)
        this.isComerciante = isComerciante
        this.hasEspatula = hasEspatula  
        this.cook = function(){
            console.log('cook')
        }  
//linea herencia
}
function createSuperHero(superpoder,secretName, alias){
//linea herencia 
       this.superpoder = superpoder
       this.secretName = secretName
       this.alias = alias   
       this.fly = function(){
        console.log('fly')
    }  
       
   }

    const tintan = new createPanadero('tintan',25,'mexicana','actor',false, true,true)
    const spiderman = new createSuperHero('peter parker',22, 'estadounidense','clarin',true)
    const ironMan = new createSuperHero('rayo laser','tony stark','iron man')

    console.log('proto')
    console.log('spiderman',spiderman)
    console.log('ironman',ironMan)
    console.log('tintan',tintan)

