import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoInSitu } from './icons';
import ButtonAnchor from './ButtonAnchor';

function Header() {
  const [menu, setMenu] = useState('0');
  const handleClick = () => {
    setMenu(!menu);
  };

  const blurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // Focus left self
      setMenu(true);
    }
  };

  const enterHandlesMenu = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div id="inicio" className="header bg-ise-gray-10 containerFull selection:bg-ise-orange selection:text-ise-white">
      <div id="header" className="containerContent flex-row justify-between p-3 items-start md:items-center lg:py-6 lg:px-4">
        <Link to="/">
          <img src={logoInSitu} alt="In Situ Energía" className="h-9 lg:h-12" />
        </Link>
        <button type="button" onKeyUp={(e) => enterHandlesMenu(e)} onBlur={(e) => blurHandler(e)} className={`cursor-default lg:hidden absolute right-3 top-3 transition-all duration-1000 ${menu ? 'text-ise-orange' : 'flex gap-8 bg-ise-orange py-1 pr-1 pl-3 rounded-lg text-ise-white font-semibold'}`}>
          <div className={`${menu ? 'hidden' : 'flex flex-col items-start'}`}>
            <Link to="/">Inicio</Link>
            <Link to="/soluciones">Soluciones</Link>
            <Link to="/nosotros">Nosotros</Link>
            <a href="/#proyectos">Proyectos</a>
            <a href="/#contacto">Contacto</a>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" onClick={() => handleClick()} className={`hover:cursor-pointer ${menu ? 'h-8 w-8' : 'h-6 w-6'}`}>
            <path fillRule="evenodd" d={`${menu ? 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z' : 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'} `} clipRule="evenodd" />
          </svg>
        </button>
        <div className="hidden font-semibold text-lg lg:flex items-center gap-12">
          <Link to="/">Inicio</Link>
          <Link to="/soluciones">Soluciones</Link>
          <Link to="/nosotros">Nosotros</Link>
          <a href="/#proyectos">Proyectos</a>
          <ButtonAnchor customClass="" href="/#contacto">Contacto</ButtonAnchor>
        </div>
      </div>
    </div>
  );
}

export default Header;
