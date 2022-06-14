import { Link } from 'react-router-dom';
import pikachuEsp from '../../Media/Gifs/pikachu.espalda.gif';
import '../Styles/LandingPage.css';


const LandingPage = () =>{
    return (
        <div className='background'>
            <div className='container'>
                <div className="PokePage">
                    <h1 className="tituloLanding">Welcome to my PokePage</h1>
                </div>
                <Link to='/Home'>
                    <button className='buttonLanding'>Home</button>
                </Link>
                <div>
                    <img className="pikachuEsp" src={ pikachuEsp } alt='imgLanding'></img>
                </div>
                <h4 className='myName'>Developed by Carolina Castillo A.</h4>
            </div>
        </div>
    )
}

export default LandingPage;