
//////////////////////////INFO POKES GRAL////////////////////////////

function myPokesToApiExt (arrPokes) {

const myInfoPokes = arrPokes.map((myPokesToApiExt) => {
    return {
        id: myPokesToApiExt.data.id,
        name: myPokesToApiExt.data.name,
        hp: myPokesToApiExt.data.stats[0].base_stat,
        attack: myPokesToApiExt.data.stats[1].base_stat,
        defense: myPokesToApiExt.data.stats[2].base_stat,
        speed: myPokesToApiExt.data.stats[5].base_stat,
        height:myPokesToApiExt.data.height,
        weight:myPokesToApiExt.data.weight,
        img: myPokesToApiExt.data.sprites.front_default,
        types: myPokesToApiExt.data.types.map((type) => type.type.name),
        estadist: myPokesToApiExt.data.stats[1].base_stat
    }
})

// console.log(myInfoPokes, 'tengo la info gral pokes')
return myInfoPokes
};

//////////////////////PARA LA BD ///////////////////////////////////

function pokesFromBd(pokesData){
    const cadaPokeData = pokesData.map ((p) => {
        return {

            id: p.dataValues.id,
            name: p.dataValues.name,
            hp: p.dataValues.hp,
            attack: p.dataValues.attack,
            defense: p.dataValues.defense,
            speed: p.dataValues.speed,
            height:p.dataValues.height,
            weight:p.dataValues.weight,
            img: p.dataValues.img,
            types: p.dataValues.types.map((e) => e.name),
            createInDb: p.dataValues.createInDb

        }
    })
    return cadaPokeData;
}
//-----------------------------------------------------------//
////////////////////para crear la bd////////////////////////////

function toCreatePokes(infoCreated){
    const pokesToBd = infoCreated.map((pok) => {
        return {
            id: p.dataValues.id,
            name: p.dataValues.name,
            hp: p.dataValues.hp,
            attack: p.dataValues.attack,
            defense: p.dataValues.defense,
            speed: p.dataValues.speed,
            height:p.dataValues.height,
            weight:p.dataValues.weight,
            img: p.dataValues.img,
            types: p.dataValues.types.map((e) => e.name),
            createInDb: p.dataValues.createInDb
             
        }
    })
    console.log(pokesToBd);
    return pokesToBd
}
//-----------------------------------------------------------//
////////////////////////////pokes por id////////////////////////////////////

function pokesId(pokesDataId){
    console.log(pokesDataId.data.stats[0].base_stat)

    const pokesTakeId = {
        id: pokesDataId.data.id,
        name: pokesDataId.data.name,
        hp: pokesDataId.data.stats[0].base_stat,
        attack: pokesDataId.data.stats[1].base_stat,
        defense: pokesDataId.data.stats[2].base_stat,
        speed: pokesDataId.data.stats[5].base_stat,
        height:pokesDataId.data.height,
        weight:pokesDataId.data.weight,
        img: pokesDataId.data.sprites.front_default,
        types:pokesDataId.data.types.map((e) => e.type.name)
    }
    // console.log(await pokesTakeId, 'estoy en take')
    // const loquesea = await pokesTakeId
    return pokesTakeId
}

function pokeToBdId (pokeId){
    const searchPoke = {
        id: pokeId.id,
        name: pokeId.name,
        hp: pokeId.hp,
        attack: pokeId.attack,
        defense: pokeId.defense,
        speed: pokeId.speed,
        height:pokeId.height,
        weight:pokeId.weight,
        img: pokeId.img,
        types: pokeId.types.map((e) => e.name),
        createInDb: pokeId.createInDb
    }
    return searchPoke
};
//-----------------------------------------------------------//
////////////////////poke por nombres////////////////////////////

function pokesByName(p){
    const dataPoke = {
        id: p.dataValues.id,
        name: p.dataValues.name,
        hp: p.dataValues.hp,
        attack: p.dataValues.attack,
        defense: p.dataValues.defense,
        speed: p.dataValues.speed,
        height:p.dataValues.height,
        weight:p.dataValues.weight,
        img: p.dataValues.img,
        types: p.dataValues.types.map((e) => e.name),
        createInDb: p.dataValues.createInDb
    }
    return dataPoke
}

function pokeNameApi(pokeName){
    const pokeTakesByName = {
        id: pokeName.data.id,
        name: pokeName.data.name,
        hp: pokeName.data.stats[0].base_stat,
        attack: pokeName.data.stats[1].base_stat,
        defense: pokeName.data.stats[2].base_stat,
        speed: pokeName.data.stats[5].base_stat,
        height:pokeName.data.height,
        weight:pokeName.data.weight,
        img: pokeName.data.sprites.front_default,
        types: pokeName.data.types.map((e) => e.type.name) 
    }
    
    return pokeTakesByName;
};

//-----------------------------------------------------------//
///////////////////////por tipos bd//////////////////////////////


function getAllTypesBd (dataBd) {
    const pokeTypes = dataBd.map((data) => {
        return {
            name: data.dataValues.name
        };
    });
    return pokeTypes
}

module.exports = {
    myPokesToApiExt,
    pokesFromBd,
    toCreatePokes,
    pokesId,
    pokeToBdId,
    pokesByName,
    pokeNameApi,
    getAllTypesBd
}