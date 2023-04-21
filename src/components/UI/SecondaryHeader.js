import React from 'react';

const SecondaryHeader = (props) => {
  return (
    <div className="flex items-center gap-2 font-bold mb-5 border-b-2 border-secondary">
      {props.children}
      <h2 className="text-textPrimary text-2xl text-center">{props.title}</h2>
    </div>
  );
};

export default SecondaryHeader;
