/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceBar from '../ExperienceBar';

describe('Experience Bar component', () => {
  it('Rendering using default values', () => {
    const experienceBar = render(
      <ExperienceBar />,
    );
    const experienceBarDefault = screen.getByText('+30');
    expect(experienceBar).toBeDefined();
    expect(experienceBarDefault).toBeInTheDocument();
  });
});
