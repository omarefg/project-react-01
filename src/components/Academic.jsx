import React from 'react';
import Title from '@components/Title';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
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
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Academic;
