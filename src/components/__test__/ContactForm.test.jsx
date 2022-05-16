/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

describe('Contact Form component', () => {
  it('Render using default values', () => {
    const contactForm = render(
      <ContactForm />,
    );
    const phNameDefault = screen.getByPlaceholderText('Tu nombre*');
    const phLastNameDefault = screen.getByPlaceholderText('Tu apellido*');
    const phMailDefault = screen.getByPlaceholderText('Tu correo electrónico*');
    const phPhoneDefault = screen.getByPlaceholderText('Tu correo electrónico*');
    const phMessageDefault = screen.getByPlaceholderText('Tu correo electrónico*');
    const submitButtonDefault = screen.getByText('Enviar');
    expect(contactForm).toBeDefined();
    expect(phNameDefault).toBeInTheDocument();
    expect(phLastNameDefault).toBeInTheDocument();
    expect(phMailDefault).toBeInTheDocument();
    expect(phPhoneDefault).toBeInTheDocument();
    expect(phMessageDefault).toBeInTheDocument();
    expect(submitButtonDefault).toBeInTheDocument();
  });
});
