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
});
