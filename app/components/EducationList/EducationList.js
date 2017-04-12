import React from 'react';
import Headline from '../Headline/Headline';
import EducationItem from '../EducationItem/EducationItem';

class EducationList extends React.Component {
  render() {
    //console.log(this);
    let eduList = this.props.eduList;

    return(
      <div>
        <Headline text="Formal:" />
  			<ul>
          <EducationItem category="formal" eduList={eduList} />
        </ul>

        <br />

        <Headline text="Misc:" />
  			<ul>
          <EducationItem category="misc" eduList={eduList} />
        </ul>

      </div>
    );

  }
}

export default EducationList;
