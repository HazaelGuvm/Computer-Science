function createSuperHero(superpoder,secretName, alias){

    const superhero={
        superpoder:superpoder,
        secretName:secretName,
        alias:alias
    }
    return superhero
}

const spiderman = createSuperHero('superfuerza','peter parker','spiderman')
const ironMan = createSuperHero('rayo laser','tony stark','iron man|1')
console.log('funcion que crea un objeto')
console.log('spiderman', spiderman)
console.log('ironMan', ironMan)

