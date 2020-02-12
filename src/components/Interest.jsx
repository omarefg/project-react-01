import React from 'react';
import PropTypes from 'prop-types';
import Title from '@components/Title';
import '@styles/components/Interest.styl';

const Item = ({ interest }) => {
  return (
    <li className='Interest-item'>{interest}</li>
  );
};

const Interest = ({ interests }) => {
  return (
    <div>
      <Title
        className='Interest-title'
        title='Interest'
      />
      <ul>
        {interests.map(interest => <Item key={interest} interest={interest} />)}
      </ul>
    </div>
  );
};

Interest.propTypes = {
  interests: PropTypes.array,
};

Interest.defaultProps = {
  interests: ['test1', 'test2', 'test3'],
};

export default Interest;
