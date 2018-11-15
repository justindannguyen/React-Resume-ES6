import React from 'react';

const Skills = props => {
  const skills = props.skillsData.map((item, index) => {
    const keywords = item.keywords.map((item, index) => (
      <li key={index}>
        <span className="label label-success">{item}</span>
      </li>
    ));
    return (
      <div key={index}>
        <h4>{item.name}</h4>
        <ul className="skills-list list-inline">{keywords}</ul>
      </div>
    );
  });

  return (
    <section className="skills">
      <h2 className="text-uppercase">
        <i className="fa fa-lg fa-code" /> Skills
      </h2>
      {skills}
    </section>
  );
};

export default Skills;
