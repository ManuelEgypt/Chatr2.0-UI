import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

class AuthButton extends Component {
  render() {
    if (!this.props.user) {
      return (
        <>
          <div
            classname="row"
            style={{ position: "relative", left: 1200, opacity: 1 }}
          >
            <div classname="col-6">
              <div key="loginButton" className="nav-item">
                <Link to="/login" className="nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
              </div>
            </div>
            <div classname="col-6">
              <div key="loginButton" className="nav-item">
                <Link to="/signup" className="nav-link">
                  <FontAwesomeIcon icon={faUserPlus} /> Signup
                </Link>
              </div>
            </div>
          </div>
          <Redirect to="/Welcome" />
        </>
      );
    }
    const logoutAndReset = () => {
      this.props.logout();
      this.props.resetChannels();
    };

    return (
      <>
        <div key="signupButton" className="nav-item" onClick={logoutAndReset}>
          <Link to="/signout" className="nav-link">
            <FontAwesomeIcon icon={faSignOutAlt} /> SignOut{" "}
            {this.props.user.username}
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout()),
    resetChannels: () => dispatch(actionCreators.resetChannels())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
