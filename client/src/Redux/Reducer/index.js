// import { GET_ALL_POKEMONS, GET_POKE, GET_ALL_TYPES_POKE, GET_DETAILS, RELOAD, ORDER_BY_AZ, FILTER_BY_TYPE, ORDER_BY_STATS, FILTER_API} from "../Actions/index.js"


const initialState = {
    pokemon: [],
    pokemons: [], // Este es el arreglo que modifico en los filtros
    pokemonDetail: {}, // acá guardo la card completa de cada poke
    pokemonsFiltered: [], // Este es el arreglo que se mantiene sin cambios
    pokemonsTypes: [],
    pokemonsCreate: {}
}


function rootReducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_ALL_POKEMONS':
            // console.log(action.payload) // llegan los 40 pokes
            return {
                ...state,
                pokemons: action.payload,
                pokemonsFiltered: action.payload
            }
         


        case 'GET_POKE':

            let fullPoke = state.pokemonsFiltered;
            let onePoke = fullPoke.filter(p => p.name === action.payload)
            let noPoke = fullPoke
            return {
                ...state,
                pokemons: onePoke.length ? onePoke : noPoke.concat(alert('no hay pokemons con est nombre wachi. Te muestro todos los poke de nuevo:...'))
            }

        case 'GET_TYPES':
            return {
                ...state,
                pokemonsTypes: action.payload
            }
        
        
        case 'GET_DETAILS':
            return {
                ...state,
                pokemonDetail: action.payload
            }

        case 'POST_POKE':
            console.log(action.payload.types)
           
            return {
                ...state,
                pokemonsCreate: action.payload
            }


        case 'RELOAD':
            return {
                ...state,
                pokemons: state.pokemons
            }

        case 'ORDER_BY_AZ':
            let orderPokes = action.payload === 'az' ?
            state.pokemons.sort(function (a, b){
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.pokemons.sort(function(a,b){
                if(a.name > b.name){
                    return -1
                }
                if(b.name > a.name){
                    return 1
                }
                return 0
            })
            return {
                ... state,
                pokemons: orderPokes
            }
        
        case 'FILTER_BY_TYPE':
            const allPokes = state.pokemonsFiltered;
            const typeFiltered = action.payload === 'all' ? allPokes :
            allPokes.filter(filt => filt.types.map(filt => filt.name).includes(action.payload))
            return{
                ...state,
                pokemons: typeFiltered
            }

        case 'ORDER_BY_STATS': //orden por estadísticas
        let pokeStats = action.payload === "weak" ?
        state.pokemons.sort((a,z) => {
            if( a.attack > z.attack) {
                return 1
            }
            if (z.attack > a.attack){
                return -1
            }
            return 0
        }) :
        state.pokemons.sort((a, z) =>{
            if( a.attack > z.attack){
                return -1
            }
            if( z.attack > a.attack){
                return 1
            }
            return 0
        })
        return {
            ...state,
            pokemons: pokeStats
        }

        case 'FILTER_API':
            let pokes=[]
            if( action.payload === 'pokes'){
                pokes = state.pokemonsFiltered
            }else if (action.payload === 'db'){
                pokes = state.pokemonsFiltered.filter( p => p.pokesFromBd)
            }else if(action.payload === 'api'){
                pokes = state.pokemonsFiltered.filter(p => !p.pokesFromBd)
            }
            return {
                ...state,
                pokemons: pokes
            }

        case 'POST_POKE':
            return {
                ...state,
            }

    default:
        return state
    }
}

export default rootReducer;

