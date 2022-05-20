/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paragraph from '../Paragraph';
import { mockParagraph } from './__mockData__';

const CLASS_DEFAULT = 'font-Hero text-sm text-center w-[90%] md:w-full lg:text-base';

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
});
