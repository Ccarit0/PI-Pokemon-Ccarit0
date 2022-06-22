import React from "react";
import { Link } from "react-router-dom";
import '../Styles/PokeCard.css'


const PokeCard = ({id, img, name, types}) =>{


    // console.log(id, name, img, types)
    return (
        <div className="Card">
            <h3 className="PokeName">{name}</h3>
            <Link to={'/pokemons' + id}>
                <img className="pokeImg" src={img} alt='PokeImg not found'></img>
            </Link>
            <h4 className="types">TYPES: {<br />}{types.map(type =>  "-" + type + " " )}</h4>
            <Link to={`/pokemons/${id}`}>{<button className="boton">+</button>}</Link>
        </div>
    )
}
console.log(PokeCard, 'funciono')
export default PokeCard;