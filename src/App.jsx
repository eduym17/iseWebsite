import React from 'react';
import {
  logoInSitu, menuIcon, pemexIcon, bbvaIcon, epcIcon, toyotaIcon,
  financiamientoIcon, asesoriaIcon, arrowOpen, arrowClose, linkedinIcon,
  twitterIcon, facebookIcon, instagramIcon,
} from './components/icons';
import {
  landingImage, electricaImgMobile, termicaImgMobile, exp15, exp30, exp35,
} from './components/images';
import {
  ButtonMain, Paragraph, ServiceCard, Titles,
} from './components';

function App() {
  return (
    <div className="text-ise-gray-30 h-screen font-Cabin">
      <div className="header bg-ise-gray-10 flex items-center justify-between p-3">
        <a href="/">
          <img src={logoInSitu} alt="In Situ Energía" className="h-9" />
        </a>
        <img src={menuIcon} alt="menu icon" className="h-7" />
      </div>
      <div className="landingPage bg-ise-gray-10 flex flex-col items-center text-ise-gray-30">
        <img src={landingImage} alt="sistema fotovoltaico" className="mb-2 w-3/4 max-w-md" />
        <Titles title="Los beneficios del Sol, siempre a tu alcance" magicWord="beneficios" />
        <Paragraph customClass="mb-0">
          Genera tu propia energía y comienza a ahorrar de inmediato,
          {' '}
          tenemos la solución que necesitas.
        </Paragraph>
        <a href="/">
          <ButtonMain btnText="Ponte en contacto" />
        </a>
      </div>
      <div className="clientsBar flex items-center justify-evenly bg-ise-gray-10 py-6">
        <img src={toyotaIcon} alt="TOYOTA" className="h-10" />
        <img src={bbvaIcon} alt="BBVA" className="h-10" />
        <img src={pemexIcon} alt="PEMEX" className="h-10" />
      </div>
      <div className="solutionsSection bg-ise-gray-20 flex flex-col items-center">
        <Titles title="Nuestras soluciones" magicWord="soluciones" />
        <Paragraph customClass="mb-0">
          Tecnologías rentables que te permitirán generar ahorros con el poder del Sol.
        </Paragraph>
        <img src={electricaImgMobile} alt="Energía eléctrica" className="w-[90%] rounded-lg" />
        <p className="text-2xl font-bold text-center py-1 w-[90%]">
          Energía
          <span className="text-ise-orange"> eléctrica</span>
        </p>
        <Paragraph customClass="mb-0">
          Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica.
        </Paragraph>
        <img src={termicaImgMobile} alt="Energía eléctrica" className="w-[90%] rounded-lg" />
        <p className="text-2xl font-bold text-center py-1 w-[90%]">
          Energía
          <span className="text-ise-orange"> térmica</span>
        </p>
        <Paragraph customClass="mb-0">
          Instala un sistema de calentamiento solar que te ayude a disminuir tu consumo de gas.
        </Paragraph>
        <a href="/">
          <ButtonMain btnText="Conoce más" />
        </a>
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
        <Titles title="Nuestros servicios" magicWord="servicios" />
        <Paragraph customClass="mb-0">
          Servicios diseñados para ayudarte a potenciar tu proyecto, a la medida de tus necesidades.
        </Paragraph>
        <ServiceCard title="Financiamiento" icon={financiamientoIcon} customClass="mb-1">
          Llevamos hasta ti diferentes esquemas y fuentes de financiamiento,
          {' '}
          de acuerdo con las necesidades y requerimientos de tu proyecto.
        </ServiceCard>
        <ServiceCard title="Ingeniería, suministro y construcción" icon={epcIcon} customClass="mb-1">
          Desarrollamos proyectos llave en mano, incluyendo ingeniería, procura y construcción,
          {' '}
          con base en energías renovables, especializándonos en energía solar para generación de
          {' '}
          electricidad y calentamiento de fluidos.
        </ServiceCard>
        <ServiceCard title="Ingeniería y asesoría" icon={asesoriaIcon} customClass="mb-1">
          Nuestra experiencia en los aspectos técnicos y regulatorios nos permiten desarrollar
          {' '}
          correctamente proyectos de energía renovable de mediana y gran escala, garantizándote
          {' '}
          un diseño óptimo.
        </ServiceCard>
      </div>
      <div className="projectsSection bg-ise-gray-20 flex flex-col items-center">
        <Titles title="Proyectos recientes" magicWord="Proyectos" />
        <Paragraph customClass="mb-0">
          Soluciones inteligentes, siempre a la medidas de las necesidades de nuestros clientes.
        </Paragraph>
        <div className="mb-4 w-[90%] text-center">
          Esta es la sección del carrusel a la derecha
        </div>
        <div className="mb-10 w-[90%] text-center">
          Esta es la sección del carrusel a la izquierda
        </div>
      </div>
      <div className="xpSection bg-ise-gray-10 flex flex-col items-center">
        <Titles title="Nuestra experiencia" magicWord="experiencia" />
        <Paragraph customClass="mb-0">
          Somos un equipo de profesionales altamente capacitados para atender los
          {' '}
          proyectos más exigentes.
        </Paragraph>
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
        <a href="/">
          <ButtonMain btnText="Acerca de nosotros" />
        </a>
      </div>
      <div className="faqSection bg-ise-gray-20 flex flex-col items-center">
        <Titles title="Preguntas frecuentes" magicWord="frecuentes" />
        <Paragraph customClass="mb-0">
          Resuelve tus dudas acerca del funcionamiento de los sistemas solares,
          {' '}
          te compartimos las más frecuentes a continuación.
        </Paragraph>
        <div className="faqElectrica flex flex-col items-center">
          <p className="text-2xl font-bold text-center mt-4 mb-2">
            Energía
            <span className="text-ise-orange"> eléctrica</span>
          </p>
          <div className="faqItem bg-ise-gray-50 w-[90%] rounded-full py-1 px-2 mb-3">
            <div className="itemTitle flex justify-between items-center">
              <p className="font-bold">¿Los sistemas solares usan baterías?</p>
              <img src={arrowOpen} alt="arrow" className="h-3" />
            </div>
          </div>
          <div className="faqItem bg-ise-orange text-ise-white w-[90%] rounded-lg py-1 px-2 mb-3">
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
          <div className="faqItem bg-ise-gray-50 w-[90%] rounded-full py-1 px-2 mb-3">
            <div className="itemTitle flex justify-between items-center">
              <p className="font-bold">¿Los sistemas térmicos funcionan?</p>
              <img src={arrowOpen} alt="arrow" className="h-3" />
            </div>
          </div>
          <div className="faqItem bg-ise-orange text-ise-white w-[90%] rounded-lg py-1 px-2 mb-10">
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
        <p className="text-3xl font-bold text-center pt-8 w-[90%]">
          ¿Aún tienes alguna pregunta?
        </p>
        <p className="text-xl font-bold text-center pt-2 w-[90%]">
          ¡Ponte en contacto con nosotros!
        </p>
        <p className="font-Hero text-xs text-justify mt-2 mb-2 w-[90%]">
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
      <div className="footer bg-ise-gray-20 py-5 px-2 flex flex-col items-stretch divide-y-2 divide-gray-400">
        <div className="flex items-center justify-between mb-1">
          <a href="/">
            <img src={logoInSitu} alt="In Situ Energía" className="h-12" />
          </a>
          <div className="flex flex-col items-end gap-2">
            <div className="social flex gap-3">
              <a href="https://www.linkedin.com/company/insituenergia" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn icon" className="h-7" />
              </a>
              <a href="https://twitter.com/InSituEnergia" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="Twitter icon" className="h-7" />
              </a>
              <a href="https://www.facebook.com/insituenergia" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook icon" className="h-7" />
              </a>
              <a href="https://www.instagram.com/insituenergia/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram icon" className="h-7" />
              </a>
            </div>
            <div className="router flex gap-2 text-sm">
              <a href="/" className="hover:text-ise-orange">Soluciones</a>
              <a href="/" className="hover:text-ise-orange">Nosotros</a>
              <a href="/" className="hover:text-ise-orange">Proyectos</a>
              <a href="/" className="hover:text-ise-orange">FAQ</a>
            </div>
          </div>
        </div>
        <div className="py-1">
          <div className="router flex gap-2 text-sm items-center justify-center">
            <a href="/" className="hover:text-ise-orange">Política de privacidad</a>
            <a href="/" className="hover:text-ise-orange">Términos y condiciones</a>
            <a href="/" className="hover:text-ise-orange">Log In</a>
          </div>
          <div className="copyright py-2 text-sm flex justify-center">
            <p>© Todos los derechos reservados. In Situ Energía, 2022.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
