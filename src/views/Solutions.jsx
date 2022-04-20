import React from 'react';
import {
  Header, Footer, Titles, Paragraph,
} from '../components';
import TechnicalScheme from '../components/TechnicalScheme';
import { electricaImgMobile, landingImage } from '../components/images';

function Solutions() {
  return (
    <div className="text-ise-gray-30 font-Cabin">
      <Header />
      <div className="bg-ise-gray-10 containerFull">
        <div className="containerContent flex flex-col md:py-4 lg:py-6">
          <div className="flex md:flex-row-reverse md:items-center md:justify-center">
            <img src={landingImage} alt="sistema fotovoltaico" className="hidden md:flex w-4/6 max-w-xs lg:max-w-sm" />
            <div className="flex flex-col items-center lg:w-1/2 md:w-1/2">
              <Titles title="Generación de energía eléctrica" magicWord="eléctrica" customClass="mt-5 md:mt-0 md:text-center md:w-3/5 lg:w-3/4" />
              <img src={electricaImgMobile} alt="Energía eléctrica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-4 lg:mt-10 lg:h-40 lg:w-fit" />
              <Paragraph customClass="mt-3 whitespace-pre-line text-justify md:w-5/6 lg:w-[90%] md:mt-4">
                {`Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica, reduciendo costos internos.

                Existen diversos esquemas de conexión eléctrica de acuerdo con la normativa emitida por la Comisión Reguladora de Energía (CRE). A continuación, una breve descripción de los más utilizados y convenientes para ti y tu negocio:`}
              </Paragraph>
            </div>
          </div>
          <TechnicalScheme title="Net Metering" magicWord="Metering" subtitleFooter="Generación distribuida" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 md:mt-5 lg:mt-12">
            {`Sistemas con una capacidad instalada menor a 500 kW que generan energía eléctrica para autoconsumo.
            Cada contrato con CFE puede conectarse a un único sistema fotovoltaico.`}
          </TechnicalScheme>
          <TechnicalScheme title="Venta Total" magicWord="Total" subtitleFooter="Generación distribuida" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 md:mt-5 lg:mt-6">
            {`Sistemas con una capacidad instalada menor a 500 kW.
            Generan energía eléctrica para ser vendida en su totalidad a suministradores.`}
          </TechnicalScheme>
          <TechnicalScheme title="Abasto Aislado" magicWord="Aislado" subtitleFooter="" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 mb-6 md:mt-5 lg:mt-6 lg:mb-10">
            {`Sistemas con una capacidad instalada mayor o igual a 500 kW para generación y consumo in situ.
            Pueden tener, o no, intercambio de energía con la red.`}
          </TechnicalScheme>
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Solutions;
