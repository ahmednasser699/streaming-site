import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const id =
  "727614979794-qbvq5o9050tndnrnira2ibp8mcha95a9.apps.googleusercontent.com";

class Googleauth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: id,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.listener(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.listener);
        });
    });
  }
  listener = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onsignin = () => {
    this.auth.signIn();
  };
  onsignout = () => {
    this.auth.signOut();
  };
  renderstate() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onsignout}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onsignin}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div className="item">{this.renderstate()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(Googleauth);
