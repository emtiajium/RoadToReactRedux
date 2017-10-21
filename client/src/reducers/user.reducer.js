/**
 * Created by emtiaj on 10/19/17.
 */

const initialState = {
  userFormEmail: '',
  userFormFirstName: '',
  userFormSavedData: {}
};

var userFormData = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      return Object.assign({}, state, {
        userFormEmail: action.userFormEmail
      });
    case 'SET_USER_FIRST_NAME':
      return Object.assign({}, state, {
        userFormFirstName: action.userFormFirstName
      });
    case 'SAVE_USER_SUCCESS':
      return Object.assign({}, state, {
        userFormSavedData: action.userFormSavedData
      });
    case 'SAVE_USER_FAILURE':
      return Object.assign({}, state, {
        userFormSavedData: action.userFormSavedData
      });
    case 'CLEAR_USER_FORM':
      return initialState;
    default:
      return state;
  }
};

export {
  userFormData
};