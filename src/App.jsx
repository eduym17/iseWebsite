import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Solutions from './views/Solutions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Solutions />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
