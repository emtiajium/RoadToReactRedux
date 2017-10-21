/**
 * Created by emtiaj on 10/19/17.
 */

var userDataFetchedSuccess = function (user) {
  return {
    type: 'USER_DATA_FETCHED_SUCCESS',
    user: user
  };
};

var userDataFetchedFailure = function () {
  return {
    type: 'USER_DATA_FETCHED_FAILURE'
  };
};

var clearUserDataFetchedSuccess = function () {
  return {
    type: 'CLEAR_USER_DATA_FETCHED_PREVIOUSLY'
  };
};

var sendEmptyUserDataSuccess = function () {
  return {
    type: 'SEND_EMPTY_USER_DATA'
  };
};

var getUser = function () {
  var other = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return function (dispatch) {
    fetch('/get_user', other)
      .then(function (response) {
        return response.json();
      })
      .then(function (user) {
        if(Object.keys(user).length) {
          return dispatch(userDataFetchedSuccess(user));
        }
        // else
        dispatch(sendEmptyUserDataSuccess());
      })
      .catch(function (err) {
        dispatch(userDataFetchedFailure());
      });
  }
};

var clearUserDataFetched = function () {
  return function (dispatch) {
    dispatch(clearUserDataFetchedSuccess());
  };
};

export {
  getUser,
  clearUserDataFetched
};