/**
 * Created by emtiaj on 10/19/17.
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// without middleware redux store only supports synchronous data flow
// it wraps store's dispatch()

var configureStoreMethod = function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

export default configureStoreMethod;