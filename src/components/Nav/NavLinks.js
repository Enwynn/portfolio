import React from 'react';
import CustomNavLink from './CustomNavLink';

const NavLinks = (props) => {
  return (
    <>
      <CustomNavLink
        onClick={props.reverseMenuState}
        to="experience"
        name="Experience"
      />
      <CustomNavLink
        onClick={props.reverseMenuState}
        to="skills"
        name="Skills"
      />
      <CustomNavLink
        onClick={props.reverseMenuState}
        to="education"
        name="Education"
      />
      <CustomNavLink
        onClick={props.reverseMenuState}
        to="projects"
        name="Projects"
      />
      <CustomNavLink onClick={props.reverseMenuState} to="about" name="About" />
      <CustomNavLink
        onClick={props.reverseMenuState}
        to="contact"
        name="Contact"
      />
    </>
  );
};

export default NavLinks;
