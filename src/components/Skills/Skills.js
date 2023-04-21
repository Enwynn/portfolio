import React from 'react';
import SecondaryHeader from '../UI/SecondaryHeader';
import SkillCard from './SkillCard';
import Container from '../UI/Container';
import SkillIcon from '../UI/Icons/SkillIcon';

const skillsObj = [
  {
    skillTitle: 'Programming languages',
    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'Typescript', 'C++'],
  },
  {
    skillTitle: 'Backend',
    skills: ['Kafka', 'Spring Boot', 'REST'],
  },
  {
    skillTitle: 'Frontend',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Android', 'JavaFX'],
  },
  {
    skillTitle: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    skillTitle: 'Tools',
    skills: ['Git', 'Docker', 'Jira', 'Playwright', 'linux', 'Microsoft Azure', 'Hadoop'],
  },
  {
    skillTitle: 'Methods',
    skills: ['Agile Dev.', 'Scrum', 'SAFe', 'TDD', 'End2end-testing', 'DevOps', 'testautomation'],
  },
  //'SAFe', 'Scrum', 'Agile Dev.'
];

const Skills = () => {
  return (
    <Container id="skills">
      <SecondaryHeader title="Skills">
        <SkillIcon />
      </SecondaryHeader>
      <div className="grid  gap-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {skillsObj.map((obj) => (
          <SkillCard skills={obj.skills} skillsTitle={obj.skillTitle} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
