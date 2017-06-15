import React from 'react';
import classes from './SkillList.css';
import Headline from '../Headline/Headline';
import SkillItem from '../SkillItem/SkillItem';

class SkillList extends React.Component {
  render() {
    //console.log(this);
    let skillList = this.props.skillList;

    return(
      <div className="skillList">
        <span>
          <Headline text="Front End:" />
          <SkillItem category="front_end" skillList={skillList} />
        </span>

        <span>
          <Headline text="Back End:" />
    			<SkillItem category="server_side" skillList={skillList} />
        </span>

        <span>
          <Headline text="Misc:" />
    			<SkillItem category="misc" skillList={skillList} />
        </span>
      </div>
    );

  }
}

export default SkillList;
