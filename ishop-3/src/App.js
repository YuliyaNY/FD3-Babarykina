import React, { Component } from 'react';
import GroceryList from './components/GroceryList';

class App extends Component {
  render() {
    let ishop=`Trader Joe's`;
    let itemsArr=require('./data.json');

    return (
      <GroceryList storeName={ishop} items={itemsArr}/>
    );
  }
}

export default App;