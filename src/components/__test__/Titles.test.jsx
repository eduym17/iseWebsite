/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Titles from '../Titles';
import { mockTitles } from './__mockData__';

const CLASS_MAIN = 'text-3xl font-bold text-center w-[90%] lg:text-5xl';
const CLASS_CUSTOM = `${CLASS_MAIN} mt-6 lg:mt-12`;
const MAGIC_WORD_CLASS = 'text-ise-orange';

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

  it('Should change magic word class one', () => {
    render(
      <Titles title={mockTitles.mockTitleOne} magicWord={mockTitles.mockMagicWordOne} />,
    );
    const magicWordOne = screen.getByText(/soluciones/i);
    expect(magicWordOne).toBeInTheDocument();
    expect(magicWordOne).toHaveClass(MAGIC_WORD_CLASS);
  });

  it('Should change magic word class two', () => {
    render(
      <Titles title={mockTitles.mockTitleTwo} magicWord={mockTitles.mockMagicWordTwo} />,
    );
    const magicWordTwo = screen.getByText(/servicios/i);
    expect(magicWordTwo).toBeInTheDocument();
    expect(magicWordTwo).toHaveClass(MAGIC_WORD_CLASS);
  });

  it('Should change custom classes', () => {
    render(
      <Titles
        title={mockTitles.mockTitleOne}
        customClass={mockTitles.mockCustomClass}
      />,
    );
    const titleOne = screen.getByText(/soluciones/i).parentElement;
    expect(titleOne).toBeInTheDocument();
    expect(titleOne).toHaveClass(CLASS_CUSTOM);
  });
});
