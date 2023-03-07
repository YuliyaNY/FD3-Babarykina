import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GroceryItem extends Component {
    handleItemClick = () => {
        this.props.setItemSelect(this.props.id);
    }

    handleItemDelete = (e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete?')) this.props.setItemDelete(this.props.id);
    }

    handleItemEdit = (e) => {
        e.stopPropagation();
        this.props.setItemEdit(this.props.id);
    }

    render() {
        return (
            <tr className={(this.props.isSelected) ? 'Selected Item' : 'Item'} onClick={this.handleItemClick}>
                <td className='Title'>{this.props.title}</td>
                <td className='Price'>{this.props.price}$</td>
                <td>
                    <img className='Image' src={this.props.image} alt={this.props.title} onClick={this.handleItemClick}/>
                </td>
                <td>{this.props.count}</td>
                <td>
                    <input className='Button' type='button' value='Edit Item' onClick={this.handleItemEdit} disabled={this.props.disabled}/>
                </td>
                <td>
                    <input className='Button' type='button' value='Delete Item' onClick={this.handleItemDelete} disabled={this.props.disabled}/>
                </td>
            </tr>  
        );
  }
}

GroceryItem.propTypes = {
    title: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    image: PropTypes.string.isRequired, 
    count: PropTypes.number.isRequired,
    setItemSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    setItemDelete: PropTypes.func.isRequired,
    setItemEdit: PropTypes.func.isRequired,
}

export default GroceryItem;