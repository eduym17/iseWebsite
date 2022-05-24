import React from 'react';
import propTypes from 'prop-types';
import Subtitles from './Subtitles';
import Paragraph from './Paragraph';

function ProjectItem({
  mobileImg, desktopImg, title, children, customClass, customClassTexts,
}) {
  return (
    <div className={`flex flex-col items-center w-full hover:drop-shadow-lg lg:hover:drop-shadow-xl lg:w-[29%] ${customClass}`}>
      <img src={mobileImg} alt={title} className="md:hidden max-w-sm rounded-t-lg w-[90%]" />
      <img src={desktopImg} alt={title} className="hidden md:flex rounded-t-lg md:w-full" />
      <div className={`bg-ise-gray-40 flex flex-col items-center rounded-b-lg w-[90%] px-2 py-2 max-w-sm md:w-full ${customClassTexts}`}>
        <Subtitles title={title} magicWord="" customClass="md:mt-2" />
        <Paragraph customClass="md:mb-3 text-center whitespace-pre-line">
          {children}
        </Paragraph>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  mobileImg: propTypes.string,
  desktopImg: propTypes.string,
  title: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  customClass: propTypes.string,
  customClassTexts: propTypes.string,
};

ProjectItem.defaultProps = {
  mobileImg: '',
  desktopImg: '',
  title: '',
  children: '',
  customClass: '',
  customClassTexts: '',
};

export default ProjectItem;
