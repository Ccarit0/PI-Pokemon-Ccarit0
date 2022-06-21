
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {getAllPokemons, getAllTypesPoke, reload, filterByType, orderByAz, orderByStats, filterApi} from '../../Redux/Actions'
import PokeCard from './PokeCard';
import Paginado from './Paginado';
import '../../Redux/Reducer/index';
import Nav from './Nav';
import loading2 from '../../Media/Gifs/loading2.gif'
import '../Styles/Home.css'


// uso el useEffect para ejecutar la function getAllPokes() ANTEESS ( el array vacío)  de renderizar el componente HOME
// el useEffect se usa, en general, para que se ejecute de la forma y en el momento que yo quiera.

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons)
    const allTypes = useSelector(state => state.pokemonsType)

                // estados locales\\

    const [current, setCurrent] = useState(1); // muestra la pág actual
    const [currentPage, setCurrentPage] = useState(12); // POKES mostrados por pág
    const [order, setOrder] = useState('');
    const upToThisPoke = current * currentPage // pagina actual por catidad de pokes por pag
    const firstPoke = upToThisPoke - currentPage // de qué poke empieza cada pág --> ej en pag2 --> 2*12 pokes = 24
                                                // le restamos los 12 que entran el pa pag, quedan 12 pokes
                                                //desde el nro 12 al 23, porq el último no lo incluye
    const pokesToPag = allPokemons.slice(firstPoke, upToThisPoke)

                        // pages \\
    const paginado = (numberPage) => {
        setCurrent(numberPage)
    }

    //(id, img, name, types)
    // console.log( allPokes[0].id) // ¡¡¡¡ allPoke es un ARR de objetos con cada poke  !!!!
    // console.log(allPokesSlice, 'somos los pokeSliceados')--> SOMOS UN ARR CON LOS 12 OBJ DE POKES
    // console.log(allPokesSlice.map(p => p.name), 'funciona el map') --> el MAP al allPokesSlice FUNCTIONA PERFECTO
    

    //                     //filters\\   
    useEffect(() => {
        dispatch(getAllPokemons()) // el dispatch me manda al reducer, por parámetro un objeto que incluya type sí o sí.
    },[dispatch])

    useEffect(() => {
        dispatch(getAllTypesPoke())
    }, [dispatch])

    function handleReload(e){
        e.preventDefault();
        dispatch(reload(e))
    }

    function handleOrderAZ(e){
        e.preventDefault();
        dispatch(orderByAz(e.target.value));
        setCurrent(1);
        setOrder(`Ordenado por ${e.taget.value}`)
    }
    
    function handleFilterType(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
    }
    function handleOrderByStats(e){
        e.preventDefault();
        dispatch(orderByStats(e.target.value));
        setCurrent(1);
        setOrder(`Ordenado por ${e.target.value}`)
    }

    function handleFilterApi(e){
        dispatch(filterApi(e.target.value))
    }

/////////////////////////////////////////////////////////////////////////////////////////////
    


    if(allPokemons.length === 0){
        return (
            <div className='backgroundLoading'>
            <img className='loading2' src={loading2} alt='gif not found'></img>
            <div className='text'>Loading...</div>
            </div>
        )
    }else{
        return (
            <div className="Home">

                <Nav />

                <div>
                </div>
            
                <h1 className="tituloLanding">Welcome to my PokePage</h1>
                <Paginado className='paginadoStyle' pokemonsPage={currentPage} allPokemons = {allPokemons.length} paginado = {paginado}></Paginado> 
                 
                {pokesToPag && pokesToPag.map( p =>{
                   return(
                    <PokeCard
                    id={p.id}
                    img={p.img}
                    name={p.name}
                    types={p.types}
                    key={p.id}
                    />
                    )
                })} 
               
                
                
            </div>
        )
            // el .slice(num1/num2) --> (1*12)-12 --> agarra desde el poke 0, 
            //hasta
            // 1*12 --> 12 [el final]--> en la pag 1, puesto q current sería 1, // del 0 al 11
            // si current es 2... el inicio es 24, le resta 12(el currentPage), y estaría mostrando
            // desde el 12 al 24 (no incluido)
    }
}
