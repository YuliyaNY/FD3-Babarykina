import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GroceryItemCard extends Component {
    render() {
        return (
            <div className='GroceryItemCard'>
                <p>Title: {this.props.singleItem.title}</p>
                <p>Price: {this.props.singleItem.price}$</p>
                <p>Quantity: {this.props.singleItem.count}</p>
            </div>
        );
    }
}

GroceryItemCard.propTypes = {
    singleItem: PropTypes.object.isRequired
}

export default GroceryItemCard;