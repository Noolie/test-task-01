import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';

class Cart extends Component {

  createActiveProductList(){
    return this.props.products.map((product)=>{
      return(
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price} {product.currency}</td>
          <td>1</td>
          <td>{product.price} {product.currency}</td>
          <td><FontAwesome className='remove-product' name='minus-circle'></FontAwesome></td>
        </tr>
      );
    })
  }

  render(){
    if(!this.props.products) {
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
        <h2 className='total-amount'>Total amount: {this.props.totalAmount}</h2>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    products: state.activeProducts,
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(Cart);
