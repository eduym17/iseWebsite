/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Titles from '../Titles';
import { mockTitles } from './__mockData__';

const CLASS_MAIN = 'text-3xl font-bold text-center w-[90%] lg:text-5xl';

describe('Titles component', () => {
  it('Should render using default values', () => {
    const title = render(
      <Titles />,
    );
    const titleDefaultOne = screen.getByText(/Título/i);
    const titleDefaultTwo = screen.getByText(/sección/i);
    expect(title).toBeDefined();
    expect(titleDefaultOne).toBeInTheDocument();
    expect(titleDefaultTwo).toBeInTheDocument();
  });

  it('Should render using real values one', () => {
    render(
      <Titles title={mockTitles.mockTitleOne} />,
    );
    const titleOne = screen.getByText(/Nuestras/i);
    const parentEl = screen.getByText(/Nuestras/i).parentElement;
    expect(titleOne).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });

  it('Should render using real values two', () => {
    render(
      <Titles title={mockTitles.mockTitleTwo} />,
    );
    const titleTwo = screen.getByText(/Nuestros/i);
    const parentEl = screen.getByText(/Nuestros/i).parentElement;
    expect(titleTwo).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });
});
