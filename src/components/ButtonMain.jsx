import React from 'react';
import PropTypes from 'prop-types';

function ButtonMain({ children, customClass }) {
  return (
    <button type="button" className={`font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full lg:text-lg ${customClass}`}>
      {children}
    </button>
  );
}

ButtonMain.propTypes = {
  children: PropTypes.string,
  customClass: PropTypes.string,
};
ButtonMain.defaultProps = {
  children: 'Texto aquí',
  customClass: '',
};

export default ButtonMain;
