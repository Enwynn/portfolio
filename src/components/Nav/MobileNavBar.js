import React, { useState } from 'react';
import CustomNavLink from './CustomNavLink';
import CloseNavMenuIcon from '../UI/Icons/CloseNavMenuIcon';
import MobileMenuIcon from '../UI/Icons/MobileMenuIcon';
import NavLinks from './NavLinks';

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reverseMenuState = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`  ${
        isMenuOpen
          ? 'bg-black absolute top-0 left-0 h-screen w-screen opacity-90'
          : 'justify-self-end md:hidden'
      }`}
    >
      <MobileMenuIcon
        isMenuOpen={isMenuOpen}
        reverseMenuState={reverseMenuState}
      />
      <div
        className={
          isMenuOpen
            ? 'grid mt-10 mx-auto justify-items-center gap-y-10 font-bold text-4xl text-white'
            : 'hidden'
        }
      >
        <CloseNavMenuIcon reverseMenuState={reverseMenuState} />
        <NavLinks reverseMenuState={reverseMenuState} />
      </div>
    </div>
  );
};

export default MobileNavBar;
