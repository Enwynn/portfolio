import React from 'react';

const Container = (props) => {
  const className = `w-11/12 sm:w-10/12 2xl:w-8/12 mx-auto mt-5 md:w-10/12 mb-20 ${props.className}`;
  return (
    <div id={props.id} className={className}>
      {props.children}
    </div>
  );
};

export default Container;
