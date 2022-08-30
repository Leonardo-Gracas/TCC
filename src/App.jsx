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

  const [navbar, setNavbar] = useState({
    set: false,
    elements: (
      <nav>
        <ul>
          <li><Link to='/'>Sobre</Link></li>
          <li><Link to='/'>Criação'</Link></li>
          <li><Link to='/'>Integrantes</Link></li>
        </ul>
      </nav>
    )
  }
  )

  function showNavbar() {
    let stats = {...navbar}

    stats.set = !stats.set
    setNavbar(stats)
  }

  return (
    <div className="App">
      <Router>
        <header>
          <h1>FALL</h1>
          <button onClick={() => showNavbar()}>☰</button>
          {navbar.set == true ? navbar.elements : false}
        </header>
        <Routes>
          <Route path='/' element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}
