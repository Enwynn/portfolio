import React from 'react';
import SecondaryHeader from '../UI/SecondaryHeader';
import Container from '../UI/Container';
import EducationIcon from '../UI/Icons/EducationIcon';
import LinkIcon from '../UI/Icons/LinkIcon';

const courseList = [
  {
    courseTitle: 'Spring Boot',
    link: 'https://www.udemy.com/course/spring-hibernate-tutorial/',
  },
  {
    courseTitle: 'React',
    link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
  },
  {
    courseTitle: 'JavaScript',
    link: 'https://www.udemy.com/course/the-complete-javascript-course/',
  },
  // {
  //   courseTitle: 'HTML & CSS',
  //   link: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/',
  // },
];

const Education = () => {
  return (
    <Container id="education">
      <SecondaryHeader title="Education">
        <EducationIcon />
      </SecondaryHeader>
      <p>Computer Science - Stockholm University </p>
      <p className="text-xs text-gray-400 mb-3">2019 - 2022</p>
      <p className="mb-3">
        At Stockholm University I studied essential software engineering courses such as
        object-oriented programming, algorithms & data structures, database
        technology, communication systems (UDP, TCP, HTTP etc) and many more. If
        you'd like to see the full list of courses please click{' '}
        <a
          className="border-b-2  border-secondary"
          target="_blank"
          rel="noreferrer"
          href="https://www.su.se/sok-kurser-och-program/sdavk-1.411897"
        >
          here.
        </a>{' '}
        Agile development was also been a big part of my education. I've been
        involved in bigger projects together with other students where we have
        practiced agile development. These practices have made me a better team
        player and a more organized developer.
      </p>

      <p className="mb-3">
        In my free time I like to explore technologies by learning from online
        courses. Below is a list of courses I have finished on Udemy.
      </p>

      <ul className="grid gap-y-3">
        {courseList.map((course) => {
          return (
            <li>
              <div className="flex gap-x-2">
                <a
                  href={course.link}
                  target="_blank"
                  className="flex gap-2"
                  rel="noreferrer"
                >
                  <LinkIcon></LinkIcon>
                  <span className="border-b-2 border-secondary">
                    {course.courseTitle}
                  </span>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Education;
