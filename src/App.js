import React, { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/react-bootstrap/';

export default function App() {

    useEffect(() => {
      // ...
    }, []);

  return (
    <div className="App" >
     <Router>
        <NavBar/>        
          <Routes>     
            <Route path="/" element={<Navigate to="/Home" />} /> 
            <Route path="/Home" element={<Home />}/>
            <Route path="/Portfolio" element={<Portfolio />}/>
          </Routes>
        </Router>   
    </div>
  );
};