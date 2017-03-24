import React from 'react';
import './headline.css';

class Headline extends React.Component {
  render() {
    return(
      <h2 className='headline'>{this.props.text}</h2>
    );
  }
}

export default Headline;