import React from 'react';
import Title from '@components/Title';
import '@styles/components/Contact.styl';

const Item = ({ title, information, href }) => {
  return (
    <div className='Contact-item'>
      <p>{title}</p>
      <a href={href}>{information}</a>
    </div>
  );
};

const Contact = ({ email, phone }) => {
  return (
    <div className='Contact-container'>
      <Title
        className='Contact-title'
        title='Contact'
      />
      <Item
        title='Phone'
        href={`tel:${phone}`}
        information={phone}
      />
      <Item
        title='Email'
        href={`mailto:${email}`}
        information={email}
      />
    </div>
  );
};

export default Contact;
