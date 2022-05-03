import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ButtonLink({ children, customClass, to }) {
  return (
    <Link to={to} className={`font-bold text-center whitespace-nowrap py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full lg:text-lg ${customClass}`}>
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string,
  customClass: PropTypes.string,
  to: PropTypes.string,
};
ButtonLink.defaultProps = {
  children: 'Texto aquí',
  customClass: '',
  to: '',
};

export default ButtonLink;
