import React from 'react';
import propTypes from 'prop-types';

function Subtitles({ title, magicWord, customClass }) {
  return (
    <p className={`text-2xl font-bold text-center w-[90%] lg:text-3xl ${customClass}`}>
      {title.split(' ').map((word) => (word === magicWord ? <span key={word + Math.random(5)} className="text-ise-orange">{`${magicWord} `}</span> : <span key={word + Math.random(5)}>{`${word} `}</span>))}
    </p>
  );
}

Subtitles.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  customClass: propTypes.string,
};
Subtitles.defaultProps = {
  title: 'Subtítulo de sección',
  magicWord: '',
  customClass: '',
};

export default Subtitles;
