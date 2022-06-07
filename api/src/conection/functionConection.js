const axios = require ('axios');

const {
    
    myPokesToApiExt,
    pokesFromBd,
    pokesId,
    pokeToBdId,
    pokesByName,
    pokeNameApi

} = require ('../fuenteDataPoke/todoPoke');
const { Pokemon, Type } = require ('../db');
const { response } = require('express');

///////////////////ya re está este LOS TRAE LOS POKE por NAME-- NO TOCAR////////////////////////////

async function getAllPoke(req, res) {
    let { name } = req.query;

    try {
        const nameBd = await Pokemon.findOne({
            where: { name: `${name}`},
            include: [{model: Type}]
        });

        // console.log(nameBd, 'nameBD') // POR LO MENOS LO ENCUENTRA

        if(!nameBd) {
            const getNamePoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)


            const eachName = pokeNameApi(getNamePoke)

            return res.status(200).send(eachName)
        }


        const iGotU = pokesByName(nameBd);
        return res.send(iGotU)

    } catch (error) {
        res.send({msg:'the poke dosent exist with the name'})
    }
}

///////////////////ya re está este LOS TRAE LOS POKE por NAME-- NO TOCAR////////////////////////////
//-------------------------------------------------------------------------//

// async function CreateToExit(req, res) {
//     let { param } = req.query

//     try {
//         if(param === "fueCreado"){
//             const pokeCreateInBd = await Pokemon.findAll({
//                 include: { model: Type }
//             });
//             const resultPokeCreateds = pokesFromBd(pokeCreateInBd);
//             res.send(resultPokeCreateds);
//         }else{
//             const pokesUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
//             const nextPokeUrl = await axios.get(`${pokesUrl.data.next}`)
//             const pokemons = pokesUrl.data.results.map((poke) =>{
//                 axios.get(poke.url)
//             });
//             console.log(pokemons) // devuelve un arr de promesas, uso Pormise.all
//             const resultsPromPoke = await Promise.all(pokemons);
//             const nextResult = await Promise.all(nextPokeUrl);

//             const allPokes = response.concat(nextResult);
//             res.send(allPokes)
//         }
//     } catch (error) {
//         res.send({msg:'Poke dosent created'})
//     }
// };

//-------------------------------------------------------------------------//
///////////////////ya re está este LOS TRAE A TODOS LOS POKE -- NO TOCAR////////////////////////////

async function getAllPokemons(req, res) {
    try {
        const bdPoke = await Pokemon.findAll({
            include: {
                model:Type
            }
        });
        const resultPokeFromBd = pokesFromBd(bdPoke);

        const pokesUrl = await axios.get (`https://pokeapi.co/api/v2/pokemon`)
        const nextPokeUrl = await axios.get(`${pokesUrl.data.next}`)
        const pokemons = pokesUrl.data.results.map((poke) => 
        axios.get(poke.url)
        );
        const nextPokemons = nextPokeUrl.data.results.map((poke) => 
        axios.get(poke.url)
        );


        // console.log(pokesUrl)
        // console.log(nextPokemons, 'ahora sí')
        // console.log(pokemons, 'soy el ult')

        const resultsPromPoke = await Promise.all(pokemons);
        const nextResult = await Promise.all(nextPokemons);

        // console.log(nextResult,'si')

        const thisIsCreated = myPokesToApiExt(resultsPromPoke);
        const andNextCreated = myPokesToApiExt(nextResult)
        console.log(thisIsCreated)
        console.log(andNextCreated)

        //---- con esto unimos la data poke entre la API y la bd-------//

        const allPokeApiExt = [...thisIsCreated, ...andNextCreated]
        // console.log(allPokeApiExt, 'estoy aca')


        const allPokemons = [...allPokeApiExt, ...resultPokeFromBd]
        // const allPokemons = response
        //     .concat(allPokeApiExt)
        //     .concat(resultPokeFromBd)

        console.log(allPokemons, 'ahora acá')


        res.status(200).send(allPokemons);

    } catch (error) {
        res.status(404).send({error})
    }
};

