import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  setUserEmail,
  setUserFirstName,
  saveUserToDatabase,
  clearUserForm
} from '../actions/user.action';

class User extends Component {

  constructor(props) {
    super(props);

    this.saveUser = this.saveUser.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
  }

  // Perform any necessary cleanup in this method

  componentWillUnmount() {
    this.props.clearUserForm();
  }

  saveUser() {
    let user = {
      firstName: this.props.firstName,
      email: this.props.email
    };

    this.props.saveUserToDatabase(user)
      .then(function (userSaveInfo) {
        alert(userSaveInfo.message);
      })
      .catch(function (err) {
        alert(err.message);
      });
  }

  setEmail(event) {
    let email = event.target.value;
    this.props.setUserEmail(email);
  }

  setFirstName(event) {
    let firstName = event.target.value;
    this.props.setUserFirstName(firstName);
  }

  render() {
    /**
     * controlled vs uncontrolled component/input
     * https://gist.github.com/markerikson/d71cfc81687f11609d2559e8daee10cc
     */
    let element = (
      <div>
        <div className="page-header">
          <h2>New User</h2>
        </div>

        <div id="user-form-div">
          <form id="user-form" className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Email</label>
              <div className="col-sm-4">
                <input type="email" className="form-control" id="email" defaultValue={this.props.email} onChange={this.setEmail} placeholder="" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">First Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="first-name" defaultValue={this.props.firstName} onChange={this.setFirstName} placeholder="" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-4">
                <button type="button" id="save-user" className="btn btn-primary" onClick={this.saveUser}>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
    return element;
  }
}

/**
 * transform the current redux store state into the props
 * `store.getState().X` can be used as `this.props.X`
 * @param state
 * @returns props
 */

const mapStateToProps = function (state) {
  return {
    firstName: state.userFormData.userFormFirstName,
    email: state.userFormData.userFormEmail,
    user: state.userFormData.userFormSavedData
  };
};

/**
 * dispatch action creator to props
 * `store.dispatch(aAction)` > `this.props(aAction)`
 * if declared as function, pass `dispatch` as first argument
 */

const mapDispatchToProps = function (dispatch) {
  return {
    setUserEmail: bindActionCreators(setUserEmail, dispatch),
    setUserFirstName: bindActionCreators(setUserFirstName, dispatch),
    saveUserToDatabase: bindActionCreators(saveUserToDatabase, dispatch),
    clearUserForm: bindActionCreators(clearUserForm, dispatch)
  };
};

// connects react component to redux store

export default connect(mapStateToProps, mapDispatchToProps)(User);