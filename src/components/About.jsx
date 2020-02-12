import React from 'react';
import '@styles/components/About.styl';

const About = (props) => {
  const {
    avatar,
    profession,
    company,
    name,
  } = props;
  return (
    <div className='About-container'>
      <img
        src={avatar}
        alt='Profile-Pic'
        width='100px'
      />
      <div className='About-title'>
        <h1 className='About-item'>{name}</h1>
        <p className='About-item'>{profession}</p>
        <p className='About-item'>{company}</p>
      </div>
    </div>
  );
};

export default About;
