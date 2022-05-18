/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Faqs from '../Faqs';
import { mockFaqs } from './__mockData__';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(),
}));

test('test ref', () => {
  useRef.mockReturnValue({
    current: { clientHeight: 100 },
  });
  // do assertions as normal
});

const CLASS_MAIN = 'cursor-default faqItem transition-all duration-500 w-[90%] py-2 px-2';

describe('Faqs component', () => {
  it('Should render using default values', () => {
    const faqs = render(
      <Faqs />,
    );
    const childrenDefault = screen.getByText('Respuesta aquí');
    const questionDefault = screen.getByText('Pregunta aquí');
    expect(faqs).toBeDefined();
    expect(childrenDefault).toBeInTheDocument();
    expect(questionDefault).toBeInTheDocument();
  });

  it('Should render', () => {
    const faqs = render(
      <Faqs question={mockFaqs.mockQuestion} customClass={mockFaqs.mockCustomClass}>
        {mockFaqs.mockChildren}
      </Faqs>,
    );
    const faqQuestion = screen.getByText('¿Los sistemas solares usan baterías?');
    const faqAnswer = screen.getByText('Los sistemas interconectados a la red no requieren de baterías. Sólo los sistemas que están aislados de la red las requieren.');
    const parentEl = screen.getByText('¿Los sistemas solares usan baterías?').parentElement.parentElement;
    expect(faqs).toBeDefined();
    expect(faqQuestion).toBeInTheDocument();
    expect(faqAnswer).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });

  it('Should expand and collapse', () => {
    const { baseElement } = render(
      <Faqs />,
    );
    const arrowButton = screen.getByText('Pregunta aquí').nextSibling;
    const arrowButtonFalse = screen.queryByTestId('arrowButton false');
    expect(arrowButtonFalse).toBeDefined();
    expect(screen.findByTestId('arrowButton false')).toBeTruthy();
    fireEvent.click(arrowButton);
    expect(screen.findByTestId('arrowButton true')).toBeTruthy();
  });
});
