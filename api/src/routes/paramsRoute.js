// const axios = require ('axios');
// // const {dataPoke} = require ('../routes/pokemonRoute')
// const {Pokemon, Type} = require ('../db')

// //////////////////////   obtengo Poke de API por params (ID)   //////////////////////////


// const idPoke = async (id) => {
//     let takePokeApiId = [] // acá guardo los poke por id params que encuentro
//     try {
//         let detailPoke =await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         detailPoke = detailPoke.data;
//         //console.log(detailPoke)
//         let secondRequestApi = await axios.get(detailPoke.species.url);
//         //de esta manera entro solamente a la prop del objeto species y a url
        

//         if(detailPoke){
//             takePokeApiId.push({
//                 id: secondRequestApi.id,
//                 name: secondRequestApi.name,
//                 //hp: detailPoke.stats[0].base_stat,
//                // attack: detailPoke.stats[1].base_stat,
//                // defense: detailPoke.stats[2].base_stat,
//                // speed: detailPoke.stats[5].base_stat,
//                // height: detailPoke.height,
//                // weight: detailPoke.weight,
//                // type: detailPoke.types.map(t => t.type.name)
//             })
//             console.log(secondRequestApi, 'consoltake')
//             return secondRequestApi;
//         }
    
//     } catch (error) {
//        console.log(error.message) 
//     }
// }

// const dbGetParams = async () => {
//     try {
//         const paramsPoke = await Pokemon.findOne({
//             where: {id: id},
//             include:{
//                 model: Type,
//                 attributes: ['name'],
//                 through: {
//                     attributes: [],
//                 }
//             }
//         })
//         paramsPoke
        
//         let takePokeIdDb = [];

//         takePokeIdDb.push({
//             id: idParams?.dataValues.id,
//             name: idParams?.dataValues.name.toUpperCase(),
//             attack: idParams?.dataValues.attack,
//             defense: idParams?.dataValues.defense,
//             speed: idParams?.dataValues.speed,
//             height: idParams?.dataValues.height,
//             weight: idParams?.dataValues.weight,
//             type: idParams?.dataValues.types
//         });
//         console.log(id)
//         res.send(takePokeIdDb);

//       } catch (error) {
//         error.message
//     }
// };
   
// module.exports = {idPoke, dbGetParams}