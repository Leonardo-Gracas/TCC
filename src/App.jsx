import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Sobre from './pages/Sobre'
import Criação from './pages/Criação'
import Integrantes from './pages/Integrantes';
import Software from './pages/Software';

export default props => {

  const [nav, setNav] = useState(window.innerWidth > 700 ? true : false)

  const navbar = (
    <nav>
      <ul>
        <li><Link onClick={() => showNavbar()} className='nav-link' to='/'>Sobre</Link></li>
        <li><Link onClick={() => showNavbar()} className='nav-link' to='/Criacao'>Criação</Link></li>
        <li><Link onClick={() => showNavbar()} className='nav-link' to='/Integrantes'>Integrantes</Link></li>
        <li><Link onClick={() => showNavbar()} className='nav-link' to='/Software'>Software</Link></li>
      </ul>
    </nav>
  )

  function showNavbar() {
    if(window.innerWidth > 700){
      setNav(true)
    }else{
      setNav(!nav)
    }
  }


  return (
    <div className="App">
      <Router>
        <header>
          <h1>FALL</h1>
          <button onClick={() => showNavbar()} id="bar-button">☰</button>
          {nav == true ? navbar : false}
        </header>
        <Routes>
          <Route path='/' element={<Sobre />}  />
          <Route path='/Criacao' element={<Criação />} />
          <Route path='/Integrantes' element={<Integrantes />} />
          <Route path='/Software' element={<Software />} />
        </Routes>
      </Router>
    </div>
  );
}
