import axios from 'axios';
// export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
// export const GET_ALL_POKE = "GET_ALL_POKE";
// export const GET_ALL_TYPES_POKE = "GET_ALL_TYPES_POKE";
// export const GET_DETAILS =  "GET_DETAILS"
// export const RELOAD = "RELOAD"
// export const ORDER_BY_AZ = "ORDER_BY_AZ" 
// export const FILTER_BY_TYPE = "FILTER_BY_TYPE"
// export const ORDER_BY_STATS = "ORDER_BY_STATS"
// export const FILTER_API = "FILTER_API"


export function getAllPokemons(){
    // console.log('estoy en la action')
    return async(dispatch) =>{
        let pokes = await axios.get('http://localhost:3001/pokemons')
        // console.log(pokes)
        return dispatch({
            type: "GET_ALL_POKEMONS",
            payload: pokes.data
        })
    }
}

export function getAllPoke(name){
    // console.log(name) // el name es lo que escribe el usuario en el Input de SearchBar
    return async function (dispatch){

        const pokeName = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)
        // console.log(createPoke.data, 'poke creado') //ACÁ TENGO MI POKE CREADO EN UN OBJ, NO APARECEN LOS TYPES
        return dispatch({
            type: "GET_POKE_NAME",
            payload: pokeName.data
        })
    }
    
    
}

export function postPoke(payload){
    // console.log(payload)
    return async function (dispatch){

        const createPoke = await axios.post("http://localhost:3001/pokemons/createds", payload)
        // console.log(createPoke.data, 'poke creado') //ACÁ TENGO MI POKE CREADO EN UN OBJ, NO APARECEN LOS TYPES
        return dispatch({
            type: "POST_POKE",
            payload: createPoke.data
        })
    }
}

export function getAllTypesPoke(){
    return async (dispatch) => {
        let types = await axios.get('http://localhost:3001/types')
        // console.log(types.data, 'actions')
        return dispatch({
            type: "GET_TYPES",
            payload: types.data
        })
    }
}

export function getDetails(id){
    return async function (dispatch) {
        try {
            let poke = await axios.get(`http://localhost:3001/pokemons/${id}`)
            console.log(poke.data, 'poke.data')
            return dispatch({
                type:"GET_DETAILS",
                payload: poke.data
            })
        } catch (err) {
            console.log(err)            
        }
    }
}

export function reload(payload){
    return{
        type: "RELOAD",
        payload
    }
}

/////////// filters/////////////////////

export function filterByType(payload){
    // console.log(payload)
    return{
        type: "FILTER_BY_TYPE",
        payload
    }
}

export function orderByAz (payload){
    return{
        type: "ORDER_BY_AZ",
        payload
    }
}

export function orderByStats (payload) {
    return {
        type: "ORDER_BY_STATS",
        payload
    }
}

export function filterApi (payload){
    return{
        type: "FILTER_API",
        payload
    }
}

export function resetName (){
    return{
        type: "RESET_NAME",
        
    }
}