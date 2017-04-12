import React from 'react';
import Headline from '../Headline/Headline';

class WorkHistoryItem extends React.Component {
  render() {
    //console.log(this);
    let skillList = this.props.skillList;

    let skills = skillList.filter(skill => skill.category === this.props.category);

    return(
      <div>
  			<ul className={this.props.category + "_skills_list"}>
          {skills.map(skill => <li className="skill" key={skill.name}>{skill.name}</li>)}
        </ul>

      </div>
    );

  }
}

export default WorkHistoryItem;
