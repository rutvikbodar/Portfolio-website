
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import {createStore,applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './Redcers/Index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='index'>
    <Provider store={createStore(reducers,composeEnhancer(applyMiddleware(reduxThunk)))}>
      <Main />
    </Provider>
  </div>
);

