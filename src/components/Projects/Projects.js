import React from 'react';
import SecondaryHeader from '../UI/SecondaryHeader';
import Container from '../UI/Container';
import ProjectCard from './ProjectCard';
import ProjectIcon from '../UI/Icons/ProjectIcon';

const projectArr = [
  {
    projectTitle: 'Noise pollution locator',
    projectDescription: `Part of a group project. We used different APIs to build a platform-independent
    mobile application that can show a map of noise levels in Stockholm and also
    measure the local noise level.`,
    tags: ['Flutter', 'Google API', 'Firebase'],
  },

  {
    projectTitle: 'Pokeomon fetcher',
    projectDescription: (
      <>
        Website built with Angular and hosted on Heroku. Allows the user to collect and manage different pokemons. The API used
        can be found at PokeAPi {' '}
      </>
    ),
    tags: ['Angular', 'Tailwind', 'Visual Studio'],
  },

  {
    projectTitle: 'Alumni network Portal',
    projectDescription: `A forum where users are able to create posts and interact with the posts through likes and comments. Users are able join different groups and chat with each other. 
    This was a group project that included 3 other developers. The frontend for this project was developed with React and for the backend we were using Java with Spring and postgresql. It was hosted on Heroku`,
    tags: ['Spring Boot', 'Java', 'React', 'Javascript', 'Tailwind', 'postgresql'],
  },
];

const Projects = () => {
  return (
    <Container id="projects">
      <SecondaryHeader title="Projects">
        <ProjectIcon />
      </SecondaryHeader>
      <div className="grid gap-10 w-full h-full md:grid-cols-2 lg:grid-cols-3">
        {projectArr.map((project) => (
          <ProjectCard {...project}></ProjectCard>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
