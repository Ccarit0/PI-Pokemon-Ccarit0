// const axios = require ('axios');
// const {Type} = require ('../db');


// const getTypes = async () =>{

//     try {
//         const pokeTypes = [];

//         await axios.get('https://pokeapi.co/api/v2/type').then(apiTypes => {
//             apiTypes.data.results.map(pokeT => pokeTypes.push(pokeT.name))
//         }).catch(e => console.log(e))

//         const types = pokeTypes.map( async (pokeT) => {
//             return await Type.findOrCreate({
//                 where: {
//                     name: pokeT
//                 }
//             }).catch(e => console.log(e))
//         })

//         const allPokeTypes = await Type.findAll();
//         return allPokeTypes;

//     } catch (error) {
//         console.log(error.message)
//     }
// }

// module.exports = {getTypes}
