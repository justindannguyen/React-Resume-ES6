import React from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.responsibilities.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });
    const skills = props.workItemData.skills;
    const achievements = props.workItemData.achievements;
    
    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
          { 
            skills ? (<p><u>Skills utilized:</u> {props.workItemData.skills}</p>) : null
          }
          {
            achievements ? (<p><u>Key achievement:</u> {props.workItemData.achievements}</p>) : null
          }
        </div>
    )
};

export default WorkItem;
