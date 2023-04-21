import React from 'react';

const LinkIcon = ({ className = 'h-6 w-6 text-secondary', link }) => {
  return (
    <div className="flex flex-shrink justify-end">
      <a href={link} target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
};

export default LinkIcon;
