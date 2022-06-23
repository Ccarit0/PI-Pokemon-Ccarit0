import React, {useState, useEffect} from "react";
// import {useNavigate} from 'react-router-dom';
import {postPoke, getAllTypesPoke} from '../../Redux/Actions/index'
import { useDispatch, useSelector } from "react-redux";
import '../Styles/CreatePoke.css'
import Nav from "./Nav";


export default function CreatePoke(){
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const allTypes = useSelector((state) => state.pokemonsTypes)
    const pokeCreado= useSelector((state) => state.pokemonsCreate)
    const [errors, setErrors] = useState({});
    const [ msg, setMsg] = useState("")

    console.log(pokeCreado)

    const [input, setInput] = useState({
        name: "",
        hp:50,
        attack:50,
        defense:50,
        speed:50,
        height:50,
        weight:50,
        type:[],
        // img:""
    })

    function validation(input){
        let errors={};
        if(!input.name || typeof input.name !== 'string'){
            errors.name = 'cómo se debería llamar este Poke?';
        }else if(!input.hp || input.hp > 100 || input.hp < 0 || typeof input.hp !== 'number'){
            errors.hp = 'por favor, inserte un valor de VIDA válido, entre 0 y 100';
        }else if(!input.attack || input.attack > 100 || input.attack < 0 || typeof input.attack !== 'number'){
            errors.attack = 'por favor, inserte un valor de ATTACK válido, entre 0 y 100'
        }else if(!input.defense || input.defense > 100 || input.defense < 0 || typeof input.defense !== 'number'){
            errors.defense = 'por favor, inserte un valor de DEFENSE válido, entre 0 y 100'
        }else if(!input.speed || input.speed > 100 || input.speed < 0 || typeof input.speed !== 'number'){
            errors.speed = 'por favor, inserte un valor de SPEED válido, entre 0 y 100'
        }else if(!input.height || input.height > 100 || input.height < 0 || typeof input.height !== 'number'){
            errors.height = 'por favor, inserte un valor de ALTURA válido, entre 0 y 100'
        }else if(!input.weight || input.weight > 100 || input.weight < 0 || typeof input.weight !== 'number'){
            errors.weight = 'por favor, inserte un valor de PESO válido, entre 0 y 100'
        }else if(!input.types){
            errors.types = 'seleccione dos TYPES, para continuar creando el POKE'
        }else if(!input.img || typeof input.img !== 'string'){
            errors.img = 'por favor inserte una ruta de imagen válida'
        }
        return errors;
    }

///// ahora todos los middleware para ver, crear y validar todos los poke////////////
    useEffect(() => {
        dispatch(getAllTypesPoke())
    }, [])
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]:e.target.value
        }))
    }

    function handleSelect(e){
        
        console.log(e.target.name)
        e.preventDefault()

        setInput({
            ...input,
            type: [...input.type, e.target.name]
        })
    }

    function handleSubmit(e){
        // if(!input.name){
        //     e.preventDefault();
        //     setMsg ('we cant create this Poke without a NAME')
        // }else if(!input.type.length){
        //     e.preventDefault()
        //     setMsg('please, select one or two types')
        // }
        e.preventDefault()
        dispatch(postPoke(input))
        // ('Poke created succesfully!!! :)')
        
    }

    let handleDelete = (type) => {
        type.preventDefault();
        setInput({
            ...input,
            type: input.type.filter(pokeC => pokeC !== type)
        })
    }

// console.log(input.type)


    return (
        <div className="divFormu">
            <div className="containerNav">
                <Nav />
            </div>
            <div className="titleFormu">
                <h2 className="TitleP">The New Poke</h2>
            </div>
            

                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="otherBlockCreate">
                        <div className="pokename">
                            <label className="textName">Name: ...</label>
                            <input type='text' id='7' value={input.name} name='name' placeholder="PokeName" onChange={(e) => handleChange(e)} />
                            {
                                errors.name && (
                                    <p className="err">{errors.name}</p>
                                )
                            }
                        </div>
                        <div className="range">
                            <label className="textRangeHP">Write here the HP of your poke...</label>
                            <input type='range' min="0" max='50' id='1' value={input.hp} name='hp' onChange={(e) => handleChange(e)} />
                            <h5 className="textCreated">{input.hp}</h5>
                            {
                                errors.name && (
                                    <span className="errors">{errors.hp}</span>
                                )
                            }
                        </div>
                            <br />
                        <div className="range">
                        <label className="textRangeHP">Write here the ATTACK of your poke...</label>
                            <input type='range' min="0" max='50' id='2' value={input.attack} name='attack' onChange={(e) => handleChange(e)} />
                            <h5 className="textCreated">{input.attack}</h5>
                            {
                                errors.name && (
                                    <span className="errors">{errors.attack}</span>
                                )
                            }
                        </div>
                            <br />
                        <div className="range">
                        <label className="textRangeHP">Write here the DEFENSE of your poke...</label>
                            <input type='range' min="0" max='50' id='3' defaultValue={input.defense} name='defense' onChange={(e) => handleChange(e)} />
                            <h5 className="textCreated">{input.defense}</h5>
                            {
                                errors.name && (
                                    <span className="errors">{errors.defense}</span>
                                )
                            }
                        </div>
                            <br />
                        <div className="range">
                        <label className="textRangeHP">Write here the SPEED of your poke...</label>
                            <input type='range' min="0" max='50' id='3' value={input.speed} name='speed' onChange={(e) => handleChange(e)} />
                            <h5 className="textCreated">{input.speed}</h5>
                            {
                                errors.name && (
                                    <span className="errors">{errors.speed}</span>
                                )
                            }
                        </div>
                            <br />
                        <div className="range">
                        <label className="textRangeHP">Write here the HEIGHT of your poke...</label>
                            <input class="range" type='range' min="0" max='50' id='3' value={input.height} name='height' onChange={(e) => handleChange(e)} />
                            <h5 className="textCreated">{input.height}</h5>
                            {
                                errors.name && (
                                    <span className="errors">{errors.height}</span>
                                )
                            }
                        </div>
                            <br />
                        <div className="range">
                        <label className="textRangeHP">Write here the WEIGHT of your poke...</label>
                            <input type='range' min="0" max='50' id='3' value={input.weight} name='weight' onChange={(e) => handleChange(e)} />
                            <h5 className="textCreated">{input.weight}</h5>
                            {
                                errors.name && (
                                    <span className="errors">{errors.weight}</span>
                                )
                            }
                        </div>
                            <br />
                        <div>
                        {
                            allTypes.map(t => <button value={input.type} name={t} className="types" onClick={(e) => handleSelect(e)} key={t}>{t}</button>)
                        }
                        {
                            msg.length > 0 && <p>{msg}</p>
                        }
                        </div>
                            <br />    
                        <button id='submit' className="buttonCreate" type='submit'>+</button>
                    </div>
                        <br />
                        <div>
                            {
                                allTypes.map(d => <button className="delete" name={d} key={d} onClick={(e) => handleDelete(e)}>- {d}</button>)
                            }
                        </div>
                        <div>
                            {
                                pokeCreado.name && <p>{`el poke ${pokeCreado.name} fue creado con éxito `}</p>
                            }
                        </div>
                </form>
        </div>
    )



}
