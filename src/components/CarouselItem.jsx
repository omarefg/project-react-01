import React from 'react';
import '@styles/components/CarouselItem.styl';

const CarouselItem = (props) => {
  const {
    img,
    alt,
    title,
    subtitles,
  } = props;

  return (
    <div className='Carousel-item-container'>
      <img
        className='Carousel-item-container-img'
        src={img}
        alt={alt}
      />
      <div className='Carousel-item-container-details'>
        <p className='Carousel-item-container-details-title'>{title}</p>
        {subtitles.map(subtitle => (
          <p
            className='Carousel-item-container-details-subtitle'
            id={subtitle}
          >
            {subtitle}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CarouselItem;
