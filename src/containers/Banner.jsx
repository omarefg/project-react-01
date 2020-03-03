import React from 'react';
import '@styles/containers/Banner.styl';

const Banner = ({ children }) => {
  return (
    <div className='Banner-container'>
      {children}
    </div>
  );
};

export default Banner;
