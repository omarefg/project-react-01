import React from 'react';
import '@styles/components/Title.styl';

const Title = ({ title }) => {
  return (
    <p className='Title-container'>
      {title}
    </p>
  );
};

export default Title;
