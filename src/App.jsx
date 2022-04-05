import React from 'react';
import landingImage from './assets/images/landingImage.png';
import logoInSitu from './assets/icons/logo-orange.png';
import menuIcon from './assets/icons/menu-icon.png';
import bbvaIcon from './assets/icons/clients/bbva-logo.png';
import pemexIcon from './assets/icons/clients/pemex-logo.png';
import toyotaIcon from './assets/icons/clients/toyota-logo.png';
import electricaImgMobile from './assets/images/mobile-energia-electrica.png';
import termicaImgMobile from './assets/images/mobile-energia-termica.png';

function App() {
  return (
    <div className="text-ise-gray-30 h-screen font-Cabin">
      <div className="header bg-ise-gray-10 flex items-center justify-between p-3">
        <img src={logoInSitu} alt="In Situ Energía" className="h-9" />
        <img src={menuIcon} alt="menu icon" className="h-7" />
      </div>
      <div className="landingPage bg-ise-gray-10 flex flex-col items-center text-ise-gray-30">
        <img src={landingImage} alt="sistema fotovoltaico" className="mb-2 w-3/4" />
        <p className="text-3xl font-bold text-center my-2 w-4/5">
          Los
          <span className="text-ise-orange"> beneficios </span>
          del Sol, siempre a tu alcance
        </p>
        <p className="font-Hero text-xs text-center py-2 w-4/5">
          Genera tu propia energía y comienza a ahorrar de inmediato,
          {' '}
          tenemos la solución que necesitas.
        </p>
        <button type="button" className="font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full my-4">
          Ponte en contacto
        </button>
      </div>
      <div className="clientsBar flex items-center justify-evenly bg-ise-gray-10 py-6">
        <img src={toyotaIcon} alt="TOYOTA" className="h-10" />
        <img src={bbvaIcon} alt="BBVA" className="h-10" />
        <img src={pemexIcon} alt="PEMEX" className="h-10" />
      </div>
      <div className="solutionsSection bg-ise-gray-20 flex flex-col items-center">
        <p className="text-3xl font-bold text-center pt-8 w-4/5">
          Nuestras
          <span className="text-ise-orange"> soluciones</span>
        </p>
        <p className="font-Hero text-xs text-center pt-2 pb-8 w-4/5">
          Tecnologías rentables que te permitirán generar ahorros con el poder del Sol.
        </p>
        <img src={electricaImgMobile} alt="Energía eléctrica" className="w-[90%] rounded-lg" />
        <p className="text-2xl font-bold text-center py-1 w-4/5">
          Energía
          <span className="text-ise-orange"> eléctrica</span>
        </p>
        <p className="font-Hero text-xs text-center pb-8 w-4/5">
          Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica.
        </p>
        <img src={termicaImgMobile} alt="Energía eléctrica" className="w-[90%] rounded-lg" />
        <p className="text-2xl font-bold text-center py-1 w-4/5">
          Energía
          <span className="text-ise-orange"> térmica</span>
        </p>
        <p className="font-Hero text-xs text-center pb-2 w-4/5">
          Instala un sistema de calentamiento solar que te ayude a disminuir tu consumo de gas.
        </p>
        <button type="button" className="font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full my-4">
          Ponte en contacto
        </button>
      </div>
      <div className="Cabin">
        <h1 className="font-Cabin font-regular text-5xl text-ise-orange bg-sungradient-y">
          Y pues
          <span className="text-ise-sky bg-sungradient-o"> ya estaría</span>
        </h1>
        <h1 className="font-Cabin font-medium text-5xl bg-skygradient-b">
          Cabin mediums
        </h1>
        <h1 className="font-Cabin font-semibold text-5xl bg-skygradient-s">
          Cabin semibold
        </h1>
        <h1 className="font-Cabin font-bold text-5xl">
          Cabin bold
        </h1>
      </div>
      <div className="Hero">
        <h1 className="font-Hero font-light text-5xl">
          Hero light
        </h1>
        <h1 className="font-Hero font-regular text-5xl">
          Hero regular
        </h1>
        <h1 className="font-Hero font-bold text-5xl">
          Hero bold
        </h1>
      </div>
    </div>
  );
}

export default App;
