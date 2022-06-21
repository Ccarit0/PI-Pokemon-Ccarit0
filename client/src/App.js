import './App.css';
import * as React from 'react'
import { BrowserRouter, Route, Routes, Link, Switch} from 'react-router-dom';
import  LandingPage  from './Components/JSfiles/LandingPage';
import  Home  from './Components/JSfiles/Home';
import  CreatePoke  from './Components/JSfiles/CreatePoke';
import  DetailPoke  from './Components/JSfiles/DetailPoke';
// import PokeCard from './Components/JSfiles/PokeCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/home' element={<Home />}></Route>
            {/* <Route path='/pokemons/:name' element={<PokeCard />}></Route> */}
            <Route path= '/pokemons/create' element={<CreatePoke/>}></Route>
            <Route path= '/pokemons/:id' element={<DetailPoke/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
