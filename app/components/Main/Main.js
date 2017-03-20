import React from 'react';
import './main.css';
import Button from '../Button/Button';
import Headline from '../Headline/Headline';

class Main extends React.Component {
  render() {
    return(
      <div id='Main'>
      	<Headline />
        <p> This is the main content of the app </p>
        <Button />
      </div>
    );
  }
}

export default Main;