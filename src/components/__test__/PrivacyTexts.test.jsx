/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrivacyTexts from '../PrivacyTexts';
import { mockPrivacyTexts } from './__mockData__';

const CLASS_MAIN = 'mt-2 text-justify whitespace-pre-line';
const TEXT_ONE = 'In Situ Energía recopila y usa únicamente la información proporcionada en alguno de los formularios contenidos en este sitio web por parte El Usuario, con alguno de los siguientes propósitos: a. Fines de identificación, b. Fines estadísticos, c. Contacto vía correo electrónico o vía telefónica por parte de alguno de las o los integrantes de nuestro personal. Lo anterior con el fin de responder a la o las solicitides enviadas, igualmente para fines de administración interna, seguimiento y análisis estadístico. Los datos recolectados son protegidos por los principios marcados en el artículo 6 de la Ley: ilicitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad.';
const CUSTOM_CLASS = 'mt-8';
const CUSTOM_CLASS_PARAGRAPH = 'mt-2';

jest.mock('../icons.js', () => ({
  // epcIcon: '',
}));

describe('Privacy Texts component', () => {
  it('Should render using default values', () => {
    const privacyText = render(
      <PrivacyTexts />,
    );
    expect(privacyText).toBeDefined();
    const privacyTextDefault = screen.getByText('Texto aquí');
    expect(privacyTextDefault).toBeInTheDocument();
    expect(privacyTextDefault).toHaveClass(CLASS_MAIN);
  });

  it('Should render title and children text', () => {
    render(
      <PrivacyTexts title={mockPrivacyTexts.mockTitle}>
        {mockPrivacyTexts.mockChildren}
      </PrivacyTexts>,
    );
    const privacyTextOne = screen.getByText(TEXT_ONE);
    const privacyTitleOne = screen.getByText(TEXT_ONE).previousSibling;
    expect(privacyTextOne).toBeInTheDocument();
    expect(privacyTitleOne).toBeInTheDocument();
  });
});
