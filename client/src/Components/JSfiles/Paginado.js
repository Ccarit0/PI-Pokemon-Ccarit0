import React, { useEffect, useState } from "react";
import '../Styles/Paginado.css';


export default function Paginado({pokemonsPage, allPokemons, paginado}) {
    // console.log(typeof allPoke)
    const [numberPage, setNumberPage]  = useState([]);

    
    useEffect(() => {
        const numberPage = []
        for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPage); i++) {
            numberPage.push(i)
            }
        
    setNumberPage(numberPage)
}, [])


    // console.log(numberPage, 'funciona el useeffect')
    // console.log(numberPage, 'estoy devolviendo algo') // DEVUELVE UN ARR CON ERROR

    return (
        <div>
            
        
            {numberPage && numberPage.map( numPage => (
                
                <button key={numPage} className="numberPage" onClick={() => paginado(numPage)}>{numPage}</button>
                
            ))}
    

        </div>
        
    )
}
