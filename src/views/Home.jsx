import React from 'react';
import { faqsFV, faqsFT } from '../components/texts/faqs';
import { epcIcon, financiamientoIcon, asesoriaIcon } from '../components/icons';
import {
  LandingImg, electricDeskImg, electricMobImg, thermalDeskImg, thermalMobImg,
  xp15, xp30, xp85,
} from '../components/images';
import {
  ButtonAnchor, Paragraph, ServiceCard, Titles, Titles6xl, TitlesNegative, Subtitles, Faqs,
  ExperienceBar, ExperienceItem, ClientsBar, ContactForm, Footer, Header, ButtonLink, ScrollToTop,
} from '../components';

function Home() {
  return (
    <div className="text-ise-gray-30 font-Cabin">
      <ScrollToTop />
      <Header />
      <div id="landingPage" className="landingPage bg-ise-gray-10 containerFull">
        <div className="containerContent md:flex-row-reverse md:justify-center md:py-8 md:px-7">
          <img src={LandingImg} alt="sistema fotovoltaico" className="w-4/6 max-w-xs lg:max-w-xl" />
          <div className="flex flex-col items-center md:items-start lg:w-1/2 md:w-1/2">
            <Titles6xl title="Los beneficios del Sol, siempre a tu alcance" magicWord="beneficios" customClass="mt-5 md:text-left lg:w-full" />
            <Paragraph customClass="mt-3 md:text-left md:w-5/6 lg:w-4/5">
              Genera tu propia energía y comienza a ahorrar de inmediato,
              {' '}
              tenemos la solución que necesitas.
            </Paragraph>
            <ButtonAnchor href="/#contacto" customClass="my-5">Ponte en contacto</ButtonAnchor>
          </div>
        </div>
        <ClientsBar customClass="py-5 lg:py-8" />
      </div>
      <div className="solutionsSection bg-ise-gray-20 containerFull">
        <div className="containerContent">
          <Titles title="Nuestras soluciones" magicWord="soluciones" customClass="mt-6 lg:mt-12" />
          <Paragraph customClass="mt-1 lg:mt-2">
            Tecnologías rentables que te permitirán generar ahorros con el poder del Sol.
          </Paragraph>
          <div className="flex flex-col items-start md:flex-row md:justify-center md:gap-2 lg:gap-8">
            <div className="flex flex-col items-center md:w-2/5">
              <img src={electricMobImg} alt="Energía eléctrica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-6" />
              <img src={electricDeskImg} alt="Energía eléctrica" className="hidden md:flex w-[90%] max-w-sm rounded-lg mt-6 lg:mt-10 lg:h-40 lg:w-fit" />
              <Subtitles title="Energía eléctrica" magicWord="eléctrica" customClass="mt-1 lg:mt-2" />
              <Paragraph customClass="mt-1 md:w-[90%]">
                Aprovecha techos, suelos y estacionamientos para generar tu
                {' '}
                propia energía eléctrica.
              </Paragraph>
            </div>
            <div className="flex flex-col items-center md:w-2/5">
              <img src={thermalMobImg} alt="Energía térmica" className="md:hidden w-[90%] max-w-sm rounded-lg mt-6" />
              <img src={thermalDeskImg} alt="Energía térmica" className="hidden md:flex w-[90%] max-w-sm rounded-lg mt-6 lg:mt-10 lg:h-40 lg:w-fit" />
              <Subtitles title="Energía térmica" magicWord="térmica" customClass="mt-1 lg:mt-2" />
              <Paragraph customClass="mt-1 md:w-[90%]">
                Instala un sistema de calentamiento solar que te ayude a disminuir tu
                {' '}
                consumo de gas.
              </Paragraph>
            </div>
          </div>
          <ButtonLink to="/soluciones" customClass="my-6 lg:mt-8 lg:mb-12">Conoce más</ButtonLink>
        </div>
      </div>
      <ExperienceBar customClass="" />
      <div className="servicesSection bg-ise-gray-10 containerFull">
        <div className="containerContent">
          <Titles title="Nuestros servicios" magicWord="servicios" customClass="mt-6 lg:mt-12" />
          <Paragraph customClass="mt-1 lg:mt-2">
            Servicios diseñados para ayudarte a potenciar tu proyecto,
            {' '}
            a la medida de tus necesidades.
          </Paragraph>
          <div className="flex flex-col items-center md:flex-row md:items-start md:gap-3 md:my-8 md:w-11/12 lg:w-5/6 lg:gap-6 lg:mt-10 lg:mb-12">
            <ServiceCard title="Financiamiento" icon={financiamientoIcon} customClass="mt-6">
              Llevamos hasta ti diferentes esquemas y fuentes de financiamiento,
              {' '}
              de acuerdo con las necesidades y requerimientos de tu proyecto.
            </ServiceCard>
            <ServiceCard title="Ingeniería, suministro y construcción" icon={epcIcon} customClass="mt-3">
              Desarrollamos proyectos llave en mano, incluyendo ingeniería, procura y construcción,
              {' '}
              con base en energías renovables, especializándonos en energía solar para generación de
              {' '}
              electricidad y calentamiento de fluidos.
            </ServiceCard>
            <ServiceCard title="Ingeniería y asesoría" icon={asesoriaIcon} customClass="mt-3 mb-8">
              Nuestra experiencia en los aspectos técnicos y regulatorios nos permiten desarrollar
              {' '}
              correctamente proyectos de energía renovable de mediana y gran escala, garantizándote
              {' '}
              un diseño óptimo.
            </ServiceCard>
          </div>
        </div>
      </div>
      <div id="proyectos" className="projectsSection bg-ise-gray-20 containerFull">
        <div className="containerContent">
          <Titles title="Proyectos recientes" magicWord="Proyectos" customClass="mt-6 lg:mt-12" />
          <Paragraph customClass="mt-1 lg:mt-2">
            Soluciones inteligentes, siempre a la medidas de las necesidades de nuestros clientes.
          </Paragraph>
          <div className="mt-6 w-[90%] text-center">
            Esta es la sección del carrusel a la derecha
          </div>
          <div className="my-6 w-[90%] text-center">
            Esta es la sección del carrusel a la izquierda
          </div>
        </div>
      </div>
      <div className="xpSection bg-ise-gray-10 containerFull">
        <div className="containerContent">
          <Titles title="Nuestra experiencia" magicWord="experiencia" customClass="mt-6 lg:mt-12" />
          <Paragraph customClass="mt-1 lg:mt-2">
            Somos un equipo de profesionales altamente capacitados para atender los
            {' '}
            proyectos más exigentes.
          </Paragraph>
          <div className="flex flex-col items-center md:flex-row md:w-11/12 lg:w-full lg:justify-center md:gap-3">
            <ExperienceItem text="años de experiencia" magicWord="años" image={xp15} customClass="mt-10" />
            <ExperienceItem text="proyectos ejecutados" magicWord="proyectos" image={xp30} customClass="mt-10" />
            <ExperienceItem text="MW instalados" magicWord="MW" image={xp85} customClass="mt-10" />
          </div>
          <ButtonLink to="/nosotros" customClass="mt-10 mb-8 lg:mb-12">Acerca de nosotros</ButtonLink>
        </div>
      </div>
      <div id="faqs" className="faqSection bg-ise-gray-20 containerFull">
        <div className="containerContent">
          <Titles title="Preguntas frecuentes" magicWord="frecuentes" customClass="mt-6 lg:mt-12" />
          <Paragraph customClass="mt-1 md:w-1/2 lg:mt-2">
            Resuelve tus dudas acerca del funcionamiento de los sistemas solares,
            {' '}
            te compartimos las más frecuentes a continuación.
          </Paragraph>
          <div className="faqs flex flex-col items-center mb-8 md:flex-row md:justify-center md:items-start lg:mb-12">
            <div className="faqElectrica flex flex-col items-center md:w-2/3 lg:w-2/5">
              <Subtitles title="Energía eléctrica" magicWord="eléctrica" customClass="mt-6 mb-1 lg:mt-10" />
              {
                faqsFV.map((faq) => (
                  <Faqs question={faq.question} key={faq.question} customClass="my-1">
                    {faq.answer}
                  </Faqs>
                ))
              }
            </div>
            <div className="faqTermica flex flex-col items-center md:w-2/3 lg:w-2/5">
              <Subtitles title="Energía térmica" magicWord="térmica" customClass="mt-6 mb-1 lg:mt-10" />
              {
                faqsFT.map((faq) => (
                  <Faqs question={faq.question} key={faq.question} customClass="my-1">
                    {faq.answer}
                  </Faqs>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div id="contacto" className="contactSection bg-ise-orange text-ise-white containerFull">
        <div className="containerContent md:flex-row md:items-start md:justify-center md:px-10 md:py-6">
          <div className="md:w-7/12 flex flex-col items-center md:items-start">
            <TitlesNegative title="¿Aún tienes alguna pregunta?" customClass="mt-6 md:text-left" />
            <Subtitles title="¡Ponte en contacto con nosotros!" customClass="mt-2 md:text-left" />
            <Paragraph customClass="text-justify mt-1 md:w-5/6 lg:w-4/5 lg:text-left">
              Acércate a nosotros para poder ofrecerte una solución a la medida de tus necesidades,
              {' '}
              escucharemos tus opiniones y buscaremos optimizar tus proyectos.
            </Paragraph>
          </div>
          <ContactForm customClass="my-8 md:w-5/12" />
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Home;
