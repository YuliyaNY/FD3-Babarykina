var GroceryItem = React.createClass({

    displayName: 'GroceryItem',

    propTypes: {
        title: React.PropTypes.string.isRequired, 
        price: React.PropTypes.number.isRequired, 
        image: React.PropTypes.string.isRequired, 
        count: React.PropTypes.number.isRequired,
        setItemSelect: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
        setItemDelete: React.PropTypes.func.isRequired
    },

    handleItemClick: function() {
        this.props.setItemSelect(this.props.id);
    },

    handleItemDelete: function(e) {
        e.stopPropagation();
        if (confirm('Are you sure you want to delete?')) this.props.setItemDelete(this.props.id);
    },

    render: function() {
        return React.DOM.tr({
            className: 'Item', 
            className: (this.props.isSelected) ? 'Selected Item' : 'Item',
            id: this.props.id,
            onClick: this.handleItemClick
        },
            React.DOM.td({className: 'Title'}, this.props.title),
            React.DOM.td({className: 'Price'}, this.props.price + '$'),
            React.DOM.td(null,
                React.DOM.img({className: 'Image', src: this.props.image, alt: this.props.title})
            ),
            React.DOM.td({className: 'Count'}, this.props.count),
            React.DOM.td(null,
                React.DOM.input({
                    className: 'Delete',
                    type: 'button', 
                    value: 'Delete Item',
                    onClick: this.handleItemDelete
                }),
            )
        );
    }
});