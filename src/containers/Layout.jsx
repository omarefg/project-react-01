import React from 'react';
import '@styles/containers/Layout.styl';

const Layout = ({ children }) => {
  return (
    <div className='layout__container'>
      <div className='layout__subcontainer'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
