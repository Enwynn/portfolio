import React from 'react';
import { Link } from 'react-scroll';

const CustomNavLink = (props) => {
  return (
    <Link
      onClick={props.onClick}
      to={props.to}
      offset={-90}
      className="cursor-pointer border-b-2 border-transparent hover:border-secondary"
    >
      {props.name}
    </Link>
  );
};

export default CustomNavLink;
