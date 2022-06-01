/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechnicalScheme from '../TechnicalScheme';

jest.mock('../icons.js', () => ({
  // epcIcon: '',
}));

const CLASS_DEFAULT_TITLE = 'flex flex-col items-center justify-center w-full md:w-2/5';
const CLASS_DEFAULT_SUBTITLE = 'leading-none text-sm font-semibold text-center md:w-full md:text-left lg:text-base';
const CLASS_DEFAULT_CHILDREN = 'md:whitespace-pre-line font-Hero text-sm text-justify w-[90%] mt-2 md:w-full lg:text-base';

describe('Technical Scheme component', () => {
  it('Should render using default values', () => {
    const technicalScheme = render(
      <TechnicalScheme />,
    );
    const defaultTitle = screen.getByText(/Título/i);
    const defaultSubtitle = screen.getByText(/Pie/i);
    const defaultChildren = screen.getByText(/Descripción/i);
    expect(technicalScheme).toBeDefined();
    expect(defaultTitle).toBeInTheDocument();
    expect(defaultTitle.parentElement.parentElement).toHaveClass(CLASS_DEFAULT_TITLE);
    expect(defaultSubtitle).toBeInTheDocument(CLASS_DEFAULT_SUBTITLE);
    expect(defaultChildren).toBeInTheDocument(CLASS_DEFAULT_CHILDREN);
  });
});
