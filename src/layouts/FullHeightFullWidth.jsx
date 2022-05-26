import React from 'react';
import { Header, Footer } from '../components';

function FullHeightFullWidth() {
  return (
    <div className="containerFullHeightFullWidth bg-ise-gray-10">
      <Header />
      <div className="containerContent bg-red-200 w-[90%]">
        Contenido
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default FullHeightFullWidth;
