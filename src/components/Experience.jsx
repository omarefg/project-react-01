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

const Experience = ({ experience }) => {
  return (
    <div>
      <Title
        className='Experience-title'
        title='Experience'
      />
      {experience && experience.map((item) => {
        return (
          <Item
            date={`${item.startDate} / ${item.endDate}`}
            site={item.site}
            job={item.job}
            description={item.jobDescrip}
          />
        );
      })}
    </div>
  );
};

export default Experience;
