import React from 'react';
import propTypes from 'prop-types';

function Titles6xl({ title, magicWord, customClass }) {
  return (
    <p className={`text-3xl font-bold text-center w-[90%] lg:text-6xl ${customClass}`}>
      {title.split(' ').map((word) => (word === magicWord ? <span key={word} className="text-ise-orange">{`${magicWord} `}</span> : <span key={word}>{`${word} `}</span>))}
    </p>
  );
}

Titles6xl.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  customClass: propTypes.string,
};
Titles6xl.defaultProps = {
  title: 'Título de sección',
  magicWord: '',
  customClass: '',
};

export default Titles6xl;
