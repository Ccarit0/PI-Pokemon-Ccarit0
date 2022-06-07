// const axios = require ('axios');
// const {Pokemon, Type} = require ('../db')

// ///////////////////////////   function model pokemon to []GET/pokemons   /////////////////////////////////////////////


// const getAllPoke = async()=> {

// try {

//     let pokeSave = [];

//     const getPoke = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
//     const allPokeURL = getPoke.data.results
//                                                         // allPokeURL trae array con name y url de todos los poke;
//                                                         // console.log(allPokeURL)
//     const dataPokePromise = allPokeURL.map(async c => await axios.get(c.url).then(res => res.data))
//     //a la "res" le hago el .data para evitar ponerlo en el obj de dataFinalApiEXT;
//     // console.log(await dataPokePromise)
//     //dataPokePromise es un array de promesas --> Promise.all;

//     const dataPoke = await Promise.all(dataPokePromise) //el promise.all recibe un arr de promesas,
//                                                         // las ejecuta al mismo tiempo, y a medida que se resuelven
//                                                         // se van guargando en arr "dataPoke"
//     // console.log(await dataPoke)

    
//     const dataFinalApiExt = await axios.all(dataPoke).then (poke => {
//                                                         // const cadaStats = poke.stats
//                                                         // console.log(cadaStats)  //me muestra un arr con objetos, en posición 0 --> base_stats de HP
//                                                                                 //en posición 1, base_stat de ATTACK
//                                                                                 //en posición 2, base_stat de DEFENSE
//                                                                                 //y en posición 5, base_stat de SPEED
//                                                         // const vida = cadaStats[0]
//                                                         // console.log(vida) // me posiciona en HP de cada poke, ahora entro en BASE_STATE para sacar el valor
                                                        
//                                                         // const phVida = vida.map(stat => {
//         poke.map( p => {
//             pokeSave.push({ // acá pusheo todos las caract de los poke que me traigo de la api ext
//                             // en el arr vacío que declaré al princ del try, como pokeSave=[];

//                 id: p.id,
//                 name: p.name.toUpperCase(), // dev el valor de la cadena en Mayúscula
//                 hp: p.stats[0].base_stat,
//                 attack: p.stats[1].base_stat,
//                 defense: p.stats[2].base_stat,
//                 speed: p.stats[5].base_stat,
//                 height: p.height,
//                 weight: p.weight,
//                 type: p.types.map(t => t.type.name)
//             })
//         })
        
//         return pokeSave // en caso que no entren, devuelvo el arr de dataFinal como petición de todos
//                         // los poke en promesa al Promise.all anterior.
//     })

//     return dataFinalApiExt
// }catch{
//     error
// }
// }


// //////////////////////////////   obtengo todos los poke de bd   ////////////////////////////////////////////////

// const bdGetAllPoke = async() => {
//     try {
//         const pokeDb = await Pokemon.findAll({
//             include:{
//                 model: Type,
//                 attributes: ['name'],
//                 through: {
//                     attributes: [],
//                 }
//             }
//         })
//         return pokeDb
        
//     } catch (error) {
//         return error.message
//     }
// }
// // console.log(bdGetAllPoke, 'estoy aqui')



// // function getPokeApiInt = 
// // CREAR UNA FUNCION PARA INGRESAR DATA A LA BDD --> TYPE.CREATE.. ETC,
// //EN EL INDEX, ROUTER.POST QUE RECIBA POR BODY LAS CARACT DEL POKE PARA PODER MANDARME POR POSTMAN LA INFO
// // Y VER SI ESTÁ FUNCIONANDO LO DE GUARDAR LA INFO EN LA API INTERNA. --> PGADMIN 

// module.exports = {getAllPoke, bdGetAllPoke}