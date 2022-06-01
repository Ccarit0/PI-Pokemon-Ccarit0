const { Router } = require('express');
const axios = require ('axios');
const type = require('../models/type');
const {getTypes} = require ('../routes/typeRoutes');
const {getAllPoke} = require ('../routes/pokemonRoute')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/types', async (req, res) =>{
    try {
        res.json(await getTypes())
        
    } catch (error) {
        res.json('error')
    }
})

router.get('/pokemons', async (req, res) =>{
    try {
        
        res.json(await getAllPoke())
        
    } catch (error) {
        
    }
})




module.exports = router;
