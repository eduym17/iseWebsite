import React from 'react';
import {
  Header, Footer, Titles, Subtitles, Paragraph, ButtonMain,
} from '../components';
import { landingImage, electricaImgMobile, termicaImgMobile } from '../components/images';

function TermsAndConditions() {
  return (
    <div className="text-ise-gray-30 font-Cabin h-screen bg-red-300">
      <Header />
      <div id="landingPage" className="landingPage bg-ise-gray-10 containerFull">
        <div className="containerContent md:flex-row-reverse md:justify-center md:py-8 md:px-7">
          <Titles title="TÉRMINOS Y CONDICIONES" />
          <img src={landingImage} alt="sistema fotovoltaico" className="w-4/6 max-w-xs lg:max-w-xl" />
          <div className="flex flex-col items-center md:items-start lg:w-1/2 md:w-1/2">
            <Paragraph customClass="mt-3 md:text-left md:w-5/6 lg:w-4/5">
              Genera tu propia energía y comienza a ahorrar de inmediato,
              {' '}
              tenemos la solución que necesitas.
            </Paragraph>
            <a href="/#contacto">
              <ButtonMain customClass="my-5">Ponte en contacto</ButtonMain>
            </a>
          </div>
        </div>
      </div>
      <div className="solutionsSection bg-ise-gray-20 containerFull">
        <div className="containerContent">
          <Titles title="Nuestras soluciones" magicWord="soluciones" customClass="mt-6 lg:mt-12" />
          <Paragraph customClass="mt-1 lg:mt-2">
            Tecnologías rentables que te permitirán generar ahorros con el poder del Sol.
          </Paragraph>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-2 lg:gap-8">
            <div className="flex flex-col items-center md:w-2/5">
              <img src={electricaImgMobile} alt="Energía eléctrica" className="w-[90%] max-w-sm rounded-lg mt-6 lg:mt-10 lg:h-40 lg:w-fit" />
              <Subtitles title="Energía eléctrica" magicWord="eléctrica" customClass="mt-1 lg:mt-2" />
              <Paragraph customClass="mt-1 lg:w-4/5">
                Aprovecha techos, suelos y estacionamientos para generar tu
                {' '}
                propia energía eléctrica.
              </Paragraph>
            </div>
            <div className="flex flex-col items-center md:w-2/5">
              <img src={termicaImgMobile} alt="Energía eléctrica" className="w-[90%] max-w-sm rounded-lg mt-6 lg:mt-10 lg:h-40 lg:w-fit" />
              <Subtitles title="Energía térmica" magicWord="térmica" customClass="mt-1 lg:mt-2" />
              <Paragraph customClass="mt-1 lg:w-4/5">
                Instala un sistema de calentamiento solar que te ayude a disminuir tu
                {' '}
                consumo de gas.
              </Paragraph>
            </div>
          </div>
          <a href="/soluciones">
            <ButtonMain customClass="my-6 lg:mt-8 lg:mb-12">Conoce más</ButtonMain>
          </a>
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default TermsAndConditions;
