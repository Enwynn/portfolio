import React from 'react';

const UnderlinedLink = (props) => {
  return (
    <a href={props.link} target="_blank">
      <span className="border-b-2 border-secondary text-secondary">
        {props.children}
      </span>
    </a>
  );
};

export default UnderlinedLink;
