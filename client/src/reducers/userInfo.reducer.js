/**
 * Created by emtiaj on 10/19/17.
 */

const initialState = {
  data: {
    firstName: '',
    email: ''
  }
};

var userData = function (state = initialState, action) {
  switch (action.type) {
    case 'USER_DATA_FETCHED_SUCCESS':
      return action.user;
    case 'USER_DATA_FETCHED_FAILURE':
      return initialState;
    case 'CLEAR_USER_DATA_FETCHED_PREVIOUSLY':
      return initialState;
    case 'SEND_EMPTY_USER_DATA':
      return initialState;
    default:
      return state;
  }
};

export {
  userData
};