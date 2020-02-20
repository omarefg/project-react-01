import React from 'react';
import '@styles/components/CarouselItem.styl';

const CarouselItem = (props) => {

  return (
    <div className='carousel-item__container'>
      <img
        className='carousel-item__container__img'
        src=''
        alt=''
      />
      <div className='carousel-item__container__details'>
        <p className='carousel-item__container__details--title' />
        <p className='carousel-item__container__details--subtitle' />
      </div>
    </div>
  );
};

export default CarouselItem;
