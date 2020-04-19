import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SignedInLinks from "../SignedInLinks";
import SignedOutLinks from "../SignedOutLinks";
import "./nav.css";
import { logoutUser, loginUser } from "../../modules/auth";
import { connect } from "react-redux";

class Navbar extends Component {
  componentDidMount() {
    this.props.loginUser();
  }
  render() {
    const links = !this.props.isAuthenticated ? (
      <SignedOutLinks />
    ) : (
      <SignedInLinks
        SignOut={() => this.props.logoutUser()}
        user={this.props.user}
      />
    );
    return (
      <nav className="nav-wrapper black ">
        <div className="container row">
          <Link to="/" className="brand-logo col s1 m15">
            <span className="logo">YOBETIT</span>
          </Link>
          <div>{links}</div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loginError: state.auth.loginError,
  user: state.auth.user
});
const mapActionCreators = {
  logoutUser,
  loginUser
};

export default connect(mapStateToProps, mapActionCreators)(withRouter(Navbar));
