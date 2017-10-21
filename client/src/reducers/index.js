/**
 * Created by emtiaj on 10/19/17.
 */

import {combineReducers} from 'redux';
import {userData} from './userInfo.reducer';
import {userFormData} from './user.reducer';

var rootReducer = combineReducers({
  userData: userData,
  userFormData: userFormData
});

export default rootReducer;