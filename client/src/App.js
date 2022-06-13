import './App.css';
import * as React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { landingPage } from '../src/JSfiles/landingPage';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my PokePage</h1>
      <BrowserRouter>
      <nav className='LinksNav'>
      <Link to={"/"} className={"Link"}>GO!</Link>
      </nav>
        <Routes>
          <Route>
            <Route exact path='/' element={<landingPage />}></Route>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
