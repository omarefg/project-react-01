import React from 'react';
import Title from '@components/Title';
import '@styles/components/Languages.styl';

const Languages = () => {
  return (
    <div>
      <Title
        className='Languages-title'
        title='Languages'
      />
      <div className='Languages-item' />
      <div className='Languages-item' />
      <div className='Languages-item' />
    </div>
  );
};

export default Languages;
