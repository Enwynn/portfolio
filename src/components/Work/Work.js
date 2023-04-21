import React from 'react';
import Container from '../UI/Container';
import WorkIcon from '../UI/Icons/WorkIcon';
import SecondaryHeader from '../UI/SecondaryHeader';
import UnderlinedLink from '../Utils/UnderlinedLink';
import WorkPart from '../Work/WorkPart';

const JOBS = [
  {
    workTitle: (
      <p>
        Test engineer - SJ
      </p>
    ),
    workDate: '2022 AUG - ',
    description: `I'm currently a part of a frontend team whose purpose is to facilitate the
    integration of a new webbsolution. My role has been to be part of the development and
    develop automated tests, testsessions, set up pipelines and provide documentation for internal users.
    `,
    bulletPoints: [
      `Write end2end-tests using Typescript and testing frameworks such as Playwright and Puppeeter.`,
      'Set up pipelines and flows in Microsoft Azure',
      'Refactored a big part of the example project',
      'Working with developers, quality assurance (QA) engineers, and other stakeholders.',
    ],
    technologies: [
      'Typescript',
      'Playwright',
      'Puppeeter',
      'Postman',
      'Microsoft Azure',
      'CD/CI pipelines',
      'Jira',
      'Scrum',
    ],
  },
  {
    workTitle: (
      <p>
        Software Developer - Experis
        
      </p>
    ),
    workDate: '2022 JUN - ',
    description: `I worked on internal projects using different technologies together with other consultants.`,
    bulletPoints: [
      'Developed different webbapplications using Spring and React',
      'Developed database models',
      'Automated deployment and storage of applications using Docker and CD/CI pipelines ',
    ],
    technologies: [
      'Spring Boot',
      'REST',
      'PostgreSQL',
      'React',
      'Azure DevOps',
      'Scrum',
    ],
  },

];

const Work = () => {
  return (
    <Container id="experience">
      <SecondaryHeader title="Experience">
        <WorkIcon></WorkIcon>
      </SecondaryHeader>
      {JOBS.map((job, index) => (
        <WorkPart {...job} addBorder={index !== JOBS.length - 1}></WorkPart>
      ))}
    </Container>
  );
};

export default Work;
