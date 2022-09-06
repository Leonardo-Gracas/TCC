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

export default props => {

  const [nav, setNav] = useState(false)

  const navbar = (
    <nav>
      <ul>
        <li><Link className='nav-link' to='/'>Sobre</Link></li>
        <li><Link className='nav-link' to='/Criacao'>Criação</Link></li>
        <li><Link className='nav-link' to='/Integrantes'>Integrantes</Link></li>
      </ul>
    </nav>
  )

  function showNavbar() {
    setNav(!nav)
  }

  return (
    <div className="App">
      <Router>
        <header>
          <h1>FALL</h1>
          <button onClick={() => showNavbar()}>☰</button>
          {nav == true ? navbar : false}
        </header>
        <Routes>
          <Route path='/' element={<Sobre />} />
          <Route path='/Criacao' element={<Criação />} />
          <Route path='/Integrantes' element={<Integrantes />} />
        </Routes>
      </Router>
    </div>
  );
}
