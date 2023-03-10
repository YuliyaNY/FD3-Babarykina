import React, { Component } from 'react';
import './RainbowFrame.css';
import PropTypes from 'prop-types';

class RainbowFrame extends Component {
  render() {
    return (
      <div className='RainbowFrame'>
        {
            this.props.colors.reduce((prev, color) => <div style={{border: `solid 3px ${color}`}}>{prev}</div>, this.props.children)
        }
      </div>
    );
  }
}

RainbowFrame.propTypes = {
    colors: PropTypes.array.isRequired
}

export default RainbowFrame;
