import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './Home';
import About from './About';
import CKDCalculator from './CKDCalculator';
import CKDDetection from './CKDDetection';
import Navibar from './Navbar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navibar/>}>
        <Route index path="/" element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="CKDCalculator" element={<CKDCalculator/>} />
        <Route path="CKDDetection" element={<CKDDetection/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
