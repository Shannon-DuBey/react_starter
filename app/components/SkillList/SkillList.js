import React from 'react';
import Headline from '../Headline/Headline';
import SkillItem from '../SkillItem/SkillItem';

class SkillList extends React.Component {
  render() {
    //console.log(this);
    let skillList = this.props.skillList;

    return(
      <div>
        <Headline text="Front End:" />
  			<SkillItem category="front_end" skillList={skillList} />

        <br />

        <Headline text="Back End:" />
  			<SkillItem category="server_side" skillList={skillList} />

        <br />
        
        <Headline text="Misc:" />
  			<SkillItem category="misc" skillList={skillList} />

      </div>
    );

  }
}

export default SkillList;
