var Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        words: React.PropTypes.array.isRequired, 
    },

    getInitialState: function() {
        return {
            words: this.props.words,
            filteredArr: '',
            sortedArr: false,
        };
    },

    handleSearch: function(e) {
        this.setState({filteredArr: e.target.value}, this.findMatch);
    },

    findMatch: function () {
        let result = this.props.words.filter(txt => txt.toLowerCase().indexOf(this.state.filteredArr.toLowerCase()) !== -1);
        
        if (this.state.sortedArr) {
          result = result.sort();
        };
    
        this.setState({words: result});
    },

    handleCheck: function(e) {
        this.setState({sortedArr: e.target.checked}, this.findMatch);
    },

    handleReset: function () {
        this.setState({words: this.props.words});
        this.setState({filteredArr: ''});
        this.setState({sortedArr: false});
    },

    render: function() {
        var wordsList = this.state.words.map((word, ind) => React.DOM.p({key: ind}, word));
       
        return React.DOM.div(null, 
            React.DOM.input({type: 'checkbox', checked: this.state.sortedArr, onClick: this.handleCheck}),
            React.DOM.input({type: 'text', value: this.state.filteredArr, onChange: this.handleSearch}),
            React.DOM.input({type: 'button', value: 'reset', onClick: this.handleReset}),
            React.DOM.div(null, wordsList),
        );
    },
});