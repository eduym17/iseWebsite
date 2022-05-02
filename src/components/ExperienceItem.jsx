import React from 'react';
import propTypes from 'prop-types';

function ExperienceItem({
  text, magicWord, image, customClass,
}) {
  return (
    <div className={`flex flex-col items-center md:w-1/3 lg:w-2/5 ${customClass}`}>
      <img src={image} alt={text} className="h-36 md:h-28 lg:h-40" />
      <p className="text-2xl font-bold text-center leading-none lg:text-3xl">
        {text.split(' ').map((word) => (word === magicWord ? <span key={word} className="text-ise-orange">{`${magicWord} `}</span> : <span key={word}>{`${word} `}</span>))}
      </p>
    </div>
  );
}

ExperienceItem.propTypes = {
  text: propTypes.string,
  magicWord: propTypes.string,
  image: propTypes.string,
  customClass: propTypes.string,
};

ExperienceItem.defaultProps = {
  text: 'pie de imagen',
  magicWord: '',
  image: '',
  customClass: '',
};

export default ExperienceItem;
