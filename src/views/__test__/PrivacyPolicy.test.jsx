/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrivacyPolicy from '../PrivacyPolicy';

jest.mock('../../components/icons.js', () => ({
  // epcIcon: '',
}));

jest.mock('../../components/images.js', () => ({
}));

const CLASS_INICIO_ONE = 'hidden';
const CLASS_INICIO_TWO = 'hidden font-semibold text-lg lg:flex items-center gap-12';
const CLASS_PRIVACY = 'hover:text-ise-orange';
const CLASS_TWITTER = 'h-7';
const PARAGRAPH_TEXT = 'De conformidad con la Ley Federal de Protección de Datos personales en Posesión de los Particulares (en adelante la "Ley"), vigente en los Estados Unidos Mexicanos, hacemos de su conocimiento que In Situ Energía, con domicilio en Insurgentes Sur 615, Col. Nápoles, Benito Juárez, CDMX, C.P. 03810, podrá recolectar y usar información proporcionada por usted (en adelante "El Usuario") en este sitio web.';
const SENTENCE_ONE = 'In Situ Energía recopila y usa únicamente la información proporcionada en alguno de los formularios contenidos en este sitio web por parte El Usuario, con alguno de los siguientes propósitos: a. Fines de identificación, b. Fines estadísticos, c. Contacto vía correo electrónico o vía telefónica por parte de alguno de las o los integrantes de nuestro personal. Lo anterior con el fin de responder a la o las solicitides enviadas, igualmente para fines de administración interna, seguimiento y análisis estadístico. Los datos recolectados son protegidos por los principios marcados en el artículo 6 de la Ley: ilicitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad.';
const SENTENCE_LAST = 'Este aviso de privacidad cumple con los requisitos marcados por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares en sus artículos 15 y 16.';

describe('Privacy Policy component', () => {
  it('Should render', () => {
    const privacyPolicy = render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>,
    );
    expect(privacyPolicy).toBeDefined();
  });

  it('Should render header and footer', () => {
    render(
      <BrowserRouter>
        <PrivacyPolicy />
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

  it('Should render title', () => {
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>,
    );
    const titleText = screen.getAllByText(/privacidad/i)[0];
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveClass('text-ise-orange');
  });

  it('Should render paragraph', () => {
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>,
    );
    const paragraphText = screen.getByText(PARAGRAPH_TEXT);
    expect(paragraphText).toBeInTheDocument();
  });

  it('Should render sentences', () => {
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>,
    );
    const titleOne = screen.getByText(/1.1/i);
    const childrenOne = screen.getByText(/1.1/i).parentElement.nextSibling;
    const titleLast = screen.getByText(/1.6/i);
    const childrenLast = screen.getByText(/1.6/i).parentElement.nextSibling;
    expect(titleOne).toBeInTheDocument();
    expect(childrenOne).toHaveTextContent(SENTENCE_ONE);
    expect(titleLast).toBeInTheDocument();
    expect(childrenLast).toHaveTextContent(SENTENCE_LAST);
  });
});
