import React from 'react';
import '@styles/components/Carousel.styl';

const Carousel = ({ children }) => {

  return (
    <section className='Carousel-section'>
      <div className='Carousel-section-container'>
        {children}
      </div>
    </section>
  );
};

export default Carousel;
