import React from 'react';
import ProductList from '../containers/product-list';
import Cart from '../containers/product-cart';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1 className='title'>cart</h1>
        <Cart></Cart>
        <h1 className='title'>products</h1>
        <ProductList></ProductList>
      </div>
    );
  }
}

export default App;
