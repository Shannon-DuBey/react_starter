import React from 'react';
import fetch from 'better-fetch';

import SkillItem from '../components/SkillItem/SkillItem';
import Headline from '../components/Headline/Headline';
const url = '../app/data/skills.json';

class Resume extends React.Component {

  constructor() {
    super();
    this.state = {skills: []};
  }

  loadData(){
    console.log('fetching data');

    fetch(url)
    .then( (response) => { return response.json(); })
    .then( (data) => {
      this.state.skills = data;
      this.setState(this.state.skills);
    })
    .catch( error => {
      console.log("error gettign data: " + error);
    })
  }

  componentDidMount(){
    this.loadData();
  }

  render() {
    //console.log(this);
    let skillList = this.state.skills;

    return(
		<div id='Resume'>
			<Headline text="This is the Resume Page Component" />
      <SkillItem skillList={skillList} />
		</div>
    );
  }
}

export default Resume;
