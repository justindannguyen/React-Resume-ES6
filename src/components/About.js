import React from 'react';

const About = props => {
    return (
      <section className="about">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
        <div>
          {props.aboutData.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
        </div>
      </section>
    );
};

export default About;
