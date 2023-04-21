import React from 'react';

const WorkPart = ({
  workDate,
  workTitle,
  description,
  bulletPoints,
  technologies,
  addBorder,
}) => {
  addBorder = addBorder ? 'border-b-4 border-gray-500 mt-4' : 'mt-4';
  return (
    // <div className="grid border-b-4 border-gray-500 mt-3">
    <div className={addBorder}>
      <p>
        <p className="text-green-200">{workTitle}</p>
        <p className="text-sm">{workDate}</p>
        <p className="mt-3">{description}</p>
        <ul className="mt-3 list-disc list-outside">
          {bulletPoints.map((point, key) => {
            return (
              <div>
                {/* <svg
                  className="h-3 w-5 mt-2 mr-1 text-secondary inline-block col-span-1"
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
                </svg> */}
                <li className="ml-5">{point}</li>
              </div>
            );
          })}
        </ul>
        <p className="mt-2 mb-2">
          [{' '}
          {technologies.map((tech, index) => {
            return index === technologies.length - 1 ? tech : tech + ', ';
          })}{' '}
          ]
        </p>
      </p>
    </div>
  );
};

export default WorkPart;
