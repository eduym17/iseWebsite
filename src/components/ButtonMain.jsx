import React from 'react';
import PropTypes from 'prop-types';

function ButtonMain({ btnText }) {
  return (
    <button type="button" className="font-bold py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full">
      {btnText}
    </button>
  );
}

ButtonMain.propTypes = {
  btnText: PropTypes.string,
};
ButtonMain.defaultProps = {
  btnText: 'Texto aquí',
};

export default ButtonMain;
