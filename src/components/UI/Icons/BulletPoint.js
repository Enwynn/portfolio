import React from 'react';

const BulletPoint = (props) => {
  console.log(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-3 w-5 inline-block text-secondary"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default BulletPoint;
