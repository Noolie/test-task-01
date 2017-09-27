import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import App from './components/App';
import './main.css';

const store = createStore(allReducers);

// store.subscribe(()=>{
//   console.log('subscribe', store.getState());
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
 );
