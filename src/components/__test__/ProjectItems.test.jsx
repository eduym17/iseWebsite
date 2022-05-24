/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectItem from '../ProjectItem';

describe('Projec Items component', () => {
  it('Should render using default values', () => {
    const projectItem = render(
      <ProjectItem />,
    );
    expect(projectItem).toBeDefined();
  });
});
