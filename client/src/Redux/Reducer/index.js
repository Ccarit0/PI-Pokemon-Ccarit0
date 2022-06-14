const initialState = {
    pokemon: [],
    pokemons: [], // Este es el arreglo que modifico en los filtros
    pokemonsFiltered: [], // Este es el arreglo que se mantiene sin cambios
    pokemonsTypes: []
}


function rootReducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                pokemonsFiltered: action.payload
            }

    default:
        return state
    }
}

export default rootReducer;

