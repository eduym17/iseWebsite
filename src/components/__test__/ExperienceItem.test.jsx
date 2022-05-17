/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceItem from '../ExperienceItem';

describe('Experience Item component', () => {
  it('Render using default values', () => {
    const experienceItem = render(
      <ExperienceItem />,
    );
    const experienceItemDefault = screen.getByAltText('pie de imagen');
    expect(experienceItem).toBeDefined();
    expect(experienceItemDefault).toBeInTheDocument();
  });
});
