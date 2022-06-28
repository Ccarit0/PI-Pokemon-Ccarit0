import { Link } from 'react-router-dom';
import transform from '../../Media/Gifs/pendding.gif';
import '../Styles/About.css';


const About = () =>{
    return (
        <div className='background'>
            <div className='container'>
                <div className="boxIzq">
                    <div className='name'>
                        <h2 className='name'>Developed by <br /> Carolina Castillo A.</h2>
                    </div>
                    <div className='textos'>
                        <h6>-ES-</h6>
                        <h5> Este proyecto se trata de crear un SPA basado en Pokémon, <br />a través del Bootcamp de @Henry.<br /> 
                        Es una lista navegable de Pokémon en la que puedes filtrar por tipo, <br />
                        origen u ordenar por nombre o ataque. Puedes acceder <br />a los detalles de cada uno
                        o, lo más divertido, ¡crear el tuyo propio!. <br />
                        La aplicación recupera datos de la API de Pokemon Api, <br />
                        crea una base de datos donde se guardarán los pokemon creados,<br />
                        crea una tabla intermedia y genera la asociación.<br />
                        - Back-end y base de datos</h5>
                        <br />
                        <h6>-EN-</h6>
                        <h5>
                        This project is about creating a SPA using what i've learn on @Henry, <br />
                        based on Pokemon. It is a catalog, that is, a browsable list of Pokemon <br />
                        that you can filter by type, origin or sort by name or attack. <br />
                        You can access to the details of each one or, the most fun part, <br/>create your own!.<br/>
                        The aplication retrieves data from the Pokemon API, <br />
                        create a database where the created pokemons will be saved, <br />
                        create an intermediate table and generate the association.<br />
                        <br />
                        - Back-End&Database
                        </h5>
                    </div>
                    <h2 className='subtit'>Tecnologías Usadas</h2>
                </div>
                
                <div className='boxTecno'>
                    
                        <div className='dosIzq'>
                            <img className='pgAdmin' src='https://img2.freepng.es/20180603/peb/kisspng-postgresql-pgadmin-computer-icons-database-free-so-global-developmental-delay-5b143bbfd2e5a2.9085848315280526718639.jpg'></img>
                            <img className='htmlcssjs' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5XB0x_VrdRtFq2ykZ2uNkHlTJJWkuXxyDl9l0WaQhEoaY63JMxzLqTaZBjUqc3CsbDU&usqp=CAU'></img>
                        </div>
                        <div className='tresder'>
                            <img  className='reactredux' src='https://camo.githubusercontent.com/8e14ab6f6c4539c74e8ad926ff05173474250c4e/68747470733a2f2f7777772e62617074697374652d646f6e6175782e66722f72656163742d72656475782d636f6e636570742f72656163742d72656475782e706e67'></img>
                            <img className='node'src='https://rosolutions.com.mx/blog/wp-content/uploads/2018/08/node-js-736399_960_720-740x406.png'></img>
                            <img className='express' src='https://images.tute.io/tute/topic/express-js.png'></img>
                        </div>
                </div> 
                    
                
                {/* /* <div className='boxcenter'>
                    <div>
                        <img className="transform" src={ transform } alt='imgAbout'></img>
                    </div>
                    <div>
                        <h4 className='myName'>Developed by Carolina Castillo A.</h4>
                    </div> */}
                    
                
                <Link to='/Home'>
                    <button className='home'>Back Home</button>
                </Link>
            </div>
        </div>
    
    )
}

export default About