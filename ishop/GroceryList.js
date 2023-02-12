var GroceryList = React.createClass({

    displayName: 'GroceryList',

    propTypes: {
        storeName: React.PropTypes.string.isRequired, // Store name
        items: React.PropTypes.array.isRequired, // Grocery items
    },

    render: function() {
        var groceryList = this.props.items.map(item =>
            React.DOM.tr({key: item.id, className: 'Item'},
                React.DOM.td({className: 'Title'}, item.title),
                React.DOM.td({className: 'Price'}, item.price + '$'),
                React.DOM.td(null,
                    React.DOM.img({className: 'Image', src: item.image, alt: item.title})
                ),
                React.DOM.td({className: 'Count'}, item.count),
            ));

        return React.DOM.div({className: 'GroceryList'}, 
            React.DOM.h1({className: 'StoreName'}, this.props.storeName),
            React.DOM.table({className: 'Items'},
                React.DOM.tbody(null, groceryList)
            ),
        );
    },
});