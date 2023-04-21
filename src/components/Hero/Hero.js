import React, { useState } from 'react';

const Hero = () => {
  return (
    <header className="h-screen w-10/12 lg:h-1/4 mx-auto lg:my-20 ">
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 h-full md:grid-rows-1 md:grid-cols-2 ">
        <div className="self-center">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-left text-primaryText">
            Hello, my name is{' '}
            <div className="mt-2 mb-4">
              <span className="border-b-2 border-secondary text-4xl sm:text-4xl md:text-5xl">
                Ihab Al-khishali.
              </span>{' '}
            </div>{' '}
            I'm a software developer who specializes in backend-development and building web
            applications.
          </h1>
        </div>
        <div className="justify-self-center self-center h-5/6 md:h-3/6 lg:h-full w-auto">
        </div>
      </div>
    </header>
  );
};

export default Hero;
