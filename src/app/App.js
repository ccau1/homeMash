/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from 'src/reducers';
import Router from 'src/app/Router.js';
import Intl from 'src/app/Intl.js';

/* Store & Middleware */
declare var __DEV__:string;

const loggerMiddleware = createLogger({predicate: (getState, action) => process.env.NODE_ENV === 'development' && __DEV__});

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  );
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});


export default () => (
  <Provider store={store}>
    <Intl>
      <Router />
    </Intl>
  </Provider>
);
