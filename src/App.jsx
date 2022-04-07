import React from 'react';
import landingImage from './assets/images/landingImage.png';
import logoInSitu from './assets/icons/logo-orange.png';
import menuIcon from './assets/icons/menu-icon.png';
import bbvaIcon from './assets/icons/clients/bbva-logo.png';
import pemexIcon from './assets/icons/clients/pemex-logo.png';
import toyotaIcon from './assets/icons/clients/toyota-logo.png';
import electricaImgMobile from './assets/images/mobile-energia-electrica.png';
import termicaImgMobile from './assets/images/mobile-energia-termica.png';
import financiamientoIcon from './assets/icons/financiamiento-icon.png';
import epcIcon from './assets/icons/epc-icon.png';
import asesoriaIcon from './assets/icons/asesoria-icon.png';
import exp15 from './assets/images/exp15.png';
import exp30 from './assets/images/exp30.png';
import exp35 from './assets/images/exp35.png';
import arrowOpen from './assets/icons/arrow-open.png';
import arrowClose from './assets/icons/arrow-close.png';

function App() {
  return (
    <div className="text-ise-gray-30 h-screen font-Cabin">
      <div className="header bg-ise-gray-10 flex items-center justify-between p-3">
        <img src={logoInSitu} alt="In Situ Energía" className="h-9" />
        <img src={menuIcon} alt="menu icon" className="h-7" />
      </div>
      <div className="landingPage bg-ise-gray-10 flex flex-col items-center text-ise-gray-30">
        <img src={landingImage} alt="sistema fotovoltaico" className="mb-2 w-3/4 max-w-md" />
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
        <button type="button" className="font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full my-4 mb-8">
          Conoce más
        </button>
      </div>
      <div className="xpresumeSection bg-sungradient-y text-ise-white flex flex-wrap gap-x-4 justify-center items-center py-3">
        <div className="flex items-center gap-1">
          <span className="text-4xl font-bold">+25 </span>
          <div>
            <p className="leading-none font-Hero text-sm">
              clientes
              <br />
              satisfechos
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-4xl font-bold">+25 </span>
          <div>
            <p className="leading-none font-Hero text-sm">
              proyectos
              <br />
              terminados
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-4xl font-bold">+3 </span>
          <div>
            <p className="leading-none font-Hero text-sm">
              MegaWatts
              <br />
              instalados
            </p>
          </div>
        </div>
      </div>
      <div className="servicesSection bg-ise-gray-10 flex flex-col items-center">
        <p className="text-3xl font-bold text-center pt-8 w-4/5">
          Nuestros
          <span className="text-ise-orange"> servicios</span>
        </p>
        <p className="font-Hero text-xs text-center pt-2 pb-7 w-4/5">
          Servicios diseñados para ayudarte a potenciar tu proyecto, a la medida de tus necesidades.
        </p>
        <div className="bg-ise-gray-40 w-[90%] rounded-lg p-2 mb-4">
          <div className="flex items-center gap-2">
            <img src={financiamientoIcon} alt="Financiamiento" className="h-6" />
            <p className="text-2xl font-bold text-left py-1 ">
              Financiamiento
            </p>
          </div>
          <p className="font-Hero text-xs text-justify py-2 w-full">
            Llevamos hasta ti diferentes esquemas y fuentes de financiamiento,
            {' '}
            de acuerdo con las necesidades y requerimientos de tu proyecto.
          </p>
        </div>
        <div className="bg-ise-gray-40 w-[90%] rounded-lg p-2 mb-4">
          <div className="flex items-center gap-2">
            <img src={epcIcon} alt="Financiamiento" className="h-7" />
            <p className="text-2xl font-bold text-left py-1 ">
              Ingeniería, suministro y construcción
            </p>
          </div>
          <p className="font-Hero text-xs text-justify py-2 w-full">
            Desarrollamos proyectos llave en mano, incluyendo ingeniería, procura
            {' '}
            y construcción, con base en energías renovables, especializándonos
            {' '}
            en energía solar para generación de electricida y calentamiento de fluidos.
          </p>
        </div>
        <div className="bg-ise-gray-40 w-[90%] rounded-lg p-2 mb-10">
          <div className="flex items-center gap-2">
            <img src={asesoriaIcon} alt="Financiamiento" className="h-6" />
            <p className="text-2xl font-bold text-left py-1 ">
              Ingeniería y asesoría
            </p>
          </div>
          <p className="font-Hero text-xs text-justify py-2 w-full">
            Nuestra experiencia en los aspectos técnicos y regulatorios nos permiten
            {' '}
            desarrollar correctamente proyectos de energía renovable de mediana y
            {' '}
            gran escala, garantizándote un diseño óptimo.
          </p>
        </div>
      </div>
      <div className="projectsSection bg-ise-gray-20 flex flex-col items-center">
        <p className="text-3xl font-bold text-center pt-8 w-4/5">
          <span className="text-ise-orange">Proyectos </span>
          recientes
        </p>
        <p className="font-Hero text-xs text-center pt-2 pb-7 w-4/5">
          Soluciones inteligentes, siempre a la medidas de las necesidades de nuestros clientes.
        </p>
        <div className="mb-4">
          Esta es la sección del carrusel a la derecha
        </div>
        <div className="mb-10">
          Esta es la sección del carrusel a la izquierda
        </div>
      </div>
      <div className="xpSection bg-ise-gray-10 flex flex-col items-center">
        <p className="text-3xl font-bold text-center pt-8 w-4/5">
          Nuestra
          <span className="text-ise-orange"> experiencia</span>
        </p>
        <p className="font-Hero text-xs text-center pt-2 pb-7 w-4/5">
          Somos un equipo de profesionales altamente capacitados para atender los
          {' '}
          proyectos más exigentes.
        </p>
        <div className="flex flex-col items-center mb-5">
          <img src={exp15} alt="Número 15" className="h-32" />
          <p className="text-2xl font-bold text-center">
            <span className="text-ise-orange">años </span>
            de experiencia
          </p>
        </div>
        <div className="flex flex-col items-center my-5">
          <img src={exp30} alt="Número 30" className="h-32" />
          <p className="text-2xl font-bold text-center">
            <span className="text-ise-orange">proyectos </span>
            ejecutados
          </p>
        </div>
        <div className="flex flex-col items-center my-5">
          <img src={exp35} alt="Número 3.5" className="h-32" />
          <p className="text-2xl font-bold text-center">
            <span className="text-ise-orange">MW </span>
            instalados
          </p>
        </div>
        <button type="button" className="font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full mt-4 mb-8">
          Acerca de nosotros
        </button>
      </div>
      <div className="faqSection bg-ise-gray-20 flex flex-col items-center">
        <p className="text-3xl font-bold text-center pt-8 w-4/5">
          Preguntas
          <span className="text-ise-orange"> frecuentes</span>
        </p>
        <p className="font-Hero text-xs text-center mt-2 mb-2 w-4/5">
          Resuelve tus dudas acerca del funcionamiento de los sistemas solares,
          {' '}
          te compartimos las más frecuentes a continuación.
        </p>
        <div className="faqElectrica flex flex-col items-center">
          <p className="text-2xl font-bold text-center mt-4 mb-2">
            Energía
            <span className="text-ise-orange"> eléctrica</span>
          </p>
          <div className="faqItem bg-ise-gray-50 w-4/5 rounded-full py-1 px-2 mb-3">
            <div className="itemTitle flex justify-between items-center">
              <p className="font-bold">¿Los sistemas solares usan baterías?</p>
              <img src={arrowOpen} alt="arrow" className="h-3" />
            </div>
          </div>
          <div className="faqItem bg-ise-orange text-ise-white w-4/5 rounded-lg py-1 px-2 mb-3">
            <div className="itemTitle flex justify-between items-center">
              <p className="font-bold">¿Pregunta random de longitud amplia?</p>
              <img src={arrowClose} alt="arrow" className="h-3" />
            </div>
            <p className="font-Hero text-xs text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              {' '}
              Nisi provident laudantium voluptas, consequuntur esse iure tempora
              {' '}
              aspernatur magni officia dolor praesentium dolore eum fuga aperiam
              {' '}
              quod facere ad! Voluptate, dolores?
            </p>
          </div>
        </div>
        <div className="faqTermica flex flex-col items-center">
          <p className="text-2xl font-bold text-center mt-4 mb-2">
            Energía
            <span className="text-ise-orange"> térmica</span>
          </p>
          <div className="faqItem bg-ise-gray-50 w-4/5 rounded-full py-1 px-2 mb-3">
            <div className="itemTitle flex justify-between items-center">
              <p className="font-bold">¿Los sistemas térmicos funcionan?</p>
              <img src={arrowOpen} alt="arrow" className="h-3" />
            </div>
          </div>
          <div className="faqItem bg-ise-orange text-ise-white w-4/5 rounded-lg py-1 px-2 mb-10">
            <div className="itemTitle flex justify-between items-center">
              <p className="font-bold">¿Pregunta random de longitud amplia?</p>
              <img src={arrowClose} alt="arrow" className="h-3" />
            </div>
            <p className="font-Hero text-xs text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              {' '}
              Nisi provident laudantium voluptas, consequuntur esse iure tempora
              {' '}
              aspernatur magni officia dolor praesentium dolore eum fuga aperiam
              {' '}
              quod facere ad! Voluptate, dolores?
            </p>
          </div>
        </div>
      </div>
      <div className="contactSection bg-ise-orange text-ise-white flex flex-col items-center">
        <p className="text-3xl font-bold text-center pt-8 w-[95%]">
          ¿Aún tienes alguna pregunta?
        </p>
        <p className="text-2xl font-bold text-center pt-2 w-[95%]">
          ¡Ponte en contacto con nosotros!
        </p>
        <p className="font-Hero text-xs text-center mt-2 mb-2 w-4/5">
          Acércate a nosotros para poder ofrecerte una solución a la medida de tus necesidades,
          {' '}
          escucharemos tus opiniones y buscaremos optimizar tus proyectos.
        </p>
        <form action="/" className="w-4/5 mb-8 flex flex-col items-center">
          <input type="text" name="Name" id="name" placeholder="Tu nombre*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full my-2 placeholder-ise-white" required />
          <input type="email" name="E-mail" id="mail" placeholder="Tu correo electrónico*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full my-2 placeholder-ise-white" required />
          <input type="tel" name="Phone" id="phone" placeholder="Tu teléfono" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full my-2 placeholder-ise-white" />
          <textarea name="question" id="question" cols="30" rows="1" placeholder="¡Haz una pregunta!" className="w-full bg-transparent text-ise-white placeholder-ise-white border-b-2 font-Hero text-xs my-2 resize-y" />
          <button type="submit" className="font-bold py-1.5 px-6 bg-ise-white text-ise-orange rounded-full my-4 self-end">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
