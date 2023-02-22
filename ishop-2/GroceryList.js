var GroceryList = React.createClass({

    displayName: 'GroceryList',

    propTypes: {
        storeName: React.PropTypes.string.isRequired, // Store name
        items: React.PropTypes.array.isRequired, // Grocery items
    },

    getInitialState: function() {
        return {
            selectedItemId: null,
            items: this.props.items
        };
    },
   
    setItemSelect: function(itemId) {
        this.setState({selectedItemId: itemId});
    },

    setItemDelete: function (itemId) {
        let filteredItems = this.state.items.filter(item  => item.id != itemId)
        this.setState({items: filteredItems});
    },
   
    render: function() {
        var groceryList = this.state.items.map(item => React.createElement(GroceryItem, {
            key: item.id,
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            count: item.count,
            setItemSelect: this.setItemSelect,
            isSelected: this.state.selectedItemId == item.id,
            setItemDelete: this.setItemDelete
            })
        );

        return React.DOM.div({className: 'GroceryList'}, 
            React.DOM.h1({className: 'StoreName'}, this.props.storeName),
            React.DOM.table({className: 'Items'},
                React.DOM.tbody(null, groceryList)
            )
        );
    }
});