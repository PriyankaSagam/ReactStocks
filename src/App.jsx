import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Stocks from './pages/Stocks'
import Nav from './components/Nav'
import {stockData} from './data'
function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/stocks/:symbol' element={<Stocks />} /> 
         <Route path='/stocks' element={<Dashboard />} />
      </Routes>

    </div>
    
  )
}

export default App