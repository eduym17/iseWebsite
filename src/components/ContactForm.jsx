import React from 'react';
import propTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({ customClass }) {
  const [state, handleSubmit] = useForm('xwkywnek');
  if (state.succeeded) {
    return <p className="text-center font-semibold my-16 text-2xl self-center md:text-3xl lg:text-4xl">¡Gracias por contactarnos!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={`w-[80%] flex flex-col items-center gap-3 md:gap-4 ${customClass}`}>
      <input type="text" name="Name" id="name" placeholder="Tu nombre*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" required />
      <ValidationError prefix="Nombre" field="Name" errors={state.errors} />
      <input type="text" name="Last Name" id="lastname" placeholder="Tu apellido*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" required />
      <ValidationError prefix="Apellido" field="Last name" errors={state.errors} />
      <input type="email" name="E-mail" id="mail" placeholder="Tu correo electrónico*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" required />
      <ValidationError prefix="E-mail" field="E-mail" errors={state.errors} />
      <input type="tel" name="Phone" id="phone" placeholder="Tu teléfono" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" />
      <ValidationError prefix="Teléfono" field="Phone" errors={state.errors} />
      <textarea name="Message" id="message" cols="30" rows="1" placeholder="¡Haz una pregunta o comentario!" className="w-full bg-transparent text-ise-white placeholder-ise-white border-b-2 font-Hero text-xs resize-y h-6" />
      <ValidationError prefix="Mensaje" field="Message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className="font-bold py-1.5 px-6 bg-ise-white text-ise-orange rounded-full self-end mt-2">
        Enviar
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  customClass: propTypes.string,
};

ContactForm.defaultProps = {
  customClass: '',
};

export default ContactForm;
