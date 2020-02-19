import React, { useEffect, useState } from 'react';
import Layout from '@containers/Layout';
import Header from '@containers/Header';
import Body from '@containers/Body';
import Banner from '@containers/Banner';
import Principal from '@containers/Principal';

import About from '@components/About';
import Profile from '@components/Profile';
import Experience from '@components/Experience';
import Academic from '@components/Academic';
import Skills from '@components/Skills';
import Interest from '@components/Interest';
import Languages from '@components/Languages';
import Contact from '@components/Contact';

import getData from '@utils/getData';

import '@styles/containers/App.styl';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('http://localhost:3000/data');
      console.log(data);
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return null;
  }

  const {
    avatar,
    profession,
    company,
    name,
    profile,
    interests,
    email,
    phone,
    experience,
  } = data;

  return (
    <Layout>
      <Header>
        <About
          avatar={avatar}
          profession={profession}
          company={company}
          name={name}
        />
      </Header>
      <Body>
        <Banner>
          <Profile
            profile={profile}
          />
          <Interest
            interests={interests}
          />
          <Contact
            email={email}
            phone={phone}
          />
        </Banner>
        <Principal>
          <Experience
            experience={experience}
          />
          <Academic />
          <Skills />
          <Languages />
        </Principal>
      </Body>
    </Layout>
  );
};

export default App;
