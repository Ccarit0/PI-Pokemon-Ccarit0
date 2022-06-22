import React from "react";
import { Link } from "react-router-dom";
import SearcbBar from "./SearchBar";
import '../Styles/Nav.css';



const Nav = () =>{
    return (
        <div className="containerNav">
            <SearcbBar className='barraNav'/>
                <Link className="tittleNav" to='/home'>
                    <button className="buttonNav">Home</button>
                </Link>
        </div>
    )
}

export default Nav;