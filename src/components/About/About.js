import React from 'react';
import SecondaryHeader from '../UI/SecondaryHeader';
import Container from '../UI/Container';
import ProfileIcon from '../UI/Icons/ProfileIcon';
import LocationIcon from '../UI/Icons/LocationIcon';
import LanguageIcon from '../UI/Icons/LanguageIcon';

const About = () => {
  return (
    <Container id="about">
      <SecondaryHeader title="About">
        <ProfileIcon></ProfileIcon>
      </SecondaryHeader>
      <p className="mb-5">
        My journey started when I took a course in HTML and CSS  and
        was asked to edit a small part of the business website.
        Although I had no pervious experience I wanted to give it a try. After
        learning about javascript I was able to complete my task, but most
        importantly I developed an interest in web development. A few months
        later I decided to take my new found hobby to the next level and started
        my education at Stockholm University studying Computer Science.
      </p>
      <div className="grid gap-4">
        <span className="flex gap-3">
          <LocationIcon /> Stockholm, Sweden
        </span>
        <span className="flex gap-3">
          <LanguageIcon /> Fluent in Swedish & English
        </span>
      </div>
    </Container>
  );
};

export default About;
