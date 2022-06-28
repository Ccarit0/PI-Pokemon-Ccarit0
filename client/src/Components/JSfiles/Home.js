
import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {getAllPokemons, getAllTypesPoke, reload, filterByType, orderByAz, orderByStats, filterApi, resetName} from '../../Redux/Actions'
import PokeCard from './PokeCard';
import Paginado from './Paginado';
import '../../Redux/Reducer/index';
import Nav from './Nav';
import loading2 from '../../Media/Gifs/loading2.gif'
import { Link } from 'react-router-dom';
import '../Styles/Home.css';



// uso el useEffect para ejecutar la function getAllPokes() ANTEESS ( el array vacío)  de renderizar el componente HOME
// el useEffect se usa, en general, para que se ejecute de la forma y en el momento que yo quiera.

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons)
    const allTypes = useSelector(state => state.pokemonsTypes)
    const pokeName = useSelector(state => state.pokemonsName)
    const pokeCreado = useSelector(state => state.pokemonsCreate)
    // console.log(allTypes, 'types')
    const pokesFilt = useSelector(state => state.pokemonsFiltered)
    
    // estados locales\\
    
    const [current, setCurrent] = useState(1); // muestra la pág actual
    const [currentPage, setCurrentPage] = useState(12); // POKES mostrados por pág
    const [order, setOrder] = useState('');
    const upToThisPoke = current * currentPage // pagina actual por catidad de pokes por pag
    const firstPoke = upToThisPoke - currentPage // de qué poke empieza cada pág --> ej en pag2 --> 2*12 pokes = 24
    // le restamos los 12 que entran el pa pag, quedan 12 pokes
    //desde el nro 12 al 23, porq el último no lo incluye
    const [filtrados, setFiltrados] = useState([]);
    const [bdpoke, setBdpoke] = useState({});
   
    
    const pokesToPag = filtrados.slice(firstPoke, upToThisPoke)
    // console.log(filtrados, 'home')

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
        dispatch(getAllPokemons())  
        dispatch(getAllTypesPoke())
       },[])

    useEffect(()=>{
        setFiltrados(allPokemons)
    }, [allPokemons])

    

    function handleReload(e){
        e.preventDefault();
        dispatch(getAllPokemons())
        setFiltrados(allPokemons)
        dispatch(resetName())
    }

    function handleOrderAbc(e){
        e.preventDefault();
        e.target.value === 'asc' ?
            setFiltrados ([...filtrados.sort(function (a, b){
                if(a.name > b.name) {
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            })]) 
            :
            setFiltrados([...filtrados.sort(function(a,b){
                if(a.name > b.name){
                    return -1
                }
                if(b.name > a.name){
                    return 1
                }
                return 0
            })])
        
        // console.log(e.target.value, 'sklnfpair')

        // console.log(e.target.value)
        // dispatch(orderByAz(e.target.value));
        
        // setCurrent(1);
        // setOrder(`Ordenado por ${e.taget.value}`)
    }//FUNCIONA, pero sólo hace el filt UNA VEZ para A-Z y UNA VEZ para Z-A; :/
    // console.log(filtrados, 'ando?')
    
    
    function handleFilterType(e){
        e.preventDefault();   
        const typesFilters = allPokemons.filter((pokeF) => pokeF.types.find(type => type===e.target.value))
        // console.log(typesFilters.length, 'home')
        setFiltrados(typesFilters)
     
    }


    function handleOrderByStats(e){
        e.preventDefault();
        
        // console.log(e.target.value, 'home')
        e.target.value === "defense" ?
        setFiltrados ([...filtrados.sort((a,z) => {
            if( a.attack > z.attack) {
                return 1
            }
            if (z.attack > a.attack){
                return -1
            }
            return 0
        })]) :
       setFiltrados ([...filtrados.sort((a, z) =>{
            if( a.attack > z.attack){
                return -1
            }
            if( z.attack > a.attack){
                return 1
            }
            return 0
        })])
       

    }

    function handleFilterApi(e){     
        e.preventDefault();
        if(e.target.value === 'bd'){
            const bdPokemons = allPokemons.filter(p => p.createInDb)
            bdPokemons.length > 0 && setFiltrados(bdPokemons)
        }else{
            const apiPokemons = allPokemons.filter(p => !p.createInDb)
            apiPokemons.length > 0 && setFiltrados(apiPokemons)
        }
        // console.log(e.target.value, 'home')
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
                <h1 className="tituloLanding">Welcome to my PokePage</h1>
                    <Nav />
                <div className='bottonBox1'>
                    <div>
                        <Link to='/pokemons/create'>
                            <button className='create'>New Poke</button>
                        </Link>    
                    </div>
                    <div>
                        <Link to= '/about'>
                            <button className='butAbout'>About</button>
                        </Link>
                    </div>

                    <Paginado className='paginadoStyle' pokemonsPage={currentPage} allPokemons = {allPokemons.length} paginado = {paginado}></Paginado> 
                </div >
                <div className="ImgFondo">
                    <div className='filters'>
                        <select className='abc' value=''onChange={(e) => handleOrderAbc(e)}>
                            <option value='' disabled >Abc Order ...</option>
                            <option value='asc'>A to Z ...</option>
                            <option value='des'>Z to A ...</option>
                        </select>
                        <br />
                        <select className='TypeFilter' onChange={(e) => handleFilterType(e)}>
                            <option value='all'>Type Filter...</option>
                            {
                            allTypes?.map(p => {
                                return <option value={p} key={p}>{p}</option>
                            })   
                            }
                        </select>
                        <br />
                        <select className='filterStats' onChange={(e) => handleOrderByStats(e)}>
                            <option value='all' disabled >Fight Order...</option>
                            <option value='attack'>Attack Order...</option>
                            <option value='defense'>Defense Order...</option>
                        </select>
                        <br />
                        <select className='filterApi' onChange={(e) => handleFilterApi(e)}>
                            <option disabled value='pokes'>Exist or Created Filter...</option>
                            <option value='api'>Exist now...</option>
                            <option value='bd'>Create...</option>
                        </select>
                    </div>
                    <div className='botonReload'>
                        <Link to='/home'>
                            <button className='reload' onClick={(e) =>handleReload(e) }>Reinicianding :P ...</button>
                        </Link>
                    </div>
                </div>
                <div className='cards'>
                   {
                    pokeName.name 
                    ?
                    <div>
                        <PokeCard
                        id={pokeName.id}
                        img={pokeName.img}
                        name={pokeName.name}
                        types={pokeName.types}
                        key={pokeName.id}
                        /> 
                        <button onClick={() =>dispatch(resetName()) }>reset</button>
                    </div>
                    :

                    pokesToPag && pokesToPag.map( p =>{
                    return(
                        <PokeCard
                        id={p.id}
                        img={p.img}
                        name={p.name}
                        types={p.types}
                        key={p.id}
                        />
                        )
                    })
                   }
               
                </div>
            </div>
        )
            // el .slice(num1/num2) --> (1*12)-12 --> agarra desde el poke 0, 
            //hasta
            // 1*12 --> 12 [el final]--> en la pag 1, puesto q current sería 1, // del 0 al 11
            // si current es 2... el inicio es 24, le resta 12(el currentPage), y estaría mostrando
            // desde el 12 al 24 (no incluido)
    }
}
