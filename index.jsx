import React from "react";
import { render } from "react-dom";

import "./style.css";

class HelloReact extends React.Component {
  render() {
    return(
      <div id='helloReact'>
        Hello From React! x2 ...
      </div>
    );
  }
} 

render(<HelloReact />, document.getElementById('root-app'));