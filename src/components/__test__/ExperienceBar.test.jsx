/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceBar from '../ExperienceBar';
import { mockExperienceBar } from './__mockData__';

const CLASS = 'xpresumeSection selection:bg-ise-white selection:text-ise-orange bg-sungradient-y text-ise-white flex flex-wrap gap-x-4 justify-center items-center py-3 lg:py-6 lg:gap-12';

describe('Experience Bar component', () => {
  it('Rendering using default values', () => {
    const experienceBar = render(
      <ExperienceBar />,
    );
    const experienceBarDefault = screen.getByText('+30');
    expect(experienceBar).toBeDefined();
    expect(experienceBarDefault).toBeInTheDocument();
  });

  it('Should render', () => {
    const { baseElement } = render(
      <ExperienceBar customClass={mockExperienceBar.mockCustomClass} />,
    );
    const parentEl = screen.getByText('+30').parentElement.parentElement;
    expect(baseElement).toBeDefined();
    expect(parentEl).toHaveClass(CLASS);
  });
});
