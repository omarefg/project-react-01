import React from 'react';
import '@styles/containers/Header.styl';

const Header = ({ children }) => {
  return (
    <div className='Header-title'>
      {children}
    </div>
  );
};

export default Header;
