import React from 'react';
import Title from '@components/Title';
import '@styles/components/Academic.styl';

const Item = () => {
  return (
    <div className='Academic-item' />
  );
};

const Academic = () => {
  return (
    <div>
      <Title
        className='Academic-title'
        title='Education'
      />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Academic;
