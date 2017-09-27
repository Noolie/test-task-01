import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FontAwesome from 'react-fontawesome';
import {removeFromCart} from '../actions/remove';
import {increaseQuantity} from '../actions/increment';
import {decreaseQuantity} from '../actions/decrement';

class Cart extends Component {

  createActiveProductList(){
    return this.props.products.map((product)=>{
      return(
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price} USD</td>
          <td>
            <button onClick={()=>this.props.decreaseQuantity(product)} className='minus-quantity'>-</button>
            <p className='product-quantity'>{product.quantity}</p>
            <button onClick={()=>this.props.increaseQuantity(product)} className='plus-quantity'>+</button>
          </td>
          <td>{product.price * product.quantity} USD</td>
          <td><FontAwesome onClick={()=>this.props.removeFromCart(product)} className='remove-product' name='minus-circle'></FontAwesome></td>
        </tr>
      );
    })
  }

  componentDidUpdate(){
    if(this.props.products.length > 0){
      let result = 0;
      for(let i = 0; i < this.props.products.length; i++){
        result += (this.props.products[i].price * this.props.products[i].quantity)
      }
      this.refs.totalAmount.innerHTML = 'Total amount: ' + result + ' USD';
    }
  }

  render(){
    if(!this.props.products || this.props.products.length < 1) {
      return (
        <div>your cart is empty</div>
      )
    }
    return (
      <div className='cart-field'>
        <table>
          <tbody>

            <tr>
              <th>item</th>
              <th>price</th>
              <th>quantity</th>
              <th>total price</th>
            </tr>

            {this.createActiveProductList()}

          </tbody>
        </table>
        <h2 ref='totalAmount' className='total-amount'>0</h2>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    products: state.activeProducts
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    removeFromCart: removeFromCart,
    increaseQuantity: increaseQuantity,
    decreaseQuantity: decreaseQuantity}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
