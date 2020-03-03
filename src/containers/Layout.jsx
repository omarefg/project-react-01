import React from 'react';
import '@styles/containers/Layout.styl';

const Layout = ({ children }) => {
  return (
    <div className='Layout-container'>
      <div className='Layout-subcontainer'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
