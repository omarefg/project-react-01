import React from 'react';
import Title from '@components/Title';
import Cronological from '@components/Cronological';
import '@styles/components/Experience.styl';

const Item = ({ date, site, job, description }) => {
  return (
    <div className='Experience-item'>
      <Cronological
        date={date}
        site={site}
        job={job}
        description={description}
      />
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <Title
        className='Experience-title'
        title='Experience'
      />
      <Item
        date=''
        site=''
        job=''
        description=''
      />
      <Item
        date=''
        site=''
        job=''
        description=''
      />
      <Item
        date=''
        site=''
        job=''
        description=''
      />
    </div>
  );
};

export default Experience;
