const { Router } = require('express');
const Conection = require ('../conection/functionConection')
// const axios = require ('axios');
// const type = require('../models/type');
// const {getTypes} = require ('../routes/typeRoutes');
// const {getAllPoke, bdGetAllPoke} = require ('../routes/pokemonRoute');
// const { idPoke } = require ('./paramsRoute');
// const {Pokemon, Type} = require ('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//////////////////////////////////RUTA PRINCIPAL/////////////////////////////////////////////////////

router.get('/pokemons/name', Conection.getAllPoke);
router.get('/pokemons', Conection.getAllPokemons);
router.get('/pokemons/:id', Conection.getById);
router.post('/pokemons/createds', Conection.createPokemon);
router.get('/types', Conection.getAllTypesPoke);
// router.get('/pokemons/createds', Conection.createPokemon);





module.exports = router;






// router.get('/pokemons', async (req, res) =>{
//     try {
//         const pokeapi = await getAllPoke()
//         const pokebd = await bdGetAllPoke()
//         const allPoke = res.json([...pokeapi, ...pokebd])
//         return allPoke
//     } catch (error) {
        
//     }
// })

// //////////////////////////////////RUTA POR TIPOS//////////////////////////////////////////////

// router.get('/types', async (req, res) =>{
//     try {
//         let pokeType = await getTypes()
//         res.status(200).json(pokeType)
//     } catch (error) {
//         res.status(404).send('error')
//     }
// })

// ///////////////////////////////RUTA POR PARAMS ID////////////////////////////////////////

// router.get('/pokemons/:id', async (req, res) =>{
//     let id = req.params.id;
    
//     try {
//         if(!id) {
//             return res.status(404).send('Pokemon not found with this ID')
//         }

//         res.status(200).json(await idPoke(id))
//     } catch (error) {
//         console.log(error.message)
//     }

// })

// ///////////////////////RUTA CREACIÓN DE POKE//////////////////////////////////////

// router.post('/pokemons', async (req,res)=>{
//     try {
//      const {name, hp, attack, defense, speed,height, weight} = req.body;
//      const newPokemon = await Pokemon.create({
//          name,
//          hp,
//          attack,
//          defense,
//          speed,
//          height,
//          weight
//      })

//      console.log(newPokemon)
//      res.send(newPokemon)
//     } catch (error) {

//     }
//  })
 
//  router.post('/:pokemonId', async (req,res)=>{
//     try {
//      const {pokemonId} = req.params;
//      const pokemon = await Pokemon.findByPk(pokemonId)
//      console.log(pokemon.JSON)
//      await pokemon.addTipos(tipoId)
//      res.status(200).send('')
//     } catch (error) {
        
//     }
//  })

//  router.put('/', (req,res)=>{
//      res.send('soy put /pokemon')
//  })
 
//  router.delete('/', (req,res)=>{
//      res.send('soy delete /pokemon')
//  })


// module.exports = router;