///////////////////ya re está este LOS TRAE A TODOS LOS POKE -- NO TOCAR////////////////////////////
//----------------------------------------------------------------------------------------//
///////////////////ya re está este LOS TRAE POR TYPE -- NO TOCAR////////////////////////////


async function getAllTypesPoke(req, res) {


    try {
        
        const callTypes = await axios.get(`https://pokeapi.co/api/v2/type`)
        // console.log(callTypes)
        const callTypeP = await callTypes.data.results.map( cadaT => cadaT.name)
        // console.log(callTypeP, 'estoy estoyyyyy') // siiiiiiiiii arr de string de types
        await callTypeP.map( tbd => {
            return (
                Type.create({
                    name: tbd
                })
            )
            
        })

        res.status(200).json(callTypeP);

    } catch (error) {
        res.status(404).send({msg:'the poke was not created or found'})
    }

}

///////////////////ya re está este LOS TRAE POR TYPE -- NO TOCAR////////////////////////////
//-------------------------------------------------------------------------//
///////////////////ya re está este de encontrar por ID POKEEE -- NO TOCAR////////////////////////////

async function getById(req, res) {
    let { id } = req.params;
    // id = parseInt(id)
    console.log(typeof id)
    
    try {
    if(id.length < 4) { //si no entra a este IF  es porque el ID tiene más de 4 dígitos

        const pokemonGetById = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(pokemonGetById, 'estoy en id')
        
        
        const pokeGetIt = await pokesId(pokemonGetById);
        console.log( pokeGetIt, 'ya estoy estoy ELSE')
    
    
        return pokeGetIt ? res.json(pokeGetIt): res.send('el poke no se encuentra')

    }else{

        const pokemonGetById = await Pokemon.findByPk(id, {
            include: [Type]
        });
        const pokeResultById = pokeToBdId(pokemonGetById);

        return pokeResultById ? res.send(pokeResultById): res.send('el poke no se encuentra tampoco en BD')

    }
    
    } catch (error) {
        res.send(error)
    }
};

//-------------------------------------------------------------------------//
///////////////////ya re está este de crear POKEEE -- NO TOCAR////////////////////////////

async function createPokemon (req, res) {
    let  {name, hp, attack, defense, speed, height, wheight, img, type} = req.body;
    // console.log(req.body, 'si llega') // siii llegó el obj de poke creado

    try {
        const pokemonCreated = await Pokemon.create({
    
            name: name,
            hp: hp,
            attack:attack,
            defense:defense,
            speed: speed,
            height: height,
            wheight:wheight,
            img:
                img ||
                'https://w7.pngwing.com/pngs/799/234/png-transparent-pokxe9mon-go-pikachu-pokxe9-ball-icon-blue-eggs-blue-game-leaf.png',
            });
      
            // console.log(pokemonCreated, 'nsaoeirgpia')
            // console.log(type, 'type')


        const buscaUno = await type.map( (nombre) => {
            const postTypes = Type.findOne({
                attributes: ['id'],
                where: {
                    name: nombre,
                }
            });
            // console.log(await postTypes, 'estariamos acá')
           return postTypes

            
        });
        const idTypes = await Promise.all(buscaUno)
        const mapIdTypes = idTypes.map( idt => idt.dataValues.id)
        

        mapIdTypes.forEach(cadaIdType => pokemonCreated.addType(cadaIdType))


        // console.log(mapIdTypes, 'idTypes')
        return res.status(200).json(pokemonCreated);

    } catch (error) {
        res.status(404).send('the poke cant load');
    }
    ///////////////////ya re está este de crear POKEEE -- NO TOCAR////////////////////////////

};

module.exports = {
    getAllPoke,
    // CreateToExit,
    getAllPokemons,
    getAllTypesPoke,
    getById,
    createPokemon
}