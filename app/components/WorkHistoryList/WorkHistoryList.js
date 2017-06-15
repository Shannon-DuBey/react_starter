import React from 'react';
import Headline from '../Headline/Headline';
import classes from './WorkHistoryList.css';

class WorkHistoryList extends React.Component {
  render() {
    //console.log(this);
    let jobList = this.props.jobList;

    return(
      <div>
        <ul>
          {jobList.map(job =>
            <li className="job" key={job.name}>
              <p>{job.name}</p>
              <p>{job.title}</p>
              <p>{job.start_date} - {job.end_date}</p>
              <p>{job.description}</p>
            </li>
          )}
        </ul>
      </div>
    );

  }
}

export default WorkHistoryList;
