const axios = require ('axios');


const getAllPoke = async()=> {
try {
    const getPoke = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const allPokeURL = getPoke.data.results
    // allPokeURL trae array con name y url de todos los poke;
    // console.log(allPokeURL)
    const dataPokePromise = allPokeURL.map(async c => await axios.get(c.url).then(res => res.data))
    console.log(await dataPokePromise)
    //dataPokePromise es un array de promesas --> Promise.all;

    const dataPoke = await Promise.all(dataPokePromise) //el promise.all recibe un arr de promesas,
                                                        // las ejecuta al mismo tiempo, y a medida que se resuelven
                                                        // se van guargando en "dataPoke"
    console.log(await dataPoke)

    
    const dataFinalApiExt = dataPoke.map(poke => {
        // const cadaStats = poke.stats
        // console.log(cadaStats)  //me muestra un arr con objetos, en posición 0 --> base_stats de HP
                                //en posición 1, base_stat de ATTACK
                                //en posición 2, base_stat de DEFENSE
                                //y en posición 5, base_stat de SPEED
        // const vida = cadaStats[0]
        // console.log(vida) // me posiciona en HP de cada poke, ahora entro en BASE_STATE para sacar el valor
        
        // const phVida = vida.map(stat => {

        return {
            id: poke.id,
            name: poke.name,
            hp: poke.stats[0].base_stat,
            attack: poke.stats[1].base_stat,
            defense: poke.stats[2].base_stat,
            speed: poke.stats[5].base_stat,
            height: poke.height,
            weight: poke.weight
        }
    })

    return dataFinalApiExt
    
} catch (error) {
    console.log(error.message)
}

}

// function getPokeApiInt = 
// CREAR UNA FUNCION PARA INGRESAR DATA A LA BDD --> TYPE.CREATE.. ETC,
//EN EL INDEX, ROUTER.POST QUE RECIBA POR BODY LAS CARACT DEL POKE PARA PODER MANDARME POR POSTMAN LA INFO
// Y VER SI ESTÁ FUNCIONANDO LO DE GUARDAR LA INFO EN LA API INTERNA. --> PGADMIN 

module.exports = {getAllPoke}