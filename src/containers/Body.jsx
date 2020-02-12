import React from 'react';
import '@styles/containers/Body.styl';

const Body = ({ children }) => {
  return (
    <div className='body__container'>
      {children}
    </div>
  );
};

export default Body;
