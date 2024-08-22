function createSuperHero(superpoder,secretName, alias){

     console.log('this',this)
        this.superpoder = superpoder
        this.secretName = secretName
        this.alias = alias
    }

const spiderman = new createSuperHero('superfuerza','peter parker','spiderman')
const ironMan = new createSuperHero('rayo laser','tony stark','iron man')

console.log('new y this en funcion constructora')
console.log('spiderman', spiderman)
console.log('ironMan', ironMan)

const arr = []
arr.push(9)

const num = 10
num.toString()