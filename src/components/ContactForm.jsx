import React from 'react';
import propTypes from 'prop-types';

function ContactForm({ customClass }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={`w-[80%] flex flex-col items-center gap-3 md:gap-5 ${customClass}`}>
      <input type="text" name="Name" id="name" placeholder="Tu nombre*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" required />
      <input type="email" name="E-mail" id="mail" placeholder="Tu correo electrónico*" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" required />
      <input type="tel" name="Phone" id="phone" placeholder="Tu teléfono" className="font-Hero text-xs text-ise-white bg-transparent border-b-2 w-full placeholder-ise-white" />
      <textarea name="question" id="question" cols="30" rows="1" placeholder="¡Haz una pregunta!" className="w-full bg-transparent text-ise-white placeholder-ise-white border-b-2 font-Hero text-xs resize-y h-6" />
      <button type="submit" className="font-bold py-1.5 px-6 bg-ise-white text-ise-orange rounded-full self-end mt-2">
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
