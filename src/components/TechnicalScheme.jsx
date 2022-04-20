import React from 'react';
import propTypes from 'prop-types';
import { Subtitles } from './index';

function TechnicalScheme({
  children, subtitleFooter, title, magicWord, customClassSubtitle, customClassParag,
  customClass,
}) {
  return (
    <div className={`flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-2 md:w-[90%] ${customClass}`}>
      <div className="flex flex-col items-center justify-center w-full md:w-2/5">
        <Subtitles title={title} magicWord={magicWord} customClass={`md:w-full md:text-left ${customClassSubtitle}`} />
        <p className="leading-none text-sm font-semibold text-center md:w-full md:text-left lg:text-base">
          {subtitleFooter}
        </p>
      </div>
      <p className={`md:whitespace-pre-line font-Hero text-xs text-justify w-[90%] mt-2 md:w-full lg:text-base ${customClassParag}`}>
        {children}
      </p>
    </div>
  );
}

TechnicalScheme.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  subtitleFooter: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  title: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  magicWord: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  customClassSubtitle: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  customClassParag: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  customClass: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
};

TechnicalScheme.defaultProps = {
  children: '',
  subtitleFooter: '',
  title: '',
  magicWord: '',
  customClassSubtitle: '',
  customClassParag: '',
  customClass: '',
};

export default TechnicalScheme;
