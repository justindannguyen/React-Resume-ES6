import React from 'react';
import moment from 'moment';

const Certification = props => {
    const getEducation = props.certificationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <p>{item.institution}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Certifications</h2>
        {getEducation}
      </section>
  	)
};

export default Certification;
