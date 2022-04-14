import React from 'react';
import { faqsFV, faqsFT } from './components/texts/faqs';
import { epcIcon, financiamientoIcon, asesoriaIcon } from './components/icons';
import {
  landingImage, electricaImgMobile, termicaImgMobile, exp15, exp30, exp35,
} from './components/images';
import {
  ButtonMain, Paragraph, ServiceCard, Titles, Subtitles, Faqs, ExperienceBar, ExperienceItem,
  ClientsBar, ContactForm, Footer, Header,
} from './components';

function App() {
  return (
    <div className="text-ise-gray-30 h-screen font-Cabin">
      <Header />
      <div className="landingPage bg-ise-gray-10 flex flex-col items-center text-ise-gray-30">
        <img src={landingImage} alt="sistema fotovoltaico" className="mb-2 w-3/4 max-w-md" />
        <Titles title="Los beneficios del Sol, siempre a tu alcance" magicWord="beneficios" />
        <Paragraph customClass="mb-0">
          Genera tu propia energía y comienza a ahorrar de inmediato,
          {' '}
          tenemos la solución que necesitas.
        </Paragraph>
        <a href="/">
          <ButtonMain btnText="Ponte en contacto" customClass="my-0" />
        </a>
        <ClientsBar customClass="" />
      </div>
      <div className="solutionsSection bg-ise-gray-20 flex flex-col items-center">
        <Titles title="Nuestras soluciones" magicWord="soluciones" />
        <Paragraph customClass="mb-0">
          Tecnologías rentables que te permitirán generar ahorros con el poder del Sol.
        </Paragraph>
        <img src={electricaImgMobile} alt="Energía eléctrica" className="w-[90%] rounded-lg" />
        <Subtitles title="Energía eléctrica" magicWord="eléctrica" />
        <Paragraph customClass="mb-0">
          Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica.
        </Paragraph>
        <img src={termicaImgMobile} alt="Energía eléctrica" className="w-[90%] max-w-md rounded-lg" />
        <Subtitles title="Energía térmica" magicWord="térmica" />
        <Paragraph customClass="mb-0">
          Instala un sistema de calentamiento solar que te ayude a disminuir tu consumo de gas.
        </Paragraph>
        <a href="/">
          <ButtonMain btnText="Conoce más" />
        </a>
      </div>
      <ExperienceBar customClass="my-0" />
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
        <div className="flex flex-col items-center md:flex-row md:gap-28">
          {/* Fix width of images in Photoshop, same width for all */}
          <ExperienceItem text="años de experiencia" magicWord="años" image={exp15} customClass="my-0" />
          <ExperienceItem text="proyectos ejecutados" magicWord="proyectos" image={exp30} customClass="my-0" />
          <ExperienceItem text="MW instalados" magicWord="MW" image={exp35} customClass="my-0" />
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
        <div className="faqs flex flex-col items-center mb-10 md:flex-row md:items-start">
          <div className="faqElectrica flex flex-col items-center md:w-1/2">
            <Subtitles title="Energía eléctrica" magicWord="eléctrica" customClass="mt-0 mb-0" />
            {
              faqsFV.map((faq) => (
                <Faqs question={faq.question} customClass="my-1">
                  {faq.answer}
                </Faqs>
              ))
            }
          </div>
          <div className="faqTermica flex flex-col items-center md:w-1/2">
            <Subtitles title="Energía térmica" magicWord="térmica" customClass="mt-0 mb-0" />
            {
              faqsFT.map((faq) => (
                <Faqs question={faq.question} customClass="my-1">
                  {faq.answer}
                </Faqs>
              ))
            }
          </div>
        </div>
      </div>
      <div className="contactSection bg-ise-orange text-ise-white flex flex-col items-center">
        <Titles title="¿Aún tienes alguna pregunta?" customClass="text-white" />
        <Subtitles title="¡Ponte en contacto con nosotros!" customClass="text-white text-xl" />
        <Paragraph customClass="text-white text-justify">
          Acércate a nosotros para poder ofrecerte una solución a la medida de tus necesidades,
          {' '}
          escucharemos tus opiniones y buscaremos optimizar tus proyectos.
        </Paragraph>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
