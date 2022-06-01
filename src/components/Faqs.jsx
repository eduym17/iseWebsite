import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

function Faqs({ question, children, customClass }) {
  const content = useRef(null);
  const [height, setHeight] = useState(0);
  const [faq, setFaq] = useState(true);
  const changeHeight = () => {
    if (faq && height > 0) {
      content.current.style.height = `${height}px`;
    } else if (!faq) {
      content.current.style.height = 0;
    }
  };
  const handleClick = () => {
    setFaq(!faq);
    changeHeight();
  };

  useEffect(() => {
    setHeight(content.current.clientHeight);
  }, []);

  useEffect(() => {
    handleClick();
  }, [height]);

  const blurHandler = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // Focus left self
      setFaq(true);
      content.current.style.height = 0;
    }
  };

  const enterHandlesFaq = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <button
      onKeyUp={(e) => enterHandlesFaq(e)}
      onBlur={(e) => blurHandler(e)}
      type="button"
      className={`
        cursor-default faqItem transition-all duration-500 w-[90%] py-2 px-2
        ${!faq ? 'bg-ise-orange text-ise-white rounded-lg' : 'bg-ise-gray-50 text-ise-gray-30 rounded-3xl'}
        ${customClass}`}
    >
      <div className="itemTitle flex justify-between items-center gap-3">
        <p className="font-bold text-left">
          {question}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick()}
          className={`cursor-pointer h-6 transform transition-all duration-500 hover:cursor-pointer ${!faq ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          data-testid={`arrowButton ${!faq}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <p
        ref={content}
        className="font-Hero text-sm text-justify overflow-hidden transition-height duration-500 box-border"
      >
        {children}
      </p>
    </button>
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
