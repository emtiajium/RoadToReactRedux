import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import {getUser, clearUserDataFetched} from '../actions/userInfo.action';

class UserInfo extends Component {

  // componentDidMount() is invoked immediately after a component is mounted

  componentDidMount() {
    this.props.getUser();
  }

  componentWillUnmount() {
    this.props.clearUserDataFetched();
  }

  render() {
    let user = this.props.user;

    let element = (
      <div>
        <div className="page-header">
          <h2>Last Registered User</h2>
        </div>

        <div id="user-form-div" className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-4">
              <input disabled={true} type="email" className="form-control" id="email" value={user.email} placeholder="" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">First Name</label>
            <div className="col-sm-4">
              <input disabled={true} type="text" className="form-control" id="first-name" value={user.firstName} placeholder="" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Created At</label>
            <div className="col-sm-4">
              <input disabled={true} type="text" className="form-control" id="created-at" value={moment(user.createdAt).utc().format('MMMM DD, YYYY')} placeholder="" />
            </div>
          </div>
        </div>
      </div>
    );
    return element;
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.userData.data
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getUser: bindActionCreators(getUser, dispatch),
    clearUserDataFetched: bindActionCreators(clearUserDataFetched, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
