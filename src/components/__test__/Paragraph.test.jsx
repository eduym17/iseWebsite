/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paragraph from '../Paragraph';
import { mockParagraph } from './__mockData__';

const CLASS_DEFAULT = 'font-Hero text-sm text-center w-[90%] md:w-full lg:text-base';
const TEXT_ONE = 'Genera tu propia energía y comienza a ahorrar de inmediato, tenemos la solución que necesitas.';
const CLASS_ONE = `${CLASS_DEFAULT} mt-3 md:text-left md:w-5/6 lg:w-4/5`;
const TEXT_TWO = 'Soluciones inteligentes, siempre a la medida de las necesidades de nuestros clientes.';
const CLASS_TWO = `${CLASS_DEFAULT} mt-1 lg:mt-2`;
const TEXT_THREE = 'Fundada en el año 2017, y con más de diez años de experiencia dentro de la industria de las energías renovables, In Situ Energía se ha convertido en la empresa proveedora de servicios de Ingeniería, Procura y Construcción (EPC, por sus siglas en inglés), referente del rubro. Desarrollamos con profesionalismo cada uno de nuestros proyectos, apoyados en nuestras capacidades técnicas, regulatorias y financieras, a través de las cuales somos capaces de generar proyectos de alta calidad.';
const CLASS_THREE = `${CLASS_DEFAULT} mt-3 mb-6 whitespace-pre-line text-justify md:w-full md:mt-4`;
const CLASS_FOUR = `${CLASS_DEFAULT} mt-2 whitespace-pre-line lg:mb-4`;
const TEXT_FOUR = 'Lo sentimos pero no pudimos encontrar lo que buscabas. ¡Vuelve a intentar desde nuestra página de inicio!';
const CLASS_FIVE = `${CLASS_DEFAULT} mt-4 text-justify whitespace-pre-line lg:mb-4`;
const TEXT_FIVE = 'De conformidad con la Ley Federal de Protección de Datos personales en Posesión de los Particulares (en adelante la &quot;Ley&quot;), vigente en los Estados Unidos Mexicanos, hacemos de su conocimiento que In Situ Energía, con domicilio en Insurgentes Sur 615, Col. Nápoles, Benito Juárez, CDMX, C.P. 03810, podrá recolectar y usar información proporcionada por usted (en adelante El Usuario) en este sitio web.';
const CLASS_SIX = `${CLASS_DEFAULT} mt-3 whitespace-pre-line text-justify md:w-full md:mt-4`;
const TEXT_SIX = 'Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica, reduciendo costos internos. Existen diversos esquemas de conexión eléctrica de acuerdo con la normativa emitida por la Comisión Reguladora de Energía (CRE). A continuación, una breve descripción de los más utilizados y convenientes para ti y tu negocio:';

describe('Paragraph component', () => {
  it('Should render using default values', () => {
    const paragraph = render(
      <Paragraph />,
    );
    expect(paragraph).toBeDefined();
    const paragraphDefaultText = screen.getByText('Texto aquí');
    expect(paragraphDefaultText).toBeInTheDocument();
    expect(paragraphDefaultText).toHaveClass(CLASS_DEFAULT);
  });

  it('Should render text one on home view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassOne}>
        {mockParagraph.mockChildrenOne}
      </Paragraph>,
    );
    const paragraphExampleOne = screen.getByText(TEXT_ONE);
    expect(paragraphExampleOne).toBeInTheDocument();
    expect(paragraphExampleOne).toHaveClass(CLASS_ONE);
  });

  it('Should render text two on home view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassTwo}>
        {mockParagraph.mockChildrenTwo}
      </Paragraph>,
    );
    const paragraphExampleTwo = screen.getByText(TEXT_TWO);
    expect(paragraphExampleTwo).toBeInTheDocument();
    expect(paragraphExampleTwo).toHaveClass(CLASS_TWO);
  });

  it('Should render text three on about us view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassThree}>
        {mockParagraph.mockChildrenThree}
      </Paragraph>,
    );
    const paragraphExampleThree = screen.getByText(TEXT_THREE);
    expect(paragraphExampleThree).toBeInTheDocument();
    expect(paragraphExampleThree).toHaveClass(CLASS_THREE);
  });

  it('Should render text four on not found view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassFour}>
        {mockParagraph.mockChildrenFour}
      </Paragraph>,
    );
    const paragraphExampleFour = screen.getByText(TEXT_FOUR);
    expect(paragraphExampleFour).toBeInTheDocument();
    expect(paragraphExampleFour).toHaveClass(CLASS_FOUR);
  });

  it('Should render text five on privacy policy view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassFive}>
        {mockParagraph.mockChildrenFive}
      </Paragraph>,
    );
    const paragraphExampleFive = screen.getByText(TEXT_FIVE);
    expect(paragraphExampleFive).toBeInTheDocument();
    expect(paragraphExampleFive).toHaveClass(CLASS_FIVE);
  });

  it('Should render text five on solutions view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassSix}>
        {mockParagraph.mockChildrenSix}
      </Paragraph>,
    );
    const paragraphExampleSix = screen.getByText(TEXT_SIX);
    expect(paragraphExampleSix).toBeInTheDocument();
    expect(paragraphExampleSix).toHaveClass(CLASS_SIX);
  });
});
