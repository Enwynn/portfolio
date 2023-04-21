import React from 'react';

const MobileMenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-12 w-12 text-secondary justify-self-end md:hidden ${
        props.isMenuOpen && 'hidden'
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={props.reverseMenuState}
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default MobileMenuIcon;
