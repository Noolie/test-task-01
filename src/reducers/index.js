import {combineReducers} from 'redux';
import ProductsReducer from './reducer-products';
import ActiveProductsReducer from './reducer-products-active';
import TotalAmountReducer from './reducer-total-amount';

const allReducers = combineReducers({
  products: ProductsReducer,
  activeProducts: ActiveProductsReducer,
  totalAmount: TotalAmountReducer
});

export default allReducers;
