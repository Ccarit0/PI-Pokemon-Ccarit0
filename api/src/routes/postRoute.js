// const axios = require ('axios');
// const {Pokemon} = require ('../db')



// const postPoke = async(id) => {
//     let createPokeId = [] // guardo los poke que creo por id
// }
//     try {
//         let creoPoke = await axios.post(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         creoPoke = creoPoke.data;

//         if(createPokeId){
//             createPokeId.push({
//                 d: creoPoke.id,
//                 name: creoPoke.name,
//                 hp: creoPoke.stats[0].base_stat,
//                 attack: creoPoke.stats[1].base_stat,
//                 defense: creoPoke.stats[2].base_stat,
//                 speed: creoPoke.stats[5].base_stat,
//                 height: creoPoke.height,
//                 weight: creoPoke.weight,
//                 type: creoPoke.types.map(t => t.type.name) 
//             })
//             console.log(createPokeId, 'estoy creando el poke')
//             res.send (createPokeId);
        
    
//         } catch (error) {
//             // console.log(error.message)
//         }
//     };
        

// module.exports = { postPoke }
        