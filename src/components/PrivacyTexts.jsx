import React from 'react';
import propTypes from 'prop-types';
import { Subtitles, Paragraph } from './index';

function PrivacyTexts({
  title, magicWord, children, customClass, customClassParagraph,
}) {
  return (
    <div className="containerContent">
      <Subtitles title={title} magicWord={magicWord} customClass={`${customClass}`} />
      <Paragraph customClass={`mt-2 text-justify whitespace-pre-line ${customClassParagraph}`}>
        {children}
      </Paragraph>
    </div>
  );
}

PrivacyTexts.propTypes = {
  title: propTypes.string,
  magicWord: propTypes.string,
  children: propTypes.string,
  customClass: propTypes.string,
  customClassParagraph: propTypes.string,
};

PrivacyTexts.defaultProps = {
  title: 'Título aquí',
  magicWord: '',
  children: 'Texto aquí',
  customClass: '',
  customClassParagraph: '',
};

export default PrivacyTexts;
