import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
  				  <h3>{item.institution}</h3>
            <h4>{item.studyType}, {item.area}</h4>
  				  <p>Studied: {startdate} - {enddate}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-university"></i> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
