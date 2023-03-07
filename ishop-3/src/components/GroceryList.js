import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroceryItem from './GroceryItem';
import GroceryItemCard from './GroceryItemCard';
import ItemForm from './ItemForm';
import './GroceryList.css';

class GroceryList extends Component {
    state = {
        items: this.props.items,
        selectedItemId: null,
        mode: 0, // 1 - Show,  2 - Edit, 3 - Add New
        disabled: false,
        itemSelectdisabled: false,
    }

    setItemSelect = (itemId) => {
        {this.state.itemSelectdisabled === false  && this.setState({selectedItemId: itemId, mode: 1})}
    }

    setItemDelete = (itemId) => {
        let filteredItems = this.state.items.filter(item  => item.id != itemId)
        this.setState({items: filteredItems, mode: 0, selectedItemId: null});
    }

    setItemEdit = (itemId) => {
        this.setState({selectedItemId: itemId, mode: 2});
    }

    setItemSave = (id, newProps) => {
        if (this.state.mode == 2) {
            let items = [...this.state.items];
            let itemIndex = items.findIndex(item => item.id === id);
            if(itemIndex === -1) {
                return;
            }
            let newItem = {...items[itemIndex]}
            newItem.title = newProps.title;
            newItem.price = newProps.price;
            newItem.image = newProps.image;
            newItem.count = newProps.count;
            items[itemIndex] = newItem;
            this.setState({items, disabled: false, selectedItemId: null, mode: 0, itemSelectdisabled: false});
        } else if (this.state.mode == 3) {
            newProps.id = this.state.items[this.state.items.length - 1].id + 1;
            this.setState((state) => ({
                items: [...state.items, newProps],
            }));

            this.setState({selectedItemId: null, mode: 0, disabled: false, itemSelectdisabled: false});
        }
    }

    setCancel = () => {
        this.setState({selectedItemId: null, mode: 0, disabled: false, itemSelectdisabled: false});
    }

    handleAddItem = () => {
        this.setState({selectedItemId: null, mode: 3, disabled: true, itemSelectdisabled: true});
    }

    editingStarted = (val) => {
       this.setState({disabled: val, itemSelectdisabled: true});
    }

    render() {
        let singleItem = this.state.items.find((item) => item.id == this.state.selectedItemId);

        return (
            <div className='GroceryList'>
                <h1 className='StoreName'>{this.props.storeName}</h1>
                <table className='Items'>
                    <tbody>
                        {this.state.items.map(item => 
                            <GroceryItem 
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                price={item.price} 
                                image={item.image} 
                                count={item.count} 
                                setItemSelect={this.setItemSelect}
                                isSelected={this.state.selectedItemId == item.id}
                                setItemDelete={this.setItemDelete}
                                setItemEdit={this.setItemEdit}
                                disabled={this.state.disabled}
                            />
                        )}
                    </tbody>
                </table>   
                {this.state.mode === 1 && <GroceryItemCard singleItem={singleItem}/>}
                {this.state.mode === 2 && <ItemForm 
                    key={this.state.selectedItemId} 
                    mode={this.state.mode}
                    singleItem={singleItem}
                    setItemSave={this.setItemSave}
                    setCancel={this.setCancel}
                    editingStarted={this.editingStarted}
                />}
                {this.state.mode === 3 && <ItemForm 
                    key={this.state.items.id} 
                    mode={this.state.mode}
                    singleItem=""
                    setItemSave={this.setItemSave}
                    setCancel={this.setCancel}
                />}
                {!(this.state.mode === 2 || this.state.mode === 3) && <input className='Button AddNewButton' type="button" value="Add New Item" onClick={this.handleAddItem}/>} 
                
            </div>  
        );
    }
}

GroceryList.propTypes = {
    storeName: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default GroceryList;