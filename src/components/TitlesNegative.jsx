import React from 'react';
import propTypes from 'prop-types';

function TitlesNegative({ title, customClass }) {
  return (
    <p className={`text-3xl font-bold text-center w-[90%] lg:text-4xl ${customClass}`}>
      {title}
    </p>
  );
}

TitlesNegative.propTypes = {
  title: propTypes.string,
  customClass: propTypes.string,
};
TitlesNegative.defaultProps = {
  title: 'Título de sección',
  customClass: '',
};

export default TitlesNegative;
