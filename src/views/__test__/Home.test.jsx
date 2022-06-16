/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

jest.mock('../../components/icons.js', () => ({
  // epcIcon: '',
}));

jest.mock('../../components/images.js', () => ({
}));

const CLASS_INICIO_ONE = 'hidden';
const CLASS_INICIO_TWO = 'hidden font-semibold text-lg lg:flex items-center gap-12';
const CLASS_PRIVACY = 'hover:text-ise-orange';
const CLASS_TWITTER = 'h-7';
const PARAGRAPH_ONE = 'Genera tu propia energía y comienza a ahorrar de inmediato, tenemos la solución que necesitas.';
const PARAGRAPH_TWO = 'Tecnologías rentables que te permitirán generar ahorros con el poder del Sol.';
const PARAGRAPH_THREE = 'Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica.';
const PARAGRAPH_FOUR = 'Instala un sistema de calentamiento solar que te ayude a disminuir tu consumo de gas.';
const PARAGRAPH_FIVE = 'Servicios diseñados para ayudarte a potenciar tu proyecto, a la medida de tus necesidades.';
const PARAGRAPH_SIX = 'Soluciones inteligentes, siempre a la medida de las necesidades de nuestros clientes.';
const PARAGRAPH_SEVEN = 'Somos un equipo de profesionales altamente capacitados para atender los proyectos más exigentes.';
const PARAGRAPH_EIGHT = 'Resuelve tus dudas acerca del funcionamiento de los sistemas solares, te compartimos las más frecuentes a continuación.';
const PARAGRAPH_NINE = 'Acércate a nosotros para poder ofrecerte una solución a la medida de tus necesidades, escucharemos tus opiniones y buscaremos optimizar tus proyectos.';
const CLASS_EXPERIENCE_ONE = 'leading-none font-Hero text-sm lg:text-lg lg:leading-none';
const CLASS_EXPERIENCE_TWO = 'text-4xl font-bold lg:text-6xl';
const CLASS_CLIENTBAR_IMG = 'h-10 md:h-12 lg:h-14';
const TEXT_SERVICECARD_ONE = 'Llevamos hasta ti diferentes esquemas y fuentes de financiamiento, de acuerdo con las necesidades y requerimientos de tu proyecto.';
const TEXT_SERVICECARD_TWO = 'Desarrollamos proyectos llave en mano, incluyendo ingeniería, procura y construcción, con base en energías renovables, especializándonos en energía solar para generación de electricidad y calentamiento de fluidos.';
const TEXT_SERVICECARD_THREE = 'Nuestra experiencia en los aspectos técnicos y regulatorios nos permiten desarrollar correctamente proyectos de energía renovable de mediana y gran escala, garantizándote un diseño óptimo.';
const FAQ_TEXT_ONE = 'Los sistemas interconectados a la red no requieren de baterías. Sólo los sistemas que están aislados de la red las requieren.';
const FAQ_TEXT_LAST = 'Con un sistema de este tipo puedes calentar agua para uso doméstico en regaderas o lavandería, también es posible utilizarlo en industrias o comercios para calentamiento de agua en hoteles, hospitales, restaurantes, lavanderías, procesos industriales y para albercas, entre muchos otros usos.';
const CLASS_INPUTS = 'font-Hero text-sm text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white lg:text-base';
const CLASS_SUBMIT_BUTTON = 'font-bold py-1.5 px-6 bg-ise-white text-ise-orange rounded-full self-end mt-2';

