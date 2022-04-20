import React from 'react';
import {
  Header, Footer, Titles, Paragraph,
} from '../components';
import { electricaImgMobile, landingImage } from '../components/images';
import { bbvaIcon } from '../components/icons';

function AboutUs() {
  return (
    <div className="text-ise-gray-30 font-Cabin bg-ise-gray-20 h-screen">
      <Header />
      <div className="bg-ise-gray-10 containerFull">
        <div className="containerContent flex flex-col">
          <Titles title="Acerca de nosotros" magicWord="nosotros" customClass="mt-2 lg:mt-6" />
          <div className="flex md:my-6 md:flex-row-reverse md:items-center md:justify-center md:gap-8 lg:mt-4">
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
      <div className="bg-ise-gray-20 containerFull">
        <div className="containerContent flex flex-col md:py-2">
          <Titles title="Nuestras alianzas" magicWord="alianzas" customClass="mt-6 md:mt-4 lg:mt-8 md:text-center" />
          <div className="w-[90%] flex flex-col gap-y-6 gap-x-10 justify-center items-center mt-8 mb-8 lg:flex-row lg:flex-wrap lg:w-full lg:my-14 lg:gap-y-12">
            <a href="/"><img src={bbvaIcon} alt="aliances" className="h-10 lg:h-14" /></a>
            <a href="/"><img src={bbvaIcon} alt="aliances" className="h-10 lg:h-14" /></a>
            <a href="/"><img src={bbvaIcon} alt="aliances" className="h-10 lg:h-14" /></a>
          </div>
        </div>
      </div>
      <div className="bg-ise-gray-10 containerFull">
        <div className="containerContent flex flex-col md:py-4 lg:py-6">
          <Titles title="Nuestro compromiso" magicWord="compromiso" customClass="mt-6 md:mt-4 lg:mt-6" />
          <div className="flex md:my-6 md:flex-row md:items-center md:justify-center md:gap-8 lg:mt-4">
            <img src={landingImage} alt="sistema fotovoltaico" className="hidden w-4/6 max-w-xs md:flex md:w-1/3 lg:max-w-sm md:mt-2" />
            <div className="flex flex-col items-center md:w-1/2 lg:w-1/2">
              <img src={electricaImgMobile} alt="Energía eléctrica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-4 lg:mt-10 lg:h-40 lg:w-fit" />
              <Paragraph customClass="mt-3 mb-6 whitespace-pre-line text-justify md:w-full md:mt-4">
                {`Somos una empresa profundamente comprometida con las causas sociales y el combate al cambio climático, estamos seguros de que podemos ayudar a dejar un mundo mejor para las siguientes generaciones.
                
                Actualmente nuestra plantilla está compuesta por 50% de integrantes del género femenino y 50% del género masculino. No tenemos duda de que los mejores resultados surgen cuando combinamos todos nuestros talentos.`}
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
