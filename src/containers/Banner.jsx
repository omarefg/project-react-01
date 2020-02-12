import React from 'react';
import '@styles/containers/Banner.styl';

const Banner = ({ children }) => {
  return (
    <div className='banner__container'>
      {children}
    </div>
  );
};

export default Banner;
