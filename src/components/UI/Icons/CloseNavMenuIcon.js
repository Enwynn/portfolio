import React from 'react';

const CloseNavMenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-16 w-16 text-secondary border-2 hover:bg-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={props.reverseMenuState}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseNavMenuIcon;
