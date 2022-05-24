/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Subtitles from '../Subtitles';
import { mockSubtitles } from './__mockData__';

const CLASS_MAIN = 'text-2xl font-bold text-center w-[90%] lg:text-3xl';

describe('Subtitles component', () => {
  it('Should render using default values', () => {
    const subtitle = render(
      <Subtitles />,
    );
    const subtitleDefault = screen.getByText(/Subtítulo/i);
    const parentEl = screen.getByText(/Subtítulo/i).parentElement;
    expect(subtitle).toBeDefined();
    expect(subtitleDefault).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });

  it('Should render using real values one', () => {
    render(
      <Subtitles title={mockSubtitles.mockSubtitleOne} />,
    );
    const subtitleOne = screen.getByText(/eléctrica/i);
    const parentEl = screen.getByText(/eléctrica/i).parentElement;
    expect(subtitleOne).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });

  it('Should render using real values two', () => {
    render(
      <Subtitles title={mockSubtitles.mockSubtitleTwo} />,
    );
    const subtitleTwo = screen.getByText(/térmica/i);
    const parentEl = screen.getByText(/térmica/i).parentElement;
    expect(subtitleTwo).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });
});
