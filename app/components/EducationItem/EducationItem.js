import React from 'react';
import Headline from '../Headline/Headline';

class EducationItem extends React.Component {

  render() {
    //console.log(this);
    let eduList = this.props.eduList;
    let edu = eduList.filter(edu => edu.category === this.props.category);

    return(
      <div>
        <ul className={this.props.category + "_edu_list"}>
          {edu.map(eduLoc =>
            <li className="edu" key={eduLoc.id}>
              {eduLoc.school}
              <br />
              {eduLoc.subject} { this.props.category === "formal" ? ` ~ ${eduLoc.degree} ${eduLoc.completion_year}` : ` `}
            </li>
          )}
        </ul>
      </div>
    );

  }
}

export default EducationItem;
