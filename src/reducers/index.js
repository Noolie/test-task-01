import {combineReducers} from 'redux';
import ProductsReducer from './reducer-products';
import ActiveProductsReducer from './reducer-products-active';

const allReducers = combineReducers({
  products: ProductsReducer,
  activeProducts: ActiveProductsReducer
});

export default allReducers;
