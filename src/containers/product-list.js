import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../actions/add';

class ProductList extends Component {

  createProductsItems(){
    return this.props.products.map((product)=>{
      return (
        <li key={product.id} className='product-item'>
          <img className='product-image' src={product.image} alt={product.name} />
          <p className='product-name'>{product.name}</p>
          <h3 className='product-price'>{product.price} {product.currency}</h3>
          <button onClick={() => this.props.addToCart(product)} className='product-add'>add to cart</button>
        </li>
      );
    })
  }

  render(){
    return (
      <ul className='product-list'>
        {this.createProductsItems()}
      </ul>
    );
  }

}

function mapStateToProps(state){
  return {
    products: state.products
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart: addToCart}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList);
