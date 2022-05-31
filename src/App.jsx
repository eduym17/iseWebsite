import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, AboutUs, Solutions, PrivacyPolicy, NotFound, LogIn,
} from './views';
import Calcs from './layouts';
import { CalcSelect, InfoClient, InfoSite } from './views/calc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soluciones" element={<Solutions />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/calcs" element={<Calcs />}>
          <Route path="/calcs" element={<CalcSelect />} />
          <Route path=":type/client-info" element={<InfoClient />} />
          <Route path=":type/site-info" element={<InfoSite />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
