import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Sobre from './pages/Sobre'

export default props => {

  const [nav, setNav] = useState(false)

  const navbar = (
    <nav>
      <ul>
        <li><Link className='nav-link' to='/'>Sobre</Link></li>
        <li><Link className='nav-link' to='/'>Criação</Link></li>
        <li><Link className='nav-link' to='/'>Integrantes</Link></li>
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
        </Routes>
      </Router>
    </div>
  );
}
