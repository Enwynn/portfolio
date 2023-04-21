import React from 'react';
import LinkIcon from '../UI/Icons/LinkIcon';

const ProjectCard = ({ projectTitle, projectDescription, tags, link }) => {
  return (
    <div className="bg-primaryTint rounded p-4 shadow-2xl">
      {link && <LinkIcon link={link}></LinkIcon>}
      <h3 className="text-center mb-5 font-bold text-xl">{projectTitle}</h3>
      <p className="mb-4">{projectDescription}</p>
      <div className="grid gap-2 text-gray-400 auto-rows-auto grid-cols-2 mt-5">
        {tags.map((tag) => (
          <div className="flex text-base">
            <p className="text-secondary">#</p>
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
