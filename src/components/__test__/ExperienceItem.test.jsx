/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceItem from '../ExperienceItem';
import { mockExperienceItem } from './__mockData__';

const CLASS = 'mt-6 md:mt-10 lg:mt-12';

describe('Experience Item component', () => {
  it('Render using default values', () => {
    const experienceItem = render(
      <ExperienceItem />,
    );
    const experienceItemDefault = screen.getByAltText('pie de imagen');
    expect(experienceItem).toBeDefined();
    expect(experienceItemDefault).toBeInTheDocument();
  });

  it('Should render', () => {
    const experienceItem = render(
      <ExperienceItem
        customClass={mockExperienceItem.mockCustomClass}
        text={mockExperienceItem.mockText}
        magicWord={mockExperienceItem.mockMagicWord}
        image={mockExperienceItem.mockImage}
      />,
    );
    const experienceItemMagicWord = screen.getByText('años');
    const parentEl = screen.getByText('años').parentElement.parentElement;
    expect(experienceItem).toBeDefined();
    expect(experienceItemMagicWord).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS);
  });
});
