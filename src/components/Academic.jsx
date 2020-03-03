import React from 'react';
import Title from '@components/Title';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import '@styles/components/Academic.styl';

const mediaUrl = 'https://platzi-certificates.s3-sa-east-1.amazonaws.com/';

const Academic = ({ academic }) => {
  return (
    <div>
      <Title
        className='Academic-title'
        title='Education'
      />
      <Carousel>
        {academic.map(academic => (
          <CarouselItem
            id={academic.id}
            img={`${mediaUrl}${academic.img}`}
            alt={academic.degree}
            title={academic.degree}
            subtitles={[academic.institution, academic.endDate]}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Academic;
