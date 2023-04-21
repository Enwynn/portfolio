import React from 'react';

const SkillCard = (props) => {
  return (
    <div className=" bg-primaryTint rounded w-full h-full md:max-w-sm max-w-20 px-2 py-4 shadow-inner ">
      <h1 className=" text-xl mb-4">
        <span className="border-b-2 border-secondary ">
          {props.skillsTitle}
        </span>
      </h1>
      <ul className="list-none grid grid-cols-2 justify-items-start gap-x-0 gap-y-3 md:grid-cols-1 lg:grid-cols-2">
        {props.skills.map((skillName) => (
          <li className={skillName.length > 15 && 'lg:col-span-1'}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 inline-block text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>{' '} */}
            <svg
              className="h-3 w-5 text-secondary inline-block col-span-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>{' '}
            {skillName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
