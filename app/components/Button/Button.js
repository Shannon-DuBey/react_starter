import React from 'react';
import './button.css';

class Button extends React.Component {
	buttonClick = (e) => {
		e.preventDefault();
		console.log('button click triggered');
	}

	render() {
		return (
			<a href='#' className='button' onClick={this.buttonClick}>{this.props.buttonText}</a>
		);
  	}
}

export default Button;