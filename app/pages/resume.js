import React from 'react';
import fetch from 'better-fetch';

import SkillList from '../components/SkillList/SkillList';
import EducationList from '../components/EducationList/EducationList';
import WorkHistoryList from '../components/WorkHistoryList/WorkHistoryList';
import Headline from '../components/Headline/Headline';
const url = '../app/data/resume.json';

class Resume extends React.Component {

  constructor() {
    super();
    this.state = {skills: [], education: [], work_history: []};
  }

  loadData(){
    console.log('fetching data');

    fetch(url)
    .then( (response) => { return response.json(); })
    .then( (data) => {
      console.log(data);
      this.state.skills = data.skills;
      this.state.education = data.education;
      this.state.work_history = data.employers;
      this.setState([this.state.skills, this.state.education, this.state.work_history]);
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
    let workHistory = this.state.work_history;
    let education = this.state.education;

    return(
		<div id='Resume'>
      <Headline text="Relevant Skills" />
      <br />
      <SkillList skillList={skillList} />

      <hr />
      <Headline text="Work History" />
      <br />

      <hr />
      <Headline text="Education" />
      <br />
      <EducationList eduList={education} />

		</div>
    );
  }
}

export default Resume;
