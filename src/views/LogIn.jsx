import React from 'react';
import {
  Header, Footer, ScrollToTop, LogInForm, InputText, InputNumber,
} from '../components';

function Solutions() {
  return (
    <div className="containerFullHeightFullWidth text-ise-gray-30 font-Cabin selection:bg-ise-orange selection:text-ise-white">
      <ScrollToTop />
      <Header />
      <div className="bg-ise-gray-10 containerFullHeightFullWidth">
        <div className="containerContent h-full justify-center">
          <div className="w-1/3">
            <InputText label="Nombre" customPlaceholder="Nombre aquí" condition="Requerido" customClass="w-[50%]" />
            <InputText label="Apellido" customPlaceholder="Apellido aquí" condition="Opcional" customClass="w-[75%]" />
            <InputText label="E-mail" customPlaceholder="E-mail aquí" condition="Requerido" customClass="" />
            <InputText label="Dirección" customPlaceholder="Calle, Número, Colonia, Municipio, Estado, CP" condition="Opcional" customClass="w-[125%]" />
            <InputNumber label="Input número" customPlaceholder="0.00" condition="Opcional" customClass="w-[125%]" />
          </div>
          <LogInForm />
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Solutions;
