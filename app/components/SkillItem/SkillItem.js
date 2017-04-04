import React from 'react';
import Headline from '../Headline/Headline';

class SkillItem extends React.Component {
  render() {
    //console.log(this);
    let skillList = this.props.skillList;
    let frontEndSkills = [];
    let backEndSkills = [];
    let miscSkills = [];

    skillList.forEach(function(skill) {
      if (skill.category === "front_end"){
        let addSkill = {"name": skill.name};
        frontEndSkills.push(addSkill);
      } else if (skill.category === "server_side"){
        let addSkill = {"name": skill.name};
        backEndSkills.push(addSkill);
      } else {
        let addSkill = {"name": skill.name};
        miscSkills.push(addSkill);
      }
    });

    //console.log(frontEndSkills);
    //console.log(backEndSkills);
    //console.log(miscSkills);

    /* TO DO:
    split this into a SkillList component which splits the data then calls a listItem component to create the UL's

    */

    return(
      <div>
        <Headline text="Front End:" />
  			<ul className="frontEndList">
          {frontEndSkills.map(skill => <li className="skill" key={skill.name}>{skill.name}</li>)}
        </ul>
        <Headline text="Back End:" />
  			<ul className="backEndList">
          {backEndSkills.map(skill => <li className="skill" key={skill.name}>{skill.name}</li>)}
        </ul>
        <Headline text="Misc:" />
  			<ul className="miscList">
          {miscSkills.map(skill => <li className="skill" key={skill.name}>{skill.name}</li>)}
        </ul>
      </div>
    );

  }
}

export default SkillItem;
