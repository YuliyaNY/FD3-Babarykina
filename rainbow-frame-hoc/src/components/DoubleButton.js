import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends Component {
    render() {
        return (
            <>
            <input type='button' value={this.props.caption1} onClick={() => this.props.cbPressed(1)} />
            {this.props.children}
            <input type='button' value={this.props.caption2} onClick={() => this.props.cbPressed(2)} />
            </>
        );
    }
}

DoubleButton.propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
}

export default DoubleButton;