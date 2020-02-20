import React from 'react';
import '@styles/components/Carousel.styl';

const Carousel = ({ children }) => {

  return (
    <section className='carousel__section'>
      <div className='carousel__section--container'>
        {children}
      </div>
    </section>
  );
};

export default Carousel;
