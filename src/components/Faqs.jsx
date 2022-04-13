import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

function Faqs({ question, children, customClass }) {
  const content = useRef(null);
  const [height, setHeight] = useState('0');
  const [faq, setFaq] = useState(false);
  const handleClic = () => {
    setFaq(!faq);
  };

  useEffect(() => {
    setHeight(content.current.clientHeight);
  }, []);

  useEffect(() => {
    if (faq) {
      content.current.style.height = `${height}px`;
    } else {
      content.current.style.height = 0;
    }
  }, [faq]);

  return (
    <div className={`faqItem transition-all duration-500 w-[90%] py-2 px-2 ${faq ? 'bg-ise-orange text-ise-white rounded-lg' : 'bg-ise-gray-50 text-ise-gray-30 rounded-3xl'} ${customClass}`}>
      <div className="itemTitle flex justify-between items-center">
        <p className="font-bold">{question}</p>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleClic()} className={`h-6 transform transition-all duration-500 hover:cursor-pointer ${faq ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <p ref={content} className="font-Hero text-xs text-justify overflow-hidden transition-height duration-500 box-border">
        {children}
      </p>
    </div>
  );
}

Faqs.propTypes = {
  question: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  customClass: propTypes.string,
};

Faqs.defaultProps = {
  question: 'Pregunta aquí',
  children: 'Respuesta aquí',
  customClass: '',
};

export default Faqs;
