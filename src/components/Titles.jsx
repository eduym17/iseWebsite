import React from 'react';
import propTypes from 'prop-types';

function Titles({ title, magicWord, customClass }) {
  return (
    <p className={`text-3xl font-bold text-center w-[90%] ${customClass}`}>
      {title.split(' ').map((word) => (word === magicWord ? <span className="text-ise-orange">{`${magicWord} `}</span> : `${word} `))}
    </p>
  );
}

Titles.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  customClass: propTypes.string,
};
Titles.defaultProps = {
  title: 'Título de seccion',
  magicWord: '',
  customClass: '',
};

export default Titles;
