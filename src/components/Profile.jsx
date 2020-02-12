import React from 'react';
import Title from '@components/Title';
import '@styles/components/Profile.styl';

const Profile = ({ profile }) => {
  return (
    <div className='Profile-container'>
      <Title
        className='Profile-title'
        title='Profile'
      />
      <p className='Profile-desc'>
        {profile}
      </p>
    </div>
  );
};

export default Profile;
