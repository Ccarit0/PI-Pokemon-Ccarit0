import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/Actions";
import Nav from "./Nav";
import carta1 from '../../Media/Images/carta1edit.fw.png'
import '../Styles/DetailPoke.css'
import loading from '../../Media/Gifs/loading.gif'
import PokeCard from "./PokeCard";


const DetailPoke = () =>{
const params = useParams()
// console.log(params)

const dispatch = useDispatch()
const pokeD = useSelector((state) => state.pokemonDetail)
console.log(typeof pokeD)
// const UpperName = 'pikachu'.toUpperCase() // preguntar a FLOR como carajo usar el UpperCASE




useEffect(() => {
    dispatch(getDetails(params.id))
},[])

    return (
        
        <div className="background">
            <Nav />
                {pokeD.length === 0 ?
                <div>
                    <p className="noPoke">Loading Again...</p>
                    <img src={loading} alt='image not found'></img>
                </div> 
                :
                <div>
                    <h1 className="pokeDetailName">Detalle de<br />{pokeD.name}</h1>
                    <img className='imgDetail'src={carta1} alt='not found'></img>
                    <div className="allDetails">
                        <div className="firstD">
                            <h4>HP: {pokeD.hp}</h4><br/>
                            <h4>ATTACK: {pokeD.attack}</h4><br/>
                            <h4>DEFENSE: {pokeD.defense}</h4><br/>
                        </div>
                        <div className='secondD'>
                        <h4>WEIGHT: {pokeD.weight}</h4>
                        <h4>HEIGHT: {pokeD.height}</h4>
                        </div>
                    </div>
                    <div className="typesDetail">
                        <h3>TYPES: {pokeD.types}</h3>
                    </div>
                    <div>
                    <img className='caminanding'src={loading} alt='image not found'></img>
                    </div>
                </div>
            }
            
        </div>
  )
}

export default DetailPoke;