import React from 'react';
import {
  Header, Footer, Titles, Paragraph,
} from '../components';
import { electricaImgMobile, landingImage } from '../components/images';

function AboutUs() {
  return (
    <div className="text-ise-gray-30 font-Cabin">
      <Header />
      <div className="bg-ise-gray-10 containerFull">
        <div className="containerContent flex flex-col md:py-4 lg:py-6">
          <Titles title="Acerca de nosotros" magicWord="nosotros" customClass="mt-5 md:mt-0 md:text-center" />
          <div className="flex md:mb-6 md:mt-2 md:flex-row-reverse md:items-center md:justify-center md:gap-8">
            <img src={landingImage} alt="sistema fotovoltaico" className="hidden w-4/6 max-w-xs md:flex md:w-1/3 lg:max-w-sm" />
            <div className="flex flex-col items-center md:w-1/2 lg:w-1/2">
              <img src={electricaImgMobile} alt="Energía eléctrica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-4 lg:mt-10 lg:h-40 lg:w-fit" />
              <Paragraph customClass="mt-3 mb-6 whitespace-pre-line text-justify md:w-full md:mt-4">
                {`Fundada en el año 2017, y con más de diez años de experiencia dentro de la industria de las energías renovables, In Situ Energía se ha convertido en la empresa proveedora de servicios de Ingeniería, Procura y Construcción (EPC, por sus siglas en inglés), referente del rubro.

                Desarrollamos con profesionalismo cada uno de nuestros proyectos, apoyados en nuestras capacidades técnicas, regulatorias y financieras, a través de las cuales somos capaces de generar proyectos de alta calidad.`}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default AboutUs;
