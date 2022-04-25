import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, AboutUs, Solutions, PrivacyPolicy, NotFound,
} from './views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Solutions />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
