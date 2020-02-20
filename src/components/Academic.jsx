import React from 'react';
import Title from '@components/Title';
import '@styles/components/Academic.styl';

const mediaUrl = 'https://platzi-certificates.s3sa-east-1.amazonaws.com/';

const Item = () => {
  return (
    <div className='Academic-item' />
  );
};

const Academic = ({ academic }) => {
  return (
    <div>
      <Title
        className='Academic-title'
        title='Education'
      />
      <img src={academic.cursos[0].img} alt='test' />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Academic;
