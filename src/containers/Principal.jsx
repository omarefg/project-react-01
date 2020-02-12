import React from 'react';
import '@styles/containers/Principal.styl';

const Principal = ({ children }) => {
  return (
    <div className='principal__container'>
      {children}
    </div>
  );
};

export default Principal;
