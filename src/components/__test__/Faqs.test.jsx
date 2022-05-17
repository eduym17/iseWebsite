/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Faqs from '../Faqs';
import { mockFaqs } from './__mockData__';

describe('Faqs component', () => {
  it('Render using default values', () => {
    const faqs = render(
      <Faqs />,
    );
    const childrenDefault = screen.getByText('Respuesta aquí');
    const questionDefault = screen.getByText('Pregunta aquí');
    expect(faqs).toBeDefined();
    expect(childrenDefault).toBeInTheDocument();
    expect(questionDefault).toBeInTheDocument();
  });
});
