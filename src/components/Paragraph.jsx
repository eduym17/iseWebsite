import React from 'react';
import propTypes from 'prop-types';

function Paragraph({ children, customClass }) {
  return (
    <p className={`font-Hero text-xs text-center w-[90%] ${customClass}`}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: propTypes.string,
  customClass: propTypes.string,
};
Paragraph.defaultProps = {
  children: 'Texto aquí',
  customClass: '',
};

export default Paragraph;
