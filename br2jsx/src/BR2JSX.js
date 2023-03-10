import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends Component {
  render() {
    let arr = this.props.text.split(/\<\s*[b][r]\s*\/?\>/);
    let newArr = [];

    arr.forEach((word, i) => {
      if(i) {
        newArr.push(<br key={i}/>);
      }
      newArr.push(word);
    });
    
    return (
      <div className='br2jsx'>{newArr}</div>
    );
  }
}

BR2JSX.propTypes = {
    text: PropTypes.string.isRequired
}

export default BR2JSX;
