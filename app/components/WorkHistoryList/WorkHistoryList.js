import React from 'react';
import Headline from '../Headline/Headline';
import WorkItem from '../WorkHistoryItem/WorkHistoryItem';

class WorkHistoryList extends React.Component {
  render() {
    //console.log(this);
    let skillList = this.props.skillList;

    return(
      <div>
        <Headline text="Front End:" />
  			<WorkItem category="front_end" skillList={skillList} />

        <Headline text="Back End:" />
  			<WorkItem category="server_side" skillList={skillList} />

        <Headline text="Misc:" />
  			<WorkItem category="misc" skillList={skillList} />

      </div>
    );

  }
}

export default WorkHistoryList;
