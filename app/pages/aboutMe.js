import React from 'react';
import Headline from '../components/Headline/Headline';

class AboutMe extends React.Component {
  render() {
  	console.log(this.props, document.location.hash);
  	
    return (
      <div id="aboutMe">
        <Headline text="This is the About Me Component"/>
      </div>
    );
  }
}

export default AboutMe;