describe('Home view', () => {
  it('Should render', () => {
    const homeView = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(homeView).toBeDefined();
  });

  it('Should render header and footer', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const inicioHeaderTextOne = screen.getAllByText('Soluciones')[0];
    const inicioHeaderTextTwo = screen.getAllByText('Soluciones')[1];
    const privacyPolicyFooter = screen.getByText('Política de privacidad');
    const twitterIconFooter = screen.getByAltText('Twitter icon');
    expect(inicioHeaderTextOne).toBeInTheDocument();
    expect(inicioHeaderTextOne.parentElement).toHaveClass(CLASS_INICIO_ONE);
    expect(inicioHeaderTextTwo).toBeInTheDocument();
    expect(inicioHeaderTextTwo.parentElement).toHaveClass(CLASS_INICIO_TWO);
    expect(privacyPolicyFooter).toBeInTheDocument();
    expect(privacyPolicyFooter).toHaveClass(CLASS_PRIVACY);
    expect(twitterIconFooter).toBeInTheDocument();
    expect(twitterIconFooter).toHaveClass(CLASS_TWITTER);
  });

  it('Should render buttons', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const buttonAnchorOne = screen.getByText('Ponte en contacto');
    const buttonLinkOne = screen.getByText('Conoce más');
    const buttonLinkTwo = screen.getByText('Acerca de nosotros');
    expect(buttonAnchorOne).toBeInTheDocument();
    expect(buttonLinkOne).toBeInTheDocument();
    expect(buttonLinkTwo).toBeInTheDocument();
  });

  it('Should render titles and subtitles', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const titles6xl = screen.getByText(/alcance/i);
    const titlesOne = screen.getByText(/Nuestras/i);
    const titlesTwo = screen.getAllByText(/servicios/i)[0];
    const titlesThree = screen.getByText(/recientes/i);
    const titlesFour = screen.getAllByText(/experiencia/i)[1];
    const titlesFive = screen.getByText(/Preguntas/i);
    const titlesNegative = screen.getByText(/alguna/i);
    const subtitlesOne = screen.getAllByText(/eléctrica/i)[2];
    const subtitlesTwo = screen.getAllByText(/térmica/i)[0];
    const subtitlesThree = screen.getByText(/nosotros!/i);
    expect(titles6xl).toBeInTheDocument();
    expect(titlesOne).toBeInTheDocument();
    expect(titlesTwo).toBeInTheDocument();
    expect(titlesTwo).toHaveClass('text-ise-orange');
    expect(titlesThree).toBeInTheDocument();
    expect(titlesFour).toBeInTheDocument();
    expect(titlesFour).toHaveClass('text-ise-orange');
    expect(titlesFive).toBeInTheDocument();
    expect(titlesNegative).toBeInTheDocument();
    expect(subtitlesOne).toBeInTheDocument();
    expect(subtitlesOne).toHaveClass('text-ise-orange');
    expect(subtitlesTwo).toBeInTheDocument();
    expect(subtitlesTwo).toHaveClass('text-ise-orange');
    expect(subtitlesThree).toBeInTheDocument();
  });

  it('Should render paragraphs', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const paragraphOne = screen.getByText(PARAGRAPH_ONE);
    const paragraphTwo = screen.getByText(PARAGRAPH_TWO);
    const paragraphThree = screen.getByText(PARAGRAPH_THREE);
    const paragraphFour = screen.getByText(PARAGRAPH_FOUR);
    const paragraphFive = screen.getByText(PARAGRAPH_FIVE);
    const paragraphSix = screen.getByText(PARAGRAPH_SIX);
    const paragraphSeven = screen.getByText(PARAGRAPH_SEVEN);
    const paragraphEight = screen.getByText(PARAGRAPH_EIGHT);
    const paragraphNine = screen.getByText(PARAGRAPH_NINE);
    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
    expect(paragraphThree).toBeInTheDocument();
    expect(paragraphFour).toBeInTheDocument();
    expect(paragraphFive).toBeInTheDocument();
    expect(paragraphSix).toBeInTheDocument();
    expect(paragraphSeven).toBeInTheDocument();
    expect(paragraphEight).toBeInTheDocument();
    expect(paragraphNine).toBeInTheDocument();
  });

  it('Should render experience bar', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const clientsText = screen.getByText(/satisfechos/i);
    const plus30Text = screen.getByText('+30');
    const megawattsText = screen.getByText(/MegaWatts/i);
    expect(clientsText).toBeInTheDocument();
    expect(clientsText).toHaveClass(CLASS_EXPERIENCE_ONE);
    expect(plus30Text).toBeInTheDocument();
    expect(plus30Text).toHaveClass(CLASS_EXPERIENCE_TWO);
    expect(megawattsText).toBeInTheDocument();
    expect(megawattsText).toHaveClass(CLASS_EXPERIENCE_ONE);
  });

  it('Should render clients bar', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const toyotaImg = screen.getByAltText('Toyota');
    const roblesImg = screen.getAllByAltText('Los Robles')[0];
    const pemexImg = screen.getByAltText('PEMEX');
    expect(toyotaImg).toBeInTheDocument();
    expect(toyotaImg).toHaveClass(CLASS_CLIENTBAR_IMG);
    expect(roblesImg).toBeInTheDocument();
    expect(roblesImg).toHaveClass(CLASS_CLIENTBAR_IMG);
    expect(pemexImg).toBeInTheDocument();
    expect(pemexImg).toHaveClass(CLASS_CLIENTBAR_IMG);
  });

  it('Should render project items', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const projectItemOne = screen.getByText(/84 kW/i);
    const projectItemTwo = screen.getByText(/499 kW/i);
    const projectItemThree = screen.getByText(/90 kW/i);
    expect(projectItemOne).toBeInTheDocument();
    expect(projectItemTwo).toBeInTheDocument();
    expect(projectItemThree).toBeInTheDocument();
  });

  it('Should render experience items', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const expItemOne = screen.getAllByText(/experiencia/i)[2];
    const expItemTwo = screen.getByText('ejecutados');
    const expItemThree = screen.getByText('instalados');
    expect(expItemOne).toBeInTheDocument();
    expect(expItemOne.previousSibling.previousSibling).toHaveClass('text-ise-orange');
    expect(expItemTwo).toBeInTheDocument();
    expect(expItemTwo.previousSibling).toHaveClass('text-ise-orange');
    expect(expItemThree).toBeInTheDocument();
    expect(expItemThree.previousSibling).toHaveClass('text-ise-orange');
  });

  it('Should render service card', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const serviceCardOne = screen.getByText('Financiamiento');
    const serviceCardTwo = screen.getByText('Ingeniería, suministro y construcción');
    const serviceCardThree = screen.getByText('Ingeniería y asesoría');
    expect(serviceCardOne).toBeInTheDocument();
    expect(serviceCardOne.parentElement.nextSibling).toHaveTextContent(TEXT_SERVICECARD_ONE);
    expect(serviceCardTwo).toBeInTheDocument();
    expect(serviceCardTwo.parentElement.nextSibling).toHaveTextContent(TEXT_SERVICECARD_TWO);
    expect(serviceCardThree).toBeInTheDocument();
    expect(serviceCardThree.parentElement.nextSibling).toHaveTextContent(TEXT_SERVICECARD_THREE);
  });

  it('Should render faqs', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const faqOne = screen.getByText('¿Los sistemas solares usan baterías?');
    const faqLast = screen.getByText('¿En dónde lo puedo usar?');
    expect(faqOne).toBeInTheDocument();
    expect(faqOne.parentElement.nextSibling).toHaveTextContent(FAQ_TEXT_ONE);
    expect(faqLast).toBeInTheDocument();
    expect(faqLast.parentElement.nextSibling).toHaveTextContent(FAQ_TEXT_LAST);
  });

  it('Should render contact form', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const inputName = screen.getByPlaceholderText('Tu nombre*');
    const inputText = screen.getByPlaceholderText('¡Haz una pregunta o comentario!');
    const submitButton = screen.getByText('Enviar');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveClass(CLASS_INPUTS);
    expect(inputText).toBeInTheDocument();
    expect(inputText).toHaveClass(CLASS_INPUTS);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveClass(CLASS_SUBMIT_BUTTON);
  });
});
