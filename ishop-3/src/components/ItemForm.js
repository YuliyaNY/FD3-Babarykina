import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemForm extends Component {
    state = {
        newTitle: this.props.singleItem.title,
        newPrice: this.props.singleItem.price,
        newImage: this.props.singleItem.image,
        newCount: this.props.singleItem.count,
        titleError: "",
        priceError: "",
        imageError: "",
        countError: "",
        valid: true,
    }

    handleTitleChange = (e) => {
        this.setState({newTitle: e.target.value}, this.validate);
        {this.props.mode === 2 && this.props.editingStarted(true);}
    }
    
    handlePriceChange = (e) => {
        this.setState({newPrice: parseInt(e.target.value)}, this.validate);
        {this.props.mode === 2 && this.props.editingStarted(true);}
    }

    handleImageChange = (e) => {
        this.setState({newImage: e.target.value}, this.validate);
        {this.props.mode === 2 && this.props.editingStarted(true);}
    }

    handleCountChange = (e) => {
        this.setState({newCount: parseInt(e.target.value)}, this.validate);
        {this.props.mode === 2 && this.props.editingStarted(true);}
    }

    validate = () => {
        let titleError = "", priceError = "", imageError = "", countError = "", valid;

        if(this.state.newTitle === "") {
            titleError = "Please fill the field."
        }
        if(isNaN(this.state.newPrice)) {
            priceError = "Please fill the field. Value must be a number."
        }
        if(this.state.newImage === "") {
            imageError = "Please fill the field."
        }
        if(isNaN(this.state.newCount)) {
            countError = "Please fill the field. Value must be a number."
        }
        valid = (!titleError) && (!priceError) && (!imageError) && (!countError);
        this.setState({titleError, priceError, imageError, countError, valid});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setItemSave(this.props.singleItem.id, {
            title: this.state.newTitle,
            price: this.state.newPrice,
            image: this.state.newImage,
            count: this.state.newCount,
        })
    }

    handleCancel = () => {
        this.props.setCancel();
    }

    render() {
        return (
            <form>
                <h2 className='FormTitle'>{this.props.mode === 2 ? 'Edit Existing Item' : 'Add New Item'}</h2>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input 
                        type='text'
                        name='title'
                        value={this.state.newTitle || ""}
                        onChange={this.handleTitleChange}
                    />
                    <span>{this.state.titleError}</span>
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input 
                        type='number'
                        name='price'
                        value={this.state.newPrice || ""}
                        onChange={this.handlePriceChange}
                    />
                    <span>{this.state.priceError}</span>
                </div>
                <div>
                    <label htmlFor='image'>Image:</label>
                    <input 
                        type='text'
                        name='image'
                        value={this.state.newImage || ""}
                        onChange={this.handleImageChange}
                    />
                    <span>{this.state.imageError}</span>
                </div>
                <div>
                    <label htmlFor='count'>Quantity:</label>
                    <input 
                        type='number'
                        name='count'
                        value={this.state.newCount || ""}
                        onChange={this.handleCountChange}
                    />
                    <span>{this.state.countError}</span>
                </div>
                <input className='Button' type='button' value='Save' onClick={this.handleSubmit} disabled={!this.state.valid}/>
                <input className='Button' type='button' value='Cancel' onClick={this.handleCancel} />
            </form>
        );
    }
}

ItemForm.propTypes = {
    setItemSave: PropTypes.func.isRequired,
    setCancel: PropTypes.func.isRequired,
}

export default ItemForm;