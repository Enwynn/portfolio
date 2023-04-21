import React from 'react';
import ContactIcon from '../UI/Icons/ContactIcon';
import SecondaryHeader from '../UI/SecondaryHeader';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-10/12 2xl:w-6/12 xl:w-8/12 lg:w-7/12 mx-auto mt-5 md:w-10/12 mb-20"
    >
      <SecondaryHeader title="Contact">
        <ContactIcon />
      </SecondaryHeader>
      <p className="mb-10 text-center">
        If you'd like to work together or have a chat please contact me directly
        at alkhishali2@gmail.com or click the button below, I'll reply as soon
        as possible!
      </p>
      <div className="flex justify-center">
        <a className="btn" href="mailto: alkhishali2@gmail.com">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Contact;
