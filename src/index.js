import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import {modalsStore,cartStore} from './redux/Reducer';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

var rootReducer = combineReducers({ modalsStore , cartStore});
const store = createStore(
  rootReducer,
  devToolsEnhancer()
);



// const store = configureStore({reducer: rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  
  </React.StrictMode>
);


