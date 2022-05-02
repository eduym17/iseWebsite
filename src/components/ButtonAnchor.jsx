import React from 'react';
import PropTypes from 'prop-types';

function ButtonAnchor({ children, customClass, href }) {
  return (
    <a href={href} className={`font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full lg:text-lg ${customClass}`}>
      {children}
    </a>
  );
}

ButtonAnchor.propTypes = {
  children: PropTypes.string,
  customClass: PropTypes.string,
  href: PropTypes.string,
};
ButtonAnchor.defaultProps = {
  children: 'Texto aquí',
  customClass: '',
  href: '',
};

export default ButtonAnchor;
