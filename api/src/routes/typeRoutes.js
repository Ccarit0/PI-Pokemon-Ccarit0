const axios = require ('axios');
const {Type} = require ('../db');


const getTypes = async () =>{

    try {
        const poketypes = await axios.get('https://pokeapi.co/api/v2/type')
        // const dataType = await poketypes.data.results
        // console.log(dataType)
        const typeName = poketypes.data.results.map(t => t.name)
        // console.log(typeName)
        await typeName.forEach(e => Type.create({name:e}));
        return typeName

       

    } catch (error) {
        return error.message
    }

}

module.exports = {getTypes}
