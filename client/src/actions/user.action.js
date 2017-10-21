/**
 * Created by emtiaj on 10/19/17.
 */

// Action creator return an action

var setUserEmailSuccess = function (email) {
  return {
    type: 'SET_USER_EMAIL',
    userFormEmail: email
  };
};

var setUserFirstNameSuccess = function (firstName) {
  return {
    type: 'SET_USER_FIRST_NAME',
    userFormFirstName: firstName
  };
};

var saveUserSuccess = function (user) {
  return {
    type: 'SAVE_USER_SUCCESS',
    userFormSavedData: user
  };
};

var saveUserFailure = function (user) {
  return {
    type: 'SAVE_USER_FAILURE',
    userFormSavedData: user
  };
};

var clearUserFormSuccess = function () {
  return {
    type: 'CLEAR_USER_FORM'
  };
};

var setUserEmail = function (email) {
  return function (dispatch) {
    dispatch(setUserEmailSuccess(email));
  };
};

var setUserFirstName = function (firstName) {
  return function (dispatch) {
    dispatch(setUserFirstNameSuccess(firstName));
  };
};

var saveUserToDatabase = function (userData) {
  var other = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return function (dispatch) {
    return new Promise(function (fulfill, reject) {
      fetch('/save_user', other)
        .then(function (response) {
          return response.json();
        })
        .then(function (user) {
          dispatch(saveUserSuccess(user));
          fulfill(user);
        })
        .catch(function (err) {
          dispatch(saveUserFailure(err));
          reject(err);
        });
    });
  };
};

var clearUserForm = function () {
  return function (dispatch) {
    dispatch(clearUserFormSuccess());
  };
};

export {
  setUserEmail,
  setUserFirstName,
  saveUserToDatabase,
  clearUserForm
};