import React from 'react';
import {
  Header, Footer, Titles, Paragraph,
} from '../components';
import TechnicalScheme from '../components/TechnicalScheme';
import { electricaImgMobile, termicaImgMobile, landingImage } from '../components/images';

function Solutions() {
  return (
    <div className="text-ise-gray-30 font-Cabin">
      <Header />
      <div className="bg-ise-gray-10 containerFull">
        <div className="containerContent flex flex-col md:py-4 lg:py-6">
          <div className="flex md:flex-row-reverse md:items-center md:justify-center md:gap-4">
            <img src={landingImage} alt="sistema fotovoltaico" className="hidden w-4/6 max-w-xs md:flex lg:max-w-sm" />
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
      <div className="bg-ise-gray-20 containerFull">
        <div className="containerContent flex flex-col md:py-4 lg:py-6">
          <div className="flex md:flex-row md:items-center md:justify-center md:gap-4">
            <img src={landingImage} alt="sistema fotovoltaico" className="hidden w-4/6 max-w-xs md:mt-6 md:flex lg:mt-8 lg:max-w-sm" />
            <div className="flex flex-col items-center lg:w-1/2 md:w-1/2">
              <Titles title="Calentamiento solar de fluidos" magicWord="Calentamiento" customClass="mt-8 md:mt-0 md:text-center md:w-3/5 lg:w-3/4" />
              <img src={termicaImgMobile} alt="Energía eléctrica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-4 lg:mt-10 lg:h-40 lg:w-fit" />
              <Paragraph customClass="mt-3 whitespace-pre-line text-justify md:w-5/6 lg:w-[90%] md:mt-4">
                {`Diseñamos sistemas especiales para calentamiento solar de agua, generación de vapor o calentamiento de fluidos, con el objetivo de ahorrar combustible o energía eléctrica.

                De acuerdo con la temperatura requerida, serán necesarios fluidos y procesos diferentes. A cotinuación, una breve descripción de las soluciones para calentamiento solar que ofrecemos:`}
              </Paragraph>
            </div>
          </div>
          <TechnicalScheme title="Baja temperatura" magicWord="Baja" subtitleFooter="" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 md:mt-5 lg:mt-12">
            {`Sistemas de calentamiento solar con rangos de temperatura entre 20 °C y 150 °C.
            Ideales para calefacción de albercas, regaderas y algunos usos especiales.`}
          </TechnicalScheme>
          <TechnicalScheme title="Media temperatura" magicWord="Media" subtitleFooter="" customClassSubtitle="my-0 md:tracking-tight" customClassParag="" customClass="mt-4 md:mt-5 lg:mt-6">
            {`Sistemas con rangos de temperatura entre 150 °C y 400 °C.
            Principalmente utilizados en sitios con alta demanda de calor, por ejemplo, en la industria alimenticia, química o de plásticos.`}
          </TechnicalScheme>
          <TechnicalScheme title="Alta temperatura" magicWord="Alta" subtitleFooter="" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 mb-6 md:mt-5 lg:mt-6 lg:mb-10">
            {`La temperatura del fluido, comúnmente agua, se eleva hasta obtener vapor sobrecalentado.
            Este tipo de sistemas se utilizan para procesos industriales de alta especialización.`}
          </TechnicalScheme>
        </div>
      </div>
      <div className="bg-ise-gray-10 containerFull">
        <div className="containerContent flex flex-col md:py-4 lg:py-6">
          <div className="flex md:flex-row-reverse md:items-center md:justify-center md:gap-4">
            <img src={landingImage} alt="sistema fotovoltaico" className="hidden w-4/6 max-w-xs md:mt-6 md:flex lg:mt-8 lg:max-w-sm" />
            <div className="flex flex-col items-center lg:w-1/2 md:w-1/2">
              <Titles title="Almacenamiento de energía eléctrica" magicWord="Almacenamiento" customClass="mt-8 md:mt-0 md:text-center md:w-2/3 lg:w-4/5" />
              <img src={electricaImgMobile} alt="Energía eléctrica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-4 lg:mt-10 lg:h-40 lg:w-fit" />
              <Paragraph customClass="mt-3 whitespace-pre-line text-justify md:w-5/6 lg:w-[90%] md:mt-4">
                {`Somos pioneros en la implementación de sistemas para el almacenamiento de energía en México. Hemos encontrado una forma de generarte ahorros muy atractivos.

                Nuestro equipo de ingeniería ha desarrollado un sistema que permite llevar el control y monitoreo de baterías de forma inteligente y sencilla.`}
              </Paragraph>
            </div>
          </div>
          <TechnicalScheme title="Peak Shaving" magicWord="Shaving" subtitleFooter="" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 md:mt-5 lg:mt-12">
            {`Almacena energía barata de manera estratégica y utilizala cuando más te convenga.
            Puedes hacerlo desde la red de CFE o generarla por tu propia cuenta, tenemos opciones a tu medida.`}
          </TechnicalScheme>
          <TechnicalScheme title="Energía Limpia" magicWord="Limpia" subtitleFooter="" customClassSubtitle="my-0 md:tracking-tight" customClassParag="" customClass="mt-4 md:mt-5 lg:mt-6">
            {`¿Te preocupa el futuro de nuestro planeta?
            Puedes generar energía limpia a partir de sistemas fotovoltaicos, aprovechando al máximo el poder del sol, para utilizarla durante la noche. ¡Tú decides cuando utilizarla!`}
          </TechnicalScheme>
          <TechnicalScheme title="Energía Segura" magicWord="Segura" subtitleFooter="" customClassSubtitle="my-0" customClassParag="" customClass="mt-4 mb-6 md:mt-5 lg:mt-6 lg:mb-10">
            {`¡Olvídate de los apagones y variaciones de la red eléctrica!
            Tu sistema es capaz de brindarte la independencia que necesitas para poder seguir operando durante horas de manera segura y constante.`}
          </TechnicalScheme>
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Solutions;